import React from 'react';
import UsersList from './components/userComponents/UsersList';
import { BrowserRouter } from 'react-router-dom';
import TotalUsers from './components/userComponents/TotalUsers';
import SearchUsers from './components/userComponents/SearchUser';
import { Link } from 'react-router-dom';
import './index.css';
import CheckInternetConnection from './components/CheckInternetConnection';

const isStandalone = !window.__POWERED_BY_HOST__;

const App = () => {

  const content = (
    <CheckInternetConnection>
      <div className='flex flex-col  '>
        <div className='flex flex-row ml-[250px] mr-[250px] mt-[50px] gap-[400px] '>
          <div className='' >
            <TotalUsers />
          </div>

          <div className=' flex flex-row gap-[100px] '>
            <Link
              to="/createUser"
              className="bg-sky-600 hover:bg-sky-800 px-4 py-2 font-medium text-white text-center rounded-3xl w-28 sm:w-32 md:w-32">
              Create User
            </Link>
            <SearchUsers />
          </div>

        </div>
        <div className='mt-[50px]'>
          <UsersList />
        </div>
      </div>
    </CheckInternetConnection>
  );
  return isStandalone ? <BrowserRouter>{content}</BrowserRouter> : content
};

export default App; 
