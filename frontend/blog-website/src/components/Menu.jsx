import React, { useContext } from 'react';
import { UserContext } from "../context/UserContext";
import axios from 'axios';
import { Link, useNavigation, useNavigate } from 'react-router-dom';
import { FiLogIn } from "react-icons/fi";
import { FaRegCaretSquareRight } from "react-icons/fa";

function Menu() {

  // Fetching user from useContext
  const { user } = useContext(UserContext);
  const { setUser } = useContext(UserContext);
  // const navigate = useNavigation();
  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      const res = await axios.get("/api/auth/logout", {withCredentials: true})
      setUser(null);
      navigate("/login");
    }
    catch {

    }
  }

  return (
    <div className='bg-black w-[200px] z-10 flex flex-col item-start absolute top-12 right-6 md:right-32 rounded-md p-4 space-y-4'>

      {/* 
      Based on user is logged in or not, we will pass the values
      1. user not found > Login & Register button
      2. Not logged in > Login & Register button
      3. logged in > profile, write, my blogs, other buttons
      */}

      {
        !user && <h3 className='text-white text-sm hover:text-gray-500 cursor-pointer bg-slate-900'>
          <Link to="/login"><FiLogIn /> Login</Link>
        </h3>
      }
      {
        !user && <h3 className='text-white text-sm hover:text-gray-500 cursor-pointer bg-slate-900'>
          <Link to="/register"><FaRegCaretSquareRight /> Register</Link>
        </h3>
      }
      {
        user && <h3 className='text-white text-sm hover:text-gray-500 cursor-pointer bg-slate-900'>
          <Link to={"/profile/" + user._id}><FaRegCaretSquareRight /> Profile</Link>
        </h3>
      }
      {
        user && <h3 className='text-white text-sm hover:text-gray-500 cursor-pointer bg-slate-900'>
          <Link to={"/write"}><FaRegCaretSquareRight /> Write</Link>
        </h3>
      }
      {
        user && <h3 className='text-white text-sm hover:text-gray-500 cursor-pointer bg-slate-900'>
          <Link to={"/my-blogs/" + user._id}><FaRegCaretSquareRight /> My Blog</Link>
        </h3>
      }
      {
        user && <h3 className='text-white text-sm hover:text-gray-500 cursor-pointer bg-slate-900'
          onClick={handleLogOut()}>
           Log out
        </h3>
      }

    </div>
  )
}

export default Menu;