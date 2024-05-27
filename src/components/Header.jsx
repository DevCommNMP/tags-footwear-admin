import { useEffect } from "react";
import DarkModeToggle from "./DarkModeToggle";
import { MdLogout } from "react-icons/md";
import { useNavigate } from "react-router-dom/dist";
import { FiUser } from "react-icons/fi";
const Header = () => {
  const navigate=useNavigate();
  const data = JSON.parse(localStorage.getItem('userData'));
  const token = data?.token ?? null; // Providing a default value for token
useEffect(() => {
  if(!token){
    navigate("/login")
  }


}, [token])
const logoutHandler=async()=>{
  await localStorage.removeItem('userData')
  navigate("/login");
}

  return (
    <>
      <header className="main-header navbar">
        <div className="col-search">
        </div>
        <div className="col-nav">
          <ul className="nav">
            <li className="nav-item">
              <DarkModeToggle fontSize={30} />
            </li>
            <li className="nav-item">
              <a className="nav-link btn-icon" >
             {data?<><FiUser fontSize={25} /><a style={{marginTop:"10"}}>Hello,{data.userName}</a></>:"Login"} 
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link btn-icon" >
              <MdLogout  fontSize={30} onClick={logoutHandler}/>
              </a>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
