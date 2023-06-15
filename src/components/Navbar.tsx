import React, {useState} from "react";
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { Link } from 'react-scroll';
const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav)
    }
    const handleLinkClick = () => {
        setNav(false);
      };
    return (
        <div className='flex justify-between items-center h-24 max-w-full mx-auto px-4 text-white bg-black fixed top-0 left-0 w-full z-10'>
            <h1 className='w-full text-3xl font-bold text-white'>MyPortfolio.</h1>
            <ul className="hidden md:flex text-xl cursor-pointer">
                <li className="p-4 "><Link to='hero' smooth={true} duration={500}>Home</Link></li>
                <li className="p-4"><Link to='education' smooth={true} duration={500}>Education</Link></li>
                <li className="p-4"><Link to='experience' smooth={true} duration={500}>Experience</Link></li>
                <li className="p-4 "><Link to='skills' smooth={true} duration={500}>Skills</Link></li>
                <li className="p-4"> <a href="/CV.pdf" target="_blank" rel="noopener noreferrer">CV</a></li>
                <li className="p-4"><Link to='contact' smooth={true} duration={500}>Contact</Link></li>
            </ul>
            <div onClick={handleNav} className='block md:hidden'>
                {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} /> }     
            </div>
            <div className={nav ? 'fixed left=0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-black ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%] top-0 w-[60%] h-full border-r border-r-gray-900 text-white' }>
            <h1 className='w-full text-3xl font-bold m-4 text-white'>MyPortfolio.</h1>
                <ul className="uppercase p-4 text-white cursor-pointer" onClick={handleLinkClick}>
                <li className="p-4 border-b border-gray-600"><Link to='hero' smooth={true} duration={500}  >Home</Link></li>
                <li className="p-4 border-b border-gray-600"><Link to='education' smooth={true} duration={500}>Education</Link></li>
                <li className="p-4 border-b border-gray-600"><Link to='experience' smooth={true} duration={500}>Experience</Link></li>
                <li className="p-4 border-b border-gray-600"><Link to='skills' smooth={true} duration={500}>Skills</Link></li>
                <li className="p-4 border-b border-gray-600"> <a href="/CV.pdf" target="_blank" rel="noopener noreferrer">CV</a></li>
                <li className="p-4"><Link to='contact' smooth={true} duration={500}>Contact</Link></li>
                </ul>
            </div>
        </div>
    )
}
export default Navbar;