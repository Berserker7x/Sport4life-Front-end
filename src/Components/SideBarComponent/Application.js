import React from 'react';
import SideBar from '../SideBar';
import UserTable from './UserTable';
 

export default function Application() {
  return (
    <div>
    <SideBar/>

     
     
    <div className="p-7 text-2x1 font-semibold flex-1 h-screen md:ml-80 sm:ml-20">
     

          
        
            <h1 className="text-3xl  mb-7">List of all users</h1>
            <div className="ml-4">
            <div className="px-8 pt-6 py-6 mb-5 mt-5 -ml-5  bg-gray-100 border-2 border-gray-300 rounded-xl ">
              <UserTable />
            
            
               </div>
               </div>
            </div>
            </div>
  )
}
