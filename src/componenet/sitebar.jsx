import { useState } from "react";
import { Link } from "react-router-dom";

import { BiHide } from "react-icons/bi";

const sitebar = () => {
const [theme, setTheme] = useState('light')
const [activate, setActivate] = useState(true)


const handleToggle = (e) =>{
if(e.target.checkbox){
  setTheme('dark')
}
else{
  setTheme('light')
}
}


    return (
        <div id="container"  className="  md:block lg:block min-h-[calc(100vh-80px)]
       w-[200px] md:w-[230px]  lg:w-[250px]  shadow-md  bg-[#FFFFFF] " >
            <div className="flex flex-col  justify-between">
 <div className="pl-1 md:pl-2 lg:pl-3 min-h-[calc(100vh-160px)] ">
 <div className="">
                <h1>ALL BOARDS (3)</h1>
                <div className="space-y-1 mt-5 list-none">
                {/* bg-[#635FC7] */}
        <Link to="/"
         className={`${({isActive}) => isActive ? 'bg-black' : 'bg-red-200'}
         flex items-center pl-1 md:pl-3 lg:pl-4
         w-[200px] md:w-[210px] lg:w-[220px] rounded-r-full h-[45px] text-[#635FC7]
          hover:text-[#635FC7] hover:bg-[#F4F7FD]   `}>
        <img className="pr-3"
         src="/public/images/fluent_board-split-24-regular (1).png" alt="" />
          Platform Launch</Link>
        <Link
         className={`flex items-center  pl-1 md:pl-3 lg:pl-4
         text-[#635FC7]   w-[200px] md:w-[210px] lg:w-[220px] rounded-r-full h-[45px]
          hover:text-[#635FC7] hover:bg-[#F4F7FD]   `}>
        <img className="pr-3" 
        src="/public/images/fluent_board-split-24-regular (1).png" alt="" />
          Marketing Plan</Link>
        <Link
         className={`flex items-center pl-1 md:pl-3 lg:pl-4
         text-[#635FC7]   w-[200px] md:w-[210px] lg:w-[220px] rounded-r-full h-[45px]
          hover:text-[#635FC7] hover:bg-[#F4F7FD]   `}>
        <img className="pr-3" 
        src="/public/images/fluent_board-split-24-regular (1).png" alt="" />
          Roadmap</Link>

        <Link
         className={`flex items-center font-semibold pl-1 md:pl-3 lg:pl-4
        text-[#635FC7]   w-[200px] md:w-[210px] lg:w-[220px] rounded-r-full h-[45px]
          hover:text-[#635FC7] hover:bg-[#F4F7FD] ${open ? '' : 'hidden'}  `}>
        <img  className="pr-3 text-[#635FC7] "
         src="/public/images/fluent_board-split-24-regular (1).png" alt="" />
         + Create New Board</Link>

          </div>
                </div>
 </div>
                <div>
<div className="flex justify-center ">
<div className="bg-[#F4F7FD] rounded-lg
 w-[200px] h-[45px] flex justify-center items-center">
<label className="flex cursor-pointer gap-4 text-center">
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
  <input 
  onChange={handleToggle}
  type="checkbox"
   value="dark"
    className="toggle theme-controller"/>
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
</label>
</div>
 
</div>
<div   className="pl-5 mt-1 flex justify-start items-center gap-3">
<Link to="/mainhome">
<BiHide 
 className="w-6"></BiHide>
</Link>
 <p className="text-red-800">Hide Sidebar</p>

</div>
                </div>
            </div>
        </div>
    );
};

export default sitebar;