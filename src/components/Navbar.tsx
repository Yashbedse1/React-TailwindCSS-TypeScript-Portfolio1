import React, {useState} from "react";
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div className='flex justify-between items-center h-24 max-w-full mx-auto px-4 text-black'>
            <h1 className='w-full text-3xl font-bold text-black'>MyPortfolio.</h1>
            <ul className="hidden md:flex text-xl">
                <li className="p-4 "><a href='/'>Home</a></li>
                <li className="p-4"><a href='/education'>Education</a></li>
                <li className="p-4"><a href='/experience'>Experience</a></li>
                <li className="p-4 "><a href='/skills'>Skills</a></li>
                <li className="p-4"><a href="/CV.pdf" target="_blank" rel="noopener noreferrer">CV</a></li>
                <li className="p-4"><a href='/contact'>Contact</a></li>
            </ul>
            <div onClick={handleNav} className='block md:hidden'>
                {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} /> }     
            </div>
            <div className={nav ? 'fixed left=0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-black ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%] top-0 w-[60%] h-full border-r border-r-gray-900 text-white' }>
            <h1 className='w-full text-3xl font-bold m-4 text-white'>MyPortfolio.</h1>
                <ul className="uppercase p-4 text-white">
                <li className="p-4 border-b border-gray-600"><a href='/'>Home</a></li>
                <li className="p-4 border-b border-gray-600"><a href='/education'>Education</a></li>
                <li className="p-4 border-b border-gray-600"><a href='/experience'>Experience</a></li>
                <li className="p-4 border-b border-gray-600"><a href='/skills'>Skills</a></li>
                <li className="p-4 border-b border-gray-600"><a href="/CV.pdf" target="_blank" rel="noopener noreferrer">CV</a></li>
                <li className="p-4"><a href='/contact'>Contact</a></li>
                </ul>
            </div>
        </div>
    )
}
export default Navbar