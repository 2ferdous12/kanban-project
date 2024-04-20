import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { BiHide } from "react-icons/bi";
const mainhome = () => {

    
    // min-h-[calc(100vh-100px)]
    return (
<div className="min-h-[calc(100vh-80px)] w-full bg-[#F4F7FD] ">
<div className=" bg-[#F4F7FD] 
         w-full flex justify-center items-center min-h-[calc(100vh-100px)] ">
 <div className="text-center space-y-3">
 <h1 className="text-gray-500 ">
 This board is empty. Create a new column to get started.
 </h1>
            <Link
             to="/sitebarPlatform"
            className={`btn text-white border-none
     w-[170px] h-[45px] bg-[#635FC7] rounded-full`}>
            + Add New Column
            </Link>
 </div>
        </div>

  <NavLink className={({isActive})=> isActive ? 'hidden'
   : 'block'} to="/">
<div className=" rounded-r-full 
bg-[#635FC7] flex justify-center items-center text-white
 -mt-[50px] w-[50px] h-[40px]">
<BiHide 
 className="w-6"></BiHide>
</div>
</NavLink>

</div>

    );
};

export default mainhome;