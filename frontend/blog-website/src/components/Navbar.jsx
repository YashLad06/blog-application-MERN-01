import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigation } from 'react-router-dom';
import { BsSearch } from "react-icons/bs";
import { BsPen } from "react-icons/bs";
import { FiLogIn } from "react-icons/fi";
import { FaBars } from "react-icons/fa";
import Menu from "./Menu";
import { FaRegCaretSquareRight } from "react-icons/fa";

function NavBar() {

  const [prompt, setPrompt] = useState(""); // Search string
  const [menu, setMenu] = useState(false); // Toggle Menu button

  const navigate = useNavigation();
  const path = useLocation().pathname;
  // It will take us to the location, pathname, because we want to navigate to some other page

  const showMenu = () => {
    // This function will change the value inside setMenu function variable
    setMenu(!menu);
  }

  const {user} = useContext(UserContext);

  return (
    <div>
      <div className='flex items-center justify-between px-6 md:px-[200px] py-4 bg-black text-white'>
        <h1 className='text-lg md:text-xl font-extrabold'>
          <Link to='/'>Blogosphere</Link>
        </h1>

        {/* Search Bar = To appear only on Home page / home screen */}
        {path === '/' && <div onChange={(e) => setPrompt(e.target.value)}
          className='flex items-center justify-center space-x-0'>
          <input type="text"
            className='outline-none rounded-l-xl px-3 text-black bg-white'
            placeholder='Search a post'
          />
          {/* Search Button => On click, we want to navigate the data inside it */}
          <p onClick={() => navigate(prompt ? "?search:" + prompt : navigate("/"))}
            className='cursor-pointer p-1 bg-white text-black rounded-r-xl'>
            <BsSearch />
          </p>
        </div>
        }

        {/* Conditional rendering for Menu */}
        <div className='hidden md:flex item-center justify-center space-x-2 md:space-x-4'>
          {/* 
          Nested conditional rendering
          Cheking if user is logged in: We will check many conditions:
          
          Bigger screen, we want 2/3 options
          Smaller screen, we want all the options
          
          If user is logged in,
          we don't want register option and Login option
          Instead, we want Hamburger menu
          */}

          {
            user ?
              <h3> <Link to="/write"><BsPen /> Write</Link> </h3>
              :
              <h3> <Link to="/Login"><FiLogIn /> Login</Link></h3>
          }

          {/* If user is true, we will show the MENU when the <div> element is clicked.
              If user is false, we will show the Register button */}
          {
            user ?
              <div onClick={showMenu}>
                <p className='cursor-pointer relative'>
                  <FaBars />
                  {menu && <Menu />}
                </p>
              </div>
              :
              <h3> <Link to="/register"><FaRegCaretSquareRight /> Register</Link></h3>
          }
        </div>

        {/* This menu button is visible on small screen
            But hidden on large screen */}
        <div onClick={showMenu} className='md:hidden text-lg'>
          <p className='cursor-pointer relative'>
            <FaBars />
          </p>
          {menu && <Menu />}

        </div>


      </div>
    </div>
  )
}

export default NavBar