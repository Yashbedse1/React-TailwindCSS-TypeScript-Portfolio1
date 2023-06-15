import React from 'react'

const Contact = () => {
  return (
    
    <div id='contact' className='flex flex-col justify-center items-center max-w-full bg-[#0A375D] text-white mx-auto mt-auto px-4 py-16  '>
        <form method='POST' action="https://getform.io/f/71713128-ea1b-4c48-8ae8-da0a0e3b2570" className='flex flex-col w-full max-w-[1240px] '>
            <div className='pb-8'>
                <p className='text-4xl font-bold'>Contact</p>
            </div>
            <input className='p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2' type="email" placeholder='Email' name='email' />
            <textarea className='p-2' name="message" placeholder='Message'></textarea>
            <button className='flex items-center mx-auto px-4 py-3 my-8 bg-black hover:bg-[#ff0000] text-white rounded-md font-bold'>
                Connect</button>
        </form>
    </div>
  )
}

export default Contact;