import React from 'react'

const TableShimmer = () => {

  return (
    <div role="status" className="w-full h-100 mt-10 p-4 space-y-4 border border-gray-200 divide-y divide-gray-200 rounded-sm shadow-sm animate-pulse dark:divide-gray-400 md:p-6 dark:border-gray-400">
      <div className="flex items-center justify-between">
        <div>
          <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-400 w-24 mb-2.5"></div>
          <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-300"></div>
        </div>
        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-400 w-12"></div>
      </div>
      <div className="flex items-center justify-between pt-4">
        <div>
          <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-400 w-24 mb-2.5"></div>
          <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-300"></div>
        </div>
        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-400 w-12"></div>
      </div>
      <div className="flex items-center justify-between pt-4">
        <div>
          <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-400 w-24 mb-2.5"></div>
          <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-300"></div>
        </div>
        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-400 w-12"></div>
      </div>
      <div className="flex items-center justify-between pt-4">
        <div>
          <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-400 w-24 mb-2.5"></div>
          <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-300"></div>
        </div>
        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-400 w-12"></div>
      </div>
      <div className="flex items-center justify-between pt-4">
        <div>
          <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-400 w-24 mb-2.5"></div>
          <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-300"></div>
        </div>
        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-400 w-12"></div>
      </div>
      <div className="flex items-center justify-between pt-4">
        <div>
          <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-400 w-24 mb-2.5"></div>
          <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-300"></div>
        </div>
        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-400 w-12"></div>
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  )
}

export default TableShimmer
