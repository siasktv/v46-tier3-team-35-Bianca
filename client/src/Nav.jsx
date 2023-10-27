import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png"
import { useState, useEffect } from "react";

export const Nav = ({ auth }) => {
  const { isAuthenticated, login, logout } = auth;
  const [ isSticky, setIsSticky ] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return(
    <nav className={`sticky top-0 z-50 flex items-center justify-between px-8 py-2 ${
      isSticky ? 'bg-white border-b' : ''
    }`}>
      <div className="w-[205px] h-[30px]">
        <img src={Logo}/>
      </div>
      <div className="flex ">
        <ul>
          {isAuthenticated() && (
          <li className="text-black font-semibold cursor-pointer">
            <Link to="/profile">Profile</Link>
          </li>
        )}
        </ul>
      </div>
      <button className=" flex justify-center items-center py-2 px-4 cursor-pointer text-sm rounded-md bg-[#0FAE96] text-white h-[40px]" onClick={isAuthenticated() ? logout : login}>
             {isAuthenticated() ? "Log Out" : "Log In"}
     </button>
    </nav>
  )
};
