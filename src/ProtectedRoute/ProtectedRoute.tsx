import React, { useEffect, useState } from "react";
import "./styles.css";
import { IoMdMenu } from "react-icons/io";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoMdLogOut } from "react-icons/io";
import SidebarCom from "../Components/Sidebar/SidebarCom";
import Footer from "../Components/Footer/Footer";
import { useNavigate } from "react-router-dom";

interface ReactNodeType {
  children: React.ReactNode;
}

const ProtectedRoute = ({ children }: ReactNodeType) => {
  const navigate = useNavigate()
  const [openSideBar, setOpenSideBar] = useState<boolean>(true);
  const [logout, setLogout] = useState(false);

  const handleMenuClick = () => {
    setOpenSideBar((prev) => !prev);
  };
  const handleMenuBlur = () => {
    setOpenSideBar(true);
  };

  useEffect(()=>{
    if(!localStorage.getItem('user') || !localStorage.getItem('password')){
      navigate('/')
    }
  },[])

  return (
    <>
       <div className='p-route-background maincontainer position-relative'>
        <div className='container-body'>
          <SidebarCom openSideBar={openSideBar} />
          <div className='position-relative w-100'>

            <div className='header-protected-route'>
              <img src='/Gsynergy Logo V2 Long Description.png' className='fav-icon-width me-2' />
              <IoMdMenu size={25} onClick={handleMenuClick} onBlur={handleMenuBlur} className='cursor-pointer me-2' /> <span className='font-size-nav-heading mt-4'>Data View App</span>
            </div>

          <div className='position-relative cursor-pointer'>
            <div className='logout-fun'>
                <FaRegCircleUser size={25} onClick={()=> setLogout(prev => !prev)}/>
            </div>

              {
                logout && (<div className='box-logout p-3'>
                <h6 className='mb-0' onClick={()=>{
                  localStorage.clear();
                  navigate('/')
                }}><IoMdLogOut/>{' '}Logout</h6>
              </div>)
              }
            
            </div>
           

            <div className='inner-container'>
              {children}
            </div>
            <Footer />
          </div>
        </div>




      </div>
    </>
  );
};

export default ProtectedRoute;
