import React,{useState,useRef,useEffect} from 'react'
import like_true from '../Assets/images/like_true.png'
import like_false from '../Assets/images/like_false.png'


export default function Post() {
    const [Like, setLike] = useState(false)
    const [showComentform, setshowComentform] =useState(false)
    const [showAllcoment,setshowAllcoment]=useState(false)
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);
    function useOutsideAlerter(ref) {
        useEffect(() => {
          /**
           * Alert if clicked on outside of element
           */
          function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
              console.log("You clicked outside of me!");
              setshowAllcoment(false)
              
            }
          }
          // Bind the event listener
          document.addEventListener("mousedown", handleClickOutside);
          return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
          };
        }, [ref]);
      }
    

    

  return (
    <div class="w-full bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
   
    <div class="px-5 pb-5">
    <div className="text-center">
    <h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Titre</h5>
    </div>
      <div>
      <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">QUESTION</p>
      </div>
        <div class="flex items-center justify-between">
            <div className="flex">
            <button className="w-8 h-5"><img src={Like ? like_false :like_true}  onClick={() => setLike((like) => !like)}/></button>
            <span class="text-2xl ml-5 font-bold text-gray-900 dark:text-white">Likes</span>
            </div>
            <div className="flex">
            <button onClick ={() => setshowComentform(!showComentform)}  className="w-8 h-5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                 </svg>
            </button>
            <button onClick={()=>setshowAllcoment(true)} class="text-2xl ml-5 font-bold text-gray-900 dark:text-white">Coment</button>
            </div>
            <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Categorie</a>
        </div>
     </div>
  {showComentform ? (
         <>
         
         <form className="flex">
         <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="comnent" type="text" placeholder="Write your coment"/>

               <button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                     <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                        </svg>
                </button>
          </form>
         </>
       ) : null}
       <>
        {showAllcoment ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div ref={wrapperRef}  className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                   All Coments
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setshowAllcoment(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
<div>
    
        <div class="p-12">
        <div className="flex">
         <div className="ml-5">






           <div className="flex">

          <div className="mr-20">
      
             <p className="text-gray-500 font-semibold tracking-tight mb-2"> user x :</p>
             <p className="text-gray-500 font-semibold tracking-tight mb-2"> user x :</p>
             <p className="text-gray-500 font-semibold tracking-tight mb-2"> user x :</p>
             <p className="text-gray-500 font-semibold tracking-tight mb-2"> user x :</p>
             <p className="text-gray-500 font-semibold tracking-tight mb-2"> user x :</p>
              
          </div>
        
          <div>
        

          <h5 class="text-gray-900 font-semibold tracking-tight mb-2 text-xs   dark:text-white">Coment</h5>
             
          </div>
          </div>
          </div>
          </div>
         </div>
          </div>   
  </div>

                

                
              </div>
            </div>
          
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
       
      
   
     
</div>
  )
}
