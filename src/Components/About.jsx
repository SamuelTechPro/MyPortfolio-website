



import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] '>
      <div className='flex flex-col justify-center items-center w-full h-full text-gray-100 '>
        <div className='max-w-[1000px] w-full  grid grid-cols-2 gap-8'>
            <div className='sm:text-right pl-4 pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
            </div>
            <div>

            </div>
            </div>
            <div className='max-w-[1000px] w-full  grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
                <p>Hi, I'm  Samuel, nice to meet you. Please take a look around</p>
            </div>
            <div>
              <p>I'm a passionate front-end developer with a keen eye for design and a love for crafting intuitive user experiences. Skilled in HTML, CSS, and JavaScript, I excel at creating responsive and engaging websites. With a strong focus on user-centric design, I strive to deliver seamless and visually appealing digital solutions.</p>  
            </div>
            </div>

       
      </div>
    </div>
  )
}

export default About
