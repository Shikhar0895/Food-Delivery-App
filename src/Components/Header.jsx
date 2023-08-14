import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import logo from "../assets/logo_adobe_express.svg"
import { useContext } from "react";
import MyContext from "../data/AppContext"

export default function Header() {
  const [buttonText, setButtonText] = useState("Login");
  const handleloginClick = () => {
    // const string = buttonText === loggedUserInfo ? loggedUserInfo : "Login";
    setButtonText(loggedUserInfo);
  };

  const {loggedUserInfo} = useContext(MyContext)

console.log(loggedUserInfo);
  const onlineStatus = useOnlineStatus();

  return ( 
    <div className="flex justify-between bg-white shadow-md text-base ">
      <div className="flex content-center flex-wrap w-16">
       <img src={logo}  alt="food logo"  />
      </div>
      <div className="flex content-center flex-wrap" >
         <ul className="flex mx-4 content-center flex-wrap">
          <li className="mx-2" >Online Status{onlineStatus ? "🟢" : "🔴"}
          </li>
          <li className="mx-2" >
            <Link to="/">Home</Link>
          </li>
          <li className="mx-2" >
            <Link to="/SearchPage">Search</Link>
          </li>
          <li className="mx-2">
            <Link to="/AboutUS">About Us</Link>
          </li>
          <li className="mx-2">
            <Link to="/Grocery">Grocery</Link>
          </li>
          <li className="mx-2">
            <Link to="/Help">Help</Link>
          </li>
          <li className="mx-2">
            <Link to="/Cart">Cart</Link>
          </li>
          <li className="mx-2">
            <button className="login-button" onClick={handleloginClick}>
         {buttonText}</button>
         </li>
        </ul>
        
      </div>
    </div>
  );
}
