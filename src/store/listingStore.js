import { create } from "zustand";
import axios from "axios";
import { toast } from "react-toastify";

/**
 * Creates a Zustand store to handle user actions and state updates.
 */
const listingStore = create((set, get) => ({
 
  getAllUsersLoader: false,
  payload: null,
  usersData: [],
  totalData: 0,
  user: null,
  error: null,
  abortController: null,

  /**
   * Fetches user data from API with pagination and search.
   * @param {Object} payload - Contains search query and pagination details.
   * @return {Promise<Object>} API response.
   */
  async fetchAllUsersData(payload) {
    const controller = new AbortController();
    const { signal } = controller;

    set({ getAllUsersLoader: true });

    const abortRequest = (time) => {
      return new Promise((_, reject) => {
        setTimeout(() => {
          controller.abort();

          const error = new Error(
            "Request took too long to respond. Please try again later."
          );
          error.name = "AbortError";
          reject(error);
          console.log(error.name, "error.name1");
        }, time);
      });
    };
    
    const fetchPromise = axios.get(`${process.env.API}/users`, {
      params: {
        page: payload?.pageNumber,
        limit: payload?.pageLimit,
        search: payload?.searchQuery,
      },
      signal: signal,
    });

    const timeoutPromise = abortRequest(5000);
    try {
      const response = await Promise.race([fetchPromise, timeoutPromise]);
      set({
        usersData: response.data.data,
        totalData: response.data.totalData,
        getAllUsersLoader: false,
      });

      return response;
    } catch (error) {
      if (error.name === "AbortError") {
        toast.error("Fetch aborted due to slow API response");
        set({ getAllUsersLoader: false });
        return;
      } else {
        console.log("Error fetching users:", error);
        toast.error("Fetching users data failed!");
      }
      set({ getAllUsersLoader: false });
    }
  },

  /**
   * Deletes a user from API.
   * @param {string} userId - User's unique identifier.
   * @return {Promise<Object>} API response.
   */
  async deleteUser(userId, searchParams) {
    try {
      const response = await axios.delete(
    `${process.env.API}/users/${userId}`
      );

      set({
        usersData: get().usersData.filter((user) => user._id !== userId),
        totalData: get().totalData - 1,
      });

      await get().fetchAllUsersData({
        pageNumber: searchParams.get("page"),
        pageLimit: 10,
      });

      return response;
    } catch (error) {
      toast.error("Deletion of user failed.");
    }
  },

  /**
   * Updates a user's status in the API and local state.
   *
   * @param {Object} payload - Contains user ID and new status.
   * @returns {Promise<Object>} API response.
   */
  async updateStatus(payload) {
    try {
      const response = await axios.patch(
       `${process.env.API}/users/${payload.id}/status`,
        { status: payload.newStatus },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const currentUsers = get().usersData;
      const updatedUsersData = currentUsers.map((user) => {
        if (user._id === payload.id) {
          return {
            ...user,
            status: payload.newStatus,
          };
        }

        return user;
      });

      set({
        usersData: updatedUsersData,
      
      });
      return response;
    } catch (error) {
      console.log("Error in updateUserData:", error);
   
      toast.error("Status change failed!");
    }
  },

}));

export default listingStore;
