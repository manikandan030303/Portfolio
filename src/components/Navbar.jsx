import logo from '../assets/ss.svg';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img src={logo} alt="logo" className='mx-2 w-10' />
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
          <a 
            href="https://www.linkedin.com/in/manikandan-p-75a8a8316" 
            target="_blank" // Opens the link in a new tab
            rel="noopener noreferrer" // For security reasons
            className="text-3xl hover:text-violet-100 text-white-900 transition duration-200"
          >
            <FaLinkedin />
          </a>
            <a 
            href="https://github.com/manikandan030303" 
            target="_blank" // Opens the link in a new tab
            rel="noopener noreferrer" // For security reasons
            className="text-3xl hover:text-purple-100 text-white-500 transition duration-200"
          >
            <FaGithub />
          </a>
            <a 
            href="https://www.instagram.com/mani_sivam_03?igsh=dHFxejViZW1sdGhs" 
            target="_blank" // Opens the link in a new tab
            rel="noopener noreferrer" // For security reasons
            className="text-3xl hover:text-purple-100 text-white-500 transition duration-200"
          >
            <FaInstagram />
            </a> 
            <a 
            href=" " 
            target="_blank" // Opens the link in a new tab
            rel="noopener noreferrer" // For security reasons
            className="text-3xl hover:text-purple-100 text-white-500 transition duration-200"
          >

            <FaSquareXTwitter />
          </a>
        </div>
    </nav>
  )
}

export default Navbar