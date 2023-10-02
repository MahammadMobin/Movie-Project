import { useContext, useState } from "react";
import { HiForward, HiMagnifyingGlass } from "react-icons/hi2";
import { MyMovieContext } from "../context/MoveContext";
import { useNavigate } from "react-router-dom";


const AppNavbar = () => {
    const {setNavClickList}=useContext(MyMovieContext)
    const [activeIndex,setActiveIndex]=useState(2)
    const navigate=useNavigate()

    const handleClickNavItem = (index) => {
        setActiveIndex(index);
        navigate('/')
      };

    const handleClickNav = (val)=>{
        setNavClickList(val)
    }
    const handleClickGoHome=()=>{
        navigate('/')
    }
    


    const NavLinks = <>
        <li onClick={()=>{handleClickNav("now_playing"), handleClickNavItem(1)}} className={`${activeIndex==1?"activex":""}`}><a >New</a></li>
        <li onClick={()=>{handleClickNav("popular"), handleClickNavItem(2)}} className={`${activeIndex==2?"activex":""}`}><a >Popular</a></li>
        <li onClick={()=>{handleClickNav("top_rated"), handleClickNavItem(3)}} className={`${activeIndex==3?"activex":""}`}><a >Top</a></li>
        <li onClick={()=>{handleClickNav("upcoming"), handleClickNavItem(4)}} className={`${activeIndex==4?"activex":""}`}><a >Upcoming</a></li>
    </>


    return (
        <>
            <div className="navbar bg-black text-white justify-between">
                <div className="navbar-start flex-1">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className=" menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black text-white rounded-box w-52">
                            {NavLinks}
                        </ul>
                    </div>
                    <a onClick={handleClickGoHome} className="btn btn-ghost normal-case text-xl"><HiForward className="text-3xl text-pink-600" />MOV-X</a>
                </div>
                <div className="navbar-center ml-auto hidden lg:mr-3 lg:flex">
                    <ul className="menu text-lg menu-horizontal px-1">
                        {NavLinks}
                    </ul>
                </div>
                <div className="form-control ml-auto hidden md:block">
                    <input type="text" placeholder="Search" className="input w-24 md:w-auto" />
                </div>
                {/* hidden search icon who route in the extra search page */}
                <div className="ml-auto text-xl flex items-center md:hidden mr-2">
                    <HiMagnifyingGlass/><span className="ml-1 font-semibold"> Search</span>
                </div>
                <label tabIndex={0} className="btn ml-2 btn-ghost btn-circle avatar">
                    <div className="w-12 rounded-full">
                        <img src="https://i.pinimg.com/564x/0b/88/b1/0b88b1f208ec796cbc342108ee4d1061.jpg" />
                    </div>
                </label>
            </div>

        </>
    )
}

export default AppNavbar