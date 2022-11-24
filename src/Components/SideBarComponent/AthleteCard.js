import React,{useState,useEffect}from 'react'
import ig from "../Assets/images/ig.svg"
import axios from 'axios'



export default function AthleteCard() {
  let [athleteList,setathleteList]= useState([{}]);
  useEffect(()=>{

  
    const access_token= JSON.parse(localStorage.getItem('userdata')).accessToken
   const city =JSON.parse(localStorage.getItem('userdata')).ville
   console.log(city);

   
    axios.get(`localhost:8082/athlete/athletes/${city}`, {
     
      headers: {
    
        'Authorization': `Bearer ${access_token}`
      }
    })
    .then((res) => {
      console.log(res.data);
      setathleteList(res.data)
   
      //console.log("hhh",myData);
      
    
     
    })
    .catch((error) => {
      // console.error(error.response.data)
    })
  
  
  
    
  },[])


  return (
    <div>
 <div className="flex justify-center"> 
<div class="max-w-md  bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Username :</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">City : </p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Sport : </p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Tel : </p>

        <div className="flex">
       <div>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        <img className="h-5 w-5" src={ig}/>
          <p className="ml-2">Instagram </p>
        </a>
        </div>
        <div className="ml-5">
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        <div className="h-5 w-5">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
          </div>
          <p className="ml-2">Facebook</p>
        </a>
        </div>
        </div>
    </div>
 
</div>
</div>
{/* next previous */}
<div className="flex justify-center mt-5">
<a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
</svg>

        Previous 
       
    </a>
    <a href="#" class="ml-5 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
       
        Next 
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
</svg>
    </a>

    </div>
    </div>
  )
}
