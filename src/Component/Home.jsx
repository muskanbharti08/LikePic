import React, { useState } from 'react'

export default function Home() {
 
let [like, Setlike]  = useState(true);
let [likeInc , SetlikeInc] = useState(0);

let click = () =>{
  Setlike(!like);
  SetlikeInc(++likeInc)
}




  return (
    <>
<div className="bg-gray-200 border-2 border-black w-fit sm:ml-72 sm:mt-8 mt-20  rounded-lg mx-10 my-2 sm:rounded-sm overflow-hidden ">
  <img className=' hover:-translate-y-1 hover:scale-110 duration-300 hover:overflow-hidden hover:rotate-0.5' src="https://images.unsplash.com/photo-1682687220923-c58b9a4592ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D" alt="" />
 
 <div className="flex justify-evenly  mt-3 mb-2">
 <button onClick={click} className="">{like?<i class="fa-regular fa-heart"></i>:<i class="fa-solid fa-heart text-red-600"></i>} <button className='bg-blue-200 rounded-md px-2 text-sm'>{likeInc}</button></button>
 <button className=''><i class="fa-regular fa-comment"></i></button>
  <button  className=''><i class="fa-solid fa-share"></i></button>
  
 </div>
</div>
 <p className=" text-center">Your pic got {likeInc}  likes</p>

    </>
  )
}
