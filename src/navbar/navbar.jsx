import { Link } from "react-router-dom";

const navbar = () => {
    return (
        <div>
<div className="navbar h-[80px] shadow-md  bg-[#FFFFFF]">
  <div className="md:w-[250px] lg:w-[300px] lg:border-r-2">
    <div  className="dropdown block md:hidden lg:hidden ">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
         viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" 
         strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
    
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a className="btn hidden mt-3 md:block lg:block btn-ghost text-xl">
        <img src="/images/Group 16 (1).png" alt="" />
    </a>
  </div>
  <div className=" -ml-6 md:ml-20   lg:ml-20 navbar-start  lg:flex">
    <ul className="menu menu-horizontal px-1">
    
    <li><p className="hidden  md:block lg:block text-xl font-semibold w-[190px]">Platform Launch</p></li>
  

    <Link to="/mainhome" className={`block md:hidden lg:hidden`}>
    <li className="">
    <details>
        
        <summary className="text-xl font-semibold w-[200px]">Platform Launch</summary>
        
      </details>
      </li>
    </Link>    
    
 
    </ul>
  </div>
  <div className="navbar-end">
  <a className=" block md:hidden lg:hidden flex pb-1 justify-center items-center text-2xl text-white border-none
     w-[45px] h-[32px] rounded-full bg-[#A8A4FF] ">+</a>
   
    <a className="btn hidden pt-4  justify-center items-center 
     md:block lg:block text-white border-none
     w-[150px] h-[45px] bg-[#A8A4FF] rounded-full">+ Add New Task</a>
     <img className="ml-3 mr-3" src="/images/Group 6.png" alt="" />
  </div>
</div>
        </div>
    );
};

export default navbar;