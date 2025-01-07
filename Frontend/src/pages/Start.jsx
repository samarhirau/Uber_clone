import React from 'react';
import { Link } from 'react-router-dom';

const Start = () => {
  return (
    <div className='bg-[url(https://images.unsplash.com/photo-1593950315186-76a92975b60c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dWJlcnxlbnwwfHwwfHx8MA%3D%3D)] h-screen flex flex-col justify-between bg-cover bg-center'>
      <header className='px-4 pt-5 sm:px-8'>
        <img 
          className='w-14 sm:w-20' 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png" 
          alt="Uber Logo" 
        />
      </header>

      <main className='flex flex-col items-center justify-end sm:justify-center flex-grow px-4 sm:px-8'>
        <div className='bg-white p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-md text-center'>
          <h1 className='text-2xl sm:text-3xl font-extrabold text-gray-800 mb-4'>Welcome to Uber</h1>
          <p className='text-gray-600 text-sm sm:text-base mb-6'>Your journey starts here. Get moving with Uber today!</p>
          <Link 
            to='/login' 
            className='inline-block w-full bg-black text-white py-3 rounded-lg font-medium text-base sm:text-lg hover:bg-gray-800 transition duration-300'>
            Get Started
          </Link>
        </div>
      </main>

      <footer className='text-center text-sm text-gray-500 py-4'>
        <p>&copy; {new Date().getFullYear()} Uber. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Start;
