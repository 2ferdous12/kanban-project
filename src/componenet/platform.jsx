
import { NavLink } from "react-router-dom";
import { BiHide } from "react-icons/bi";
import { useState } from "react";

const platform = () => {


// 
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    subtasks: "",
    subtasks1: "",
    status: ["todo" ]
  });

  const [todoTasks, setTodoTasks] = useState([]);
  const [doingTasks, setDoingTasks] = useState([]);
  const [doneTasks, setDoneTasks] = useState([]);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  

  const handleClick = (e) =>{
    e.preventDefault();
    if (!formData.title || !formData.description || !formData.subtasks) {
      alert("Please fill in all fields.");
      return;
    }

    const newTask = { ...formData };
    switch (newTask.status) {
      case "todo":
        setTodoTasks([...todoTasks, newTask]);
        break;
      case "doing":
        setDoingTasks([...doingTasks, newTask]);
        break;
      case "done":
        setDoneTasks([...doneTasks, newTask]);
        break;
      default:
        break;

  }

  setFormData({
    title: "",
    description: "",
    subtasks: "",
    subtasks1: "",
    status: "todo"
  });
  document.getElementById('my_modal_5').close();

  
}
const [isOpen, setIsOpen] = useState(false);

const toggleOptions = () => {
    setIsOpen(!isOpen);
};


    return (
<div className="min-h-[calc(100vh-80px)] w-full bg-[#F4F7FD] ">
<div className="flex flex-col md:flex-row lg:flex-row min-h-[calc(100vh-80px)] ">


 {/* ********start todo section     */}
 {/* ********start todo section     */}
 {/* ********start todo section     */}


<div>
            <div className="w-[240px] md:w-[200px] lg:w-[240px] flex justify-start gap-2 p-2  ">
              <p className="w-[15px] mt-1 h-[15px] bg-[#49C4E5] rounded-full "></p>
              <p>TODO ({todoTasks.length})</p>
            </div>

    
    <div id="todo-section"
     className=" space-y-2 ">
              {todoTasks.map((task, index) => (
                <div onClick={()=>document.getElementById('my_modal_55').showModal()}
                 key={index} className="mt-2 mb-3 p-2 ml-2 mr-2   rounded-lg
                shadow-lg  bg-[#FFFFFF] ">
                  <p>{task.title}</p>
                  {/* <p>{task.description}</p> */}
                  <p>{task.subtasks}</p>
                  <p>{task.subtasks1}</p>
                </div>
              ))}

{/* Open the modal using document.getElementById('ID').showModal() method */}

<dialog id="my_modal_55" className="modal w-[350px] md:w-[450px] lg:w-[450px] h-[675px]  mx-auto modal-bottom sm:modal-middle">

<div className="modal-box  shadow-lg ">
   <div className="flex mb-2 p-1 justify-end">
   <div>
            <img
                className="w-[10px] fixed h-[10px]"
                src="/images/Group 6.png"
                alt=""
                onClick={toggleOptions}
            />
            {isOpen && (
                <ul className="absolute -ml-[80px] shadow-lg p-2 mt-10">
                    <li className="text-xs font-semibold mb-2 text-gray-500">Edit Task</li>
                    <li className="text-xs font-semibold text-red-500">Delete Task</li>
                </ul>
            )}
        </div>
    
   </div>
  
<form 
    onSubmit={handleClick}
    className="">
{todoTasks.map((task, index) => (
                <div 
                 key={index} className=" mb-3 p-2   rounded-lg
                ">
                  <p className="">{task.title}</p>
                  <p className="mt-4 mb-4">{task.description}</p>
                  <p className=" mt-2">{task.subtasks}</p>
                  <p className=" mt-2">{task.subtasks1}</p>
                </div>
              ))}
<div className="w-[300px] text-xs flex gap-4 p-2 rounded-md
        md:w-[370px] lg:w-[370px]  bg-[#E4EBFA] ">
  <input type="checkbox" />
  <p className="">Research competitor pricing and business models</p>
</div>
<div className="w-[300px] mt-2  text-xs flex gap-4 p-2 rounded-md
        md:w-[370px] lg:w-[370px]  bg-[#E4EBFA] ">
  <input type="checkbox" />
  <p className="">Outline a business model that works for our solution</p>
</div>
<div className="w-[300px] mt-2  mb-3 text-xs flex gap-4 p-2 rounded-md
        md:w-[370px] lg:w-[370px] font-semibold bg-[#A8A4FF] ">
  <input type="checkbox" />
  <p className="">Talk to potential customers about our proposed
   solution and ask for fair price expectancy</p>
</div>

<label>Current Status</label>
      <p
       className="w-[300px] 
        md:w-[370px] lg:w-[370px]  border-2 text-xs mb-2  border-solid
         border-gray-300 rounded-md mx-auto p-3 mt-2 h-[35px]">
<select className="pr-[300px] -mt-1 bg-white" 
   name="status"
   value={formData.status}
   onChange={handleChange}
 id="">


<option value="todo">Todo</option>
<option value="doing">Doing</option>
<option value="done">Done</option>
</select>
 </p>


{/* <button 
  type="submit"

  onClick={(e) => {
    if (formData.title && formData.description && formData.subtasks) {
      document.getElementById('my_modal_5').close();
    } else {
      e.preventDefault();
      alert("Please fill in all fields.");
    }
  }}

  className="w-[300px]  md:w-[370px] lg:w-[370px] rounded-full text-white text-center h-[45px] bg-[#8471F2]">
  Create Task
</button> */}
 </form>
  </div>
</dialog>
    </div>
          </div>

   {/* ********end todo section     */}
   {/* ********end todo section     */}
   {/* ********end todo section     */}
   {/* ********end todo section     */}


 {/* ********start doing section     */}
 {/* ********start doing section     */}
 {/* ********start doing section     */}


 <div>
            <div className="w-[240px] md:w-[200px] lg:w-[240px] flex justify-start gap-2 p-2  ">
              <p className="w-[15px] mt-1 h-[15px] bg-[#49C4E5] rounded-full "></p>
              <p>DOING ({doingTasks.length})</p>
            </div>

    
    <div id="todo-section"
     className=" space-y-2 ">
              {doingTasks.map((task, index) => (
                <div onClick={()=>document.getElementById('my_modal_56').showModal()}
                 key={index} className="mt-2 mb-3 p-2 ml-2 mr-2   rounded-lg
                shadow-lg  bg-[#FFFFFF] ">
                  <p>{task.title}</p>
                  {/* <p>{task.description}</p> */}
                  <p>{task.subtasks}</p>
                  <p>{task.subtasks1}</p>
                </div>
              ))}

{/* Open the modal using document.getElementById('ID').showModal() method */}

<dialog id="my_modal_56" className="modal w-[350px] md:w-[450px] lg:w-[450px] h-[675px]  mx-auto modal-bottom sm:modal-middle">

<div className="modal-box  shadow-lg ">
<div className="flex mb-2 p-1 justify-end">
   <div>
            <img
                className="w-[10px] fixed h-[10px]"
                src="/images/Group 6.png"
                alt=""
                onClick={toggleOptions}
            />
            {isOpen && (
                <ul className="absolute -ml-[80px] shadow-lg p-2 mt-10">
                    <li className="text-xs font-semibold mb-2 text-gray-500">Edit Task</li>
                    <li className="text-xs font-semibold text-red-500">Delete Task</li>
                </ul>
            )}
        </div>
    
   </div>
  
<form 
    onSubmit={handleClick}
    className="">
{doingTasks.map((task, index) => (
                <div 
                 key={index} className=" mb-3 p-2   rounded-lg
                ">
                  <p className="mt-2">{task.title}</p>
                  <p className="mt-4 mb-4">{task.description}</p>
                  <p className=" mt-2">{task.subtasks}</p>
                  <p className=" mt-2">{task.subtasks1}</p>
                </div>
              ))}
<div className="w-[300px] text-xs flex gap-4 p-2 rounded-md
        md:w-[370px] lg:w-[370px]  bg-[#E4EBFA] ">
  <input type="checkbox" />
  <p className="">Research competitor pricing and business models</p>
</div>
<div className="w-[300px] mt-2  text-xs flex gap-4 p-2 rounded-md
        md:w-[370px] lg:w-[370px]  bg-[#E4EBFA] ">
  <input type="checkbox" />
  <p className="">Outline a business model that works for our solution</p>
</div>
<div className="w-[300px] mt-2  mb-3 text-xs flex gap-4 p-2 rounded-md
        md:w-[370px] lg:w-[370px] font-semibold bg-[#A8A4FF] ">
  <input type="checkbox" />
  <p className="">Talk to potential customers about our proposed
   solution and ask for fair price expectancy</p>
</div>

<label>Current Status</label>
      <p
       className="w-[300px] 
        md:w-[370px] lg:w-[370px]  border-2 text-xs mb-2  border-solid
         border-gray-300 rounded-md mx-auto p-3 mt-2 h-[35px]">
<select className="pr-[300px] -mt-1 bg-white" 
   name="status"
   value={formData.status}
   onChange={handleChange}
 id="">


<option value="todo">Todo</option>
<option value="doing">Doing</option>
<option value="done">Done</option>
</select>
 </p>

 </form>
  </div>
</dialog>
    </div>
          </div>
  {/* ********end doing section     */}
  {/* ********end doing section     */}
  {/* ********end doing section     */}
 


  {/* ********start done section     */}
  {/* ********start done section     */}
    {/* ********start done section     */}

    <div>
            <div className="w-[240px] md:w-[200px] lg:w-[240px] flex justify-start gap-2 p-2  ">
              <p className="w-[15px] mt-1 h-[15px] bg-[#49C4E5] rounded-full "></p>
              <p>DONE ({doneTasks.length})</p>
            </div>

    
    <div id="todo-section"
     className=" space-y-2 ">
              {doneTasks.map((task, index) => (
                <div onClick={()=>document.getElementById('my_modal_57').showModal()}
                 key={index} className="mt-2 mb-3 p-2 ml-2 mr-2   rounded-lg
                shadow-lg  bg-[#FFFFFF] ">
                  <p>{task.title}</p>
                  {/* <p>{task.description}</p> */}
                  <p>{task.subtasks}</p>
                  <p>{task.subtasks1}</p>
                </div>
              ))}

{/* Open the modal using document.getElementById('ID').showModal() method */}

<dialog id="my_modal_57" className="modal w-[350px] md:w-[450px] lg:w-[450px] h-[675px]  mx-auto modal-bottom sm:modal-middle">

<div className="modal-box  shadow-lg ">
<div className="flex mb-2 p-1 justify-end">
   <div>
            <img
                className="w-[10px] fixed h-[10px]"
                src="/images/Group 6.png"
                alt=""
                onClick={toggleOptions}
            />
            {isOpen && (
                <ul className="absolute -ml-[80px] shadow-lg p-2 mt-10">
                    <li className="text-xs font-semibold mb-2 text-gray-500">Edit Task</li>
                    <li className="text-xs font-semibold text-red-500">Delete Task</li>
                </ul>
            )}
        </div>
    
   </div>
  
<form 
    onSubmit={handleClick}
    className="">
{doneTasks.map((task, index) => (
                <div 
                 key={index} className=" mb-3 p-2   rounded-lg
                ">
                  <p className="mt-2">{task.title}</p>
                  <p className="mt-4 mb-4">{task.description}</p>
                  <p className=" mt-2">{task.subtasks}</p>
                  <p className=" mt-2">{task.subtasks1}</p>
                </div>
              ))}
<div className="w-[300px] text-xs flex gap-4 p-2 rounded-md
        md:w-[370px] lg:w-[370px]  bg-[#E4EBFA] ">
  <input type="checkbox" />
  <p className="">Research competitor pricing and business models</p>
</div>
<div className="w-[300px] mt-2  text-xs flex gap-4 p-2 rounded-md
        md:w-[370px] lg:w-[370px]  bg-[#E4EBFA] ">
  <input type="checkbox" />
  <p className="">Outline a business model that works for our solution</p>
</div>
<div className="w-[300px] mt-2  mb-3 text-xs flex gap-4 p-2 rounded-md
        md:w-[370px] lg:w-[370px] font-semibold bg-[#A8A4FF] ">
  <input type="checkbox" />
  <p className="">Talk to potential customers about our proposed
   solution and ask for fair price expectancy</p>
</div>

<label>Current Status</label>
      <p
       className="w-[300px] 
        md:w-[370px] lg:w-[370px]  border-2 text-xs mb-2  border-solid
         border-gray-300 rounded-md mx-auto p-3 mt-2 h-[35px]">
<select className="pr-[300px] -mt-1 bg-white" 
   name="status"
   value={formData.status}
   onChange={handleChange}
 id="">


<option value="todo">Todo</option>
<option value="doing">Doing</option>
<option value="done">Done</option>
</select>
 </p>

 </form>
  </div>
</dialog>
    </div>
          </div>

  {/* ********end done section     */}
  {/* ********end done section     */}
  {/* ********end done section     */}



    <div className=" flex justify-center items-center w-[200px] bg-[#E4EBFA]">
                    
    <p className="text-gray-500"></p>
        {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn" onClick={()=>document.getElementById('my_modal_5').showModal()}>+ New Column</button>
<dialog id="my_modal_5" className="modal w-[350px] md:w-[450px] lg:w-[450px] h-[675px]  mx-auto modal-bottom sm:modal-middle">
  <div className="modal-box  shadow-lg ">
    <h3 className="  text-xl font-semibold">Add New Task</h3>

  
<form 
    onSubmit={handleClick}
    className="mt-1">

      <label className="text-xs">Title</label>
      <input
       className=" w-[300px] md:w-[370px] lg:w-[370px] border-2 mb-1 text-xs border-solid border-gray-300 rounded-md mx-auto p-3 mt-2 h-[35px]"
        type="name"
        value={formData.title}
        onChange={handleChange}
        placeholder="e.g. Take coffee break" name="title" required />

      <label className="mt-1 text-xs">Description</label>
    <textarea className=" p-1
  w-[300px]  md:w-[370px] lg:w-[370px]  text-xs mb-1 border-2 rounded-md  border-solid
     border-gray-300 h-[100px]
     " name="description"
     value={formData.description}
     onChange={handleChange}
     id="" 
     placeholder="Its always good to take a break. This 15 minute break will 
     recharge the batteries a little" cols="30" rows="10" required>

    </textarea>


<label className="mt-2 text-xs">Subtasks</label>
      <input
       className="w-[300px]  md:w-[350px] lg:w-[350px]  border-2 text-xs mb-1 rounded-md 
        border-solid border-gray-300  mx-auto p-3 mt-2 h-[35px]"
        type="text"
        value={formData.subtasks}
        onChange={handleChange}
        placeholder="e.g. Make coffee" 
        name="subtasks"  required/>


      <input
       className="w-[300px]  md:w-[350px] lg:w-[350px]  border-2 text-xs mb-4 rounded-md 
        border-solid border-gray-300 mx-auto p-3 mt-2 h-[35px]"
        type="text" 
        placeholder="e.g. Drink coffee & smile" 
        value={formData.subtasks1}
        onChange={handleChange}
        name="subtasks1" required />

<button className="w-[300px]  md:w-[370px] lg:w-[370px]  hover:bg-white hover:text-[#8471F2]
 mb-2 hover:btn-secondary rounded-full text-white text-center h-[45px] bg-[#8471F2]"> 
+ Add New Subtask
</button>

<label>Title</label>
      <p
       className="w-[300px] 
        md:w-[370px] lg:w-[370px]  border-2 text-xs mb-2  border-solid
         border-gray-300 rounded-md mx-auto p-3 mt-2 h-[35px]">
<select className="pr-[300px] -mt-1 bg-white" 
   name="status"
   value={formData.status}
   onChange={handleChange}
 id="">


<option value="todo">Todo</option>
<option value="doing">Doing</option>
<option value="done">Done</option>
</select>
 </p>


<button 
  type="submit"

  onClick={(e) => {
    if (formData.title && formData.description && formData.subtasks) {
      document.getElementById('my_modal_5').close();
    } else {
      e.preventDefault();
      alert("Please fill in all fields.");
    }
  }}

  className="w-[300px]  md:w-[370px] lg:w-[370px] rounded-full text-white text-center h-[45px] bg-[#8471F2]">
  Create Task
</button>
 </form>


  </div>
</dialog>
   </div>

</div>
  <NavLink className={({isActive})=> isActive ? 'hidden' : 
  'block'} 
  to="/sitebarPlatform">
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
export default platform;