import React from 'react'
import SideBar from '../SideBar'


export default function Ask() {
  return (
    <>
     <SideBar/>
     <div className="p-7 text-2x1 font-semibold flex-1 h-screen md:ml-80 sm:ml-20">
            
          
            <h1 className="text-3xl  mb-7">ASk community</h1>
    <div>
   
    <form>   
  <div className="w-full  p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 flex flex-col items-center">
    <label for="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your title</label>
    <input type="title" id="title" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="your title" required/>
    <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Question</label>
<textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a Question..."></textarea>
<button class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full mt-4">Ask</button>
  </div>
  </form>
  </div>
  </div>
  </>
  )
}
