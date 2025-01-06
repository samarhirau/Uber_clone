import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <div className='bg-[url(https://images.unsplash.com/photo-1593950315186-76a92975b60c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dWJlcnxlbnwwfHwwfHx8MA%3D%3D)] pt-5  h-screen flex justify-between flex-col w-full  bg-cover bg-center'>
     <img className='w-16 ml-8' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png" alt="" />
<div className='bg-white pb-7 py-4 px-4'>
     <h2 className='text-lime-300xl font-bold '>Get Started with Uber</h2>
     <Link to='/login' className='flex items-center justify-center w-full bg-black text-white py-3  rounded mt-5'>Continue
     </Link>
    
</div>
    </div>
      
    </>
  )
}

export default Home
