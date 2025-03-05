import { useContext, useState } from "react";
import useOfflineStatus from "../../Hooks/useOfflineStatus";
import UserContext from "../../Context/UserContext";
import { Link } from "react-router-dom";



const Header = () => {

  const data=useContext(UserContext);
  // console.log(data);
  
  
  

  const [show, setShow] = useState(false);
  const status = useOfflineStatus()

  const toggle = () => {
    setShow(!show);
  };

  return (
    <>
      <div className="2xl:container  mx-auto shadow-lg p-5">
        <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 ">
          {/* logo */}
          <div className=" flex justify-between">
            <p className=" mb-4 text-sm font-extrabold tracking-tight leading-none  dark:text-white">Ecom-V-Store</p>
            <div>
              {/* Menu Toggle Icon */}
              {show ? (
                <svg
                  onClick={toggle}
                  className="block md:hidden"
                  viewBox="0 0 21 21"
                  fill="currentColor"
                  height="1em"
                  width="1em"
                  aria-label="Close menu">
                  <g fill="none" fillRule="evenodd" stroke="currentColor">
                    <path d="M15.5 15.5l-10-10zM15.5 5.5l-10 10" />
                  </g>
                </svg>
              ) : (
                <svg
                  onClick={toggle}
                  className="block md:hidden"
                  viewBox="0 0 1024 1024"
                  fill="currentColor"
                  height="1em"
                  width="1em"
                  aria-label="Open menu">
                  <path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z" />
                </svg>
              )}
            </div>
          </div>
          {/* content */}
          <div className={show ? "block" : "hidden md:block"}>
            <ul className=" flex flex-col justify-center items-center md:flex-row md:justify-end gap-4">
              <li id="home">
                <Link to="/" onClick={toggle}>
                  {/* onClick - TO GET Auto Close Feature */}
                  Home
                </Link>
                </li>

                <li >
                <Link to="/" onClick={toggle}>
                  {/* onClick - TO GET Auto Close Feature */}
                  All Products
                </Link>
                </li>

                <li >
                <Link to="/cart" onClick={toggle}>
                  {/* onClick - TO GET Auto Close Feature */}
                  Cart {" "}
                </Link>
                </li>
           
                
                 <li> {status ?   "  ✅" : "❌" }</li>
                <li>    <span>     {data.name}</span></li>
                
          
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}


export default Header;