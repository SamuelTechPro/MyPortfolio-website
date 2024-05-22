

import React from 'react'

const Contact1 = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
      <form method='POST' action='http://getform.io/f/pbgxzyxa' className='flex flex-col max-w-[600px] w-full'>  
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
            <p className='text-gray-300 py-4'>// Submit the form below or shoot me an email - fridaySamuel508@gmail.com</p>
        </div>
        <input className='bg-[#ccd6f6] p-2' type='text' placeholder='Name' name='name' />
        <input className='my-4 p-2 bg-[#ccd6f6]' type='email' placeholder='Email' name='email' />
        <textarea className='bg-[#ccd6f6] p-2' name='message' rows='8' placeholder='Message'></textarea>
        
        <button className='py-3 px-4 my-8 mx-auto flex items center hover:bg-pink-600 hover:border-pink-600 border-2' >Let's Collaborate</button>
      </form>
    </div>
  )
}

export default Contact1