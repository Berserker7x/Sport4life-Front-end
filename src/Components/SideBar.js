import React ,{useState}from 'react'
import sp4life2 from './Assets/images/sp4life2.png'
import Ask from './SideBarComponent/Ask'
import {Link} from 'react-router-dom'


export default function SideBar() {
  const [showAsk, setshowAsk] = useState(false);


 
   return (
      <div className="flex">
         <div className="h-screen    md:bg-black md:w-72 sm:bg-black sm:w-14 fixed">
         {/* <img src={control} className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
            border-2 rounded-full  ${!open && "rotate-180"}`}
           onClick={() => setOpen(!open)}
         />  */}
         <div>
         <div className="flex gap-x-4 items-center">
           
       
         <img  src={sp4life2} className="h-20 w-50 ml-5 mt-5 cursor-pointer  sm:ml-4   md:-mr-4"/>
              <h1  className="text-white origin-left font-bold text-3xl mt-5 ml-2  md:visible sm:invisible ">  Sp4Life </h1>
           </div>
           <ul className="pt-6">
           
             <li
                
               className="flex  rounded-md p-2 cursor-pointer  text-gray-500 hover:text-white  text-sm items-center gap-x-4" 
               
             >
               <Link className="flex" to="/Home">
               {/* <img src={chart_fill } className="ml-1"/> */}
               <span className="origin-left ml-1   md:visible sm:invisible">
                Home
               </span>
               </Link>
             </li>
             
            
             
               
             <li
                
                className="flex  rounded-md p-2 cursor-pointer  text-gray-500 hover:text-white  text-sm items-center gap-x-4" 
                
              >
                 <Link className="flex" to="/Application">
                {/* <img src={Calendar} className="ml-1" /> */}
                <span className="origin-left duration-200 ml-1   md:visible  sm:invisible">
                  My Questions
               </span>
               </Link>
              </li>
              <li
                
                className="flex  rounded-md p-2 cursor-pointer  text-gray-500 hover:text-white  text-sm items-center gap-x-4" 
                
              >
                 <Link className="flex" to="/">
                {/* <img src={Folder}  className="ml-1"/> */}
                <span className="origin-left duration-200 ml-1     md:visible  sm:invisible">
                  Find Athletes 
                 </span>
                </Link>
              </li>
              <li
                
                className="flex ml-1 rounded-md p-2 cursor-pointer  text-gray-500 hover:text-white  text-sm items-center gap-x-4" 
                
              >
                <Link className="flex" to="/Ask">
               {/* <img src={Bank3}  className=" w-6"/> */}
                 <button onClick ={() => setshowAsk(!showAsk)} className="origin-left duration-200 ml-1  mt-2  md:visible sm:invisible">
                    Ask Community 
               </button>
               </Link>
             
              </li>
              
               <li
                
               className="flex  rounded-md p-2 cursor-pointer  text-gray-500 hover:text-white  text-sm items-center gap-x-4" 
               
             >
                <Link className="flex" to="/Setting">
               {/* <img src={Chart}  className="ml-1"/> */}
               <span className="origin-left duration-200 ml-1     md:visible  sm:invisible">
                 Settings
               </span>
               </Link>
             </li>
                 
             {/* <li
                
                className="flex  rounded-md p-2 cursor-pointer  text-gray-500 hover:text-white  text-sm items-center gap-x-4" 
                
              >
                 <Link className="flex" to="/Transaction">
                <img src={transaction}  className="ml-1 w-6 "/>
                <span className="origin-left duration-200 ml-1     md:visible  sm:invisible">
                   Transaction
                </span>
                </Link>
              </li> */}
             
         </ul> 
         <li
                
                className="flex  rounded-md p-2 cursor-pointer  text-gray-500 hover:text-white  text-sm items-center gap-x-4" 
                
              >
               <Link className="flex" to="/account">
                {/* <img src={User}  className="ml-1"/> */}
                 <span className="origin-left duration-200 ml-1    md:visible sm:invisible">
                   Profile
               </span>
               </Link>
              </li>
              
              <li
                
                className="flex  rounded-md p-2 cursor-pointer  text-gray-500 hover:text-white  text-sm items-center gap-x-4" 
                
              >
                 <Link className="flex" to="/">
                {/* <img src={Setting}  className="ml-1"/> */}
                <button className="origin-left duration-200 ml-1     md:visible  sm:invisible">
                   Logout
                </button>
                </Link>
              </li>
              
 
             </div>
         </div>
      
          
         </div>
             
              
              
             
      
   )
}
