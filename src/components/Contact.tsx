import React from 'react'

const Contact = () => {
  return (
    
    <div className='max-w-[1240px] md:h-screen mx-auto px-4 mt-auto pt-40 text-left flex flex-col justify-center'>
        <form method='POST' action="https://getform.io/f/71713128-ea1b-4c48-8ae8-da0a0e3b2570" className='flex flex-col max-w-[1240px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold '>Contact</p>
            </div>
            <input className='p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2' type="email" placeholder='Email' name='email' />
            <textarea className='p-2' name="message" placeholder='Message'></textarea>
            <button className='bg-black hover:bg-[#ff0000] px-4 py-3 my-8 rounded-md mx-auto flex items-center text-white font-bold'>
                Connect</button>
        </form>
    </div>
  )
}

export default Contact;