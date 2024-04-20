export const getBlock =() =>{
    let blcok = [];
    const storedBook = localStorage.getItem('blcok')
    if(storedBook){
        blcok = JSON.parse(storedBook)
    }
    return blcok;
}

export const savBook = book =>{
    let books = getBlock()
    const isExist = books.find(ab => ab.id === book.id)
    if(isExist){
     return toast.error('Already added to card');
    }
    books.push(book)
    localStorage.setItem('books', JSON.stringify(books))
    toast.success('Successfully Added to Wish Card')
}
const [divVisible, setDivVisible] = useState(!true);



const handleClick2 = () => {
    setDivVisible(!divVisible);
};
<div>
            {/* Conditionally render the div based on the state */}
            {divVisible && (
 <div className=" top-[10%] left-[35%] absolute ">
          <div className=" w-[350px] md:w-[450px] lg:w-[450px] h-[605px]
         modal-box  shadow-lg ">
         <h3 className="  text-xl font-semibold">Add New Task</h3>
     
       
     <form 
         onSubmit={handleClick2}
         className="mt-1">
     
           <label className="text-xs text-gray-400 font-semibold">Title</label> <br />
           <input
            className=" w-[300px] md:w-[370px] lg:w-[370px] border-2 mb-1 text-xs border-solid border-gray-300 rounded-md mx-auto p-3 mt-2 h-[35px]"
             type="name" placeholder="e.g. Take coffee break" name="title" />
     
     <label className="mt-1 text-xs">Description</label>
    <textarea className=" p-1
  w-[300px]  md:w-[370px] lg:w-[370px]  text-xs mb-1 border-2 rounded-md  border-solid
     border-gray-300 h-[100px]
     " name="description" id="" 
     placeholder="Its always good to take a break. This 15 minute break will recharge the batteries a little" cols="30" rows="10">

    </textarea>
      {/* <input
       className="w-[370px] mb-1 border-2 rounded-md  border-solid border-gray-300 mx-auto pl-3
        mt-2 h-[100px]"
        type="text" placeholder="e.g. Its always good to take a break. This 15 minute break will 
        recharge the batteries a little." name="" /> */}

<label className="mt-2 text-xs">Subtasks</label> <br />
      <input
       className="w-[300px]  md:w-[350px] lg:w-[350px]  border-2 text-xs mb-1 rounded-md  border-solid border-gray-300 rounded-mdআদ mx-auto p-3 mt-2 h-[35px]"
        type="text" placeholder="e.g. Make coffee" name="Subtasks" />


      <input
       className="w-[300px]  md:w-[350px] lg:w-[350px]  border-2 text-xs mb-4 rounded-md  border-solid border-gray-300 rounded-mdআদ mx-auto p-3 mt-2 h-[35px]"
        type="text" placeholder="e.g. Drink coffee & smile" name="Subtasks1" />

<button className="w-[300px]  md:w-[370px] lg:w-[370px]  hover:bg-white hover:text-[#8471F2] mb-2 hover:btn-secondary rounded-full text-white text-center h-[45px] bg-[#8471F2]"> 

+ Add New Subtask
</button> <br />

<label>Title</label> <br />
<p
       className="w-[300px] 
        md:w-[370px] lg:w-[370px]  border-2 text-xs mb-2  border-solid
         border-gray-300 rounded-md mx-auto p-3 mt-2 h-[35px]">
<select className="pr-[300px] -mt-1 bg-white" name="ferdous" id="">
<option value="">Todo</option>
<option value="">Doing</option>
<option value="">Done</option>
</select>
      </p>


<button 
  type="submit"
  className="w-[300px]  mt-2 md:w-[370px] lg:w-[100px] rounded-full text-white text-center h-[45px] bg-[#8471F2]">
Submit
</button>


     
         </form>
     
     
      
       </div>
 </div>
            )}
        </div>
import { NavLink } from "react-router-dom";
import { BiHide } from "react-icons/bi";
import { useState } from "react";
import { Link } from "react-router-dom";
const platform = () => {

  const [inputvalue, setInputvalue] = useState("");
  const [description, setDescription] = useState("");
  const [subtasks, setSubtasks] = useState("");
  const [subtasks1, setSubtasks1] = useState("");
 

  const handleClick = (e) =>{
    e.preventDefault()

    const title = e.target.title.value;
    const description = e.target.description.value;
    const Subtasks = e.target.Subtasks.value;
    const Subtasks1 = e.target.Subtasks1.value;
    setInputvalue(title)
    setDescription(description)
    setSubtasks(Subtasks)
    setSubtasks1(Subtasks1)


 
  }

  



    return (
<div className="min-h-[calc(100vh-80px)] w-full bg-[#F4F7FD] ">
<div className="flex flex-col md:flex-row lg:flex-row gap-2 min-h-[calc(100vh-80px)] p-2">
<div>
<div className="w-[240px] md:w-[200px] lg:w-[240px] flex justify-start gap-2 p-2  ">
        <p className="w-[15px] mt-1 h-[15px] bg-[#49C4E5] rounded-full "></p>
        <p>TODO (4)</p>

</div>

  <div id="todo-section" className=" space-y-2 shadow-lg mt-1  bg-[#FFFFFF]  rounded-lg">
{/* <div className="mt-2 ml-2 mr-2 mb-4 ">

<Link 
 onClick={handleClick2}
>

   <p className="">{inputvalue}</p>
   <p className="">{description}</p>
    <p className="">{subtasks}</p>
    <p className="">{subtasks1}</p>
</Link>

</div> */}
  </div>

</div>

<div>
<div className="w-[240px] md:w-[200px] lg:w-[240px] flex justify-start gap-2 p-2  ">
    <p className="w-[15px] mt-1 h-[15px] bg-[#8471F2] rounded-full "></p>
   <p>DOING (6)</p>
        </div>
        <div id="doing-section" className="space-y-2 shadow-lg  mt-  bg-[#FFFFFF]  rounded-lg">
        {/* <div className="mt-2 ml-2 mr-2 mb-4">
<p className="">{inputvalue}</p>
    <p className="">{subtasks}</p>
    <p className="">{subtasks1}</p>
</div> */}
</div>


</div>

<div>
<div className="w-[240px] md:w-[200px] lg:w-[240px] flex  justify-start gap-2 p-2   ">
    <p className="w-[15px] mt-1 h-[15px] bg-[#67E2AE] rounded-full "></p>
  <p>  DONE (7)</p>
    </div>
<div id="-section" className="space-y-2 shadow-lg  mt-1 bg-[#FFFFFF]   rounded-lg">

{/* <div className="mt-2 ml-2 mr-2 mb-4">
<p className="">{inputvalue}</p>
    <p className="">{description}</p>
    <p className="">{subtasks}</p>
    <p className="">{subtasks1}</p>
</div> */}


</div>

</div>





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
        type="name" placeholder="e.g. Take coffee break" name="title" />

      <label className="mt-1 text-xs">Description</label>
    <textarea className=" p-1
  w-[300px]  md:w-[370px] lg:w-[370px]  text-xs mb-1 border-2 rounded-md  border-solid
     border-gray-300 h-[100px]
     " name="description" id="" 
     placeholder="Its always good to take a break. This 15 minute break will recharge the batteries a little" cols="30" rows="10">

    </textarea>
      {/* <input
       className="w-[370px] mb-1 border-2 rounded-md  border-solid border-gray-300 mx-auto pl-3
        mt-2 h-[100px]"
        type="text" placeholder="e.g. Its always good to take a break. This 15 minute break will 
        recharge the batteries a little." name="" /> */}

<label className="mt-2 text-xs">Subtasks</label>
      <input
       className="w-[300px]  md:w-[350px] lg:w-[350px]  border-2 text-xs mb-1 rounded-md  border-solid border-gray-300 rounded-mdআদ mx-auto p-3 mt-2 h-[35px]"
        type="text" placeholder="e.g. Make coffee" name="Subtasks" />


      <input
       className="w-[300px]  md:w-[350px] lg:w-[350px]  border-2 text-xs mb-4 rounded-md  border-solid border-gray-300 rounded-mdআদ mx-auto p-3 mt-2 h-[35px]"
        type="text" placeholder="e.g. Drink coffee & smile" name="Subtasks1" />

<button className="w-[300px]  md:w-[370px] lg:w-[370px]  hover:bg-white hover:text-[#8471F2] mb-2 hover:btn-secondary rounded-full text-white text-center h-[45px] bg-[#8471F2]"> 

+ Add New Subtask
</button>

<label>Title</label>

      <p
       className="w-[300px] 
        md:w-[370px] lg:w-[370px]  border-2 text-xs mb-2  border-solid
         border-gray-300 rounded-md mx-auto p-3 mt-2 h-[35px]">
<select className="pr-[300px] -mt-1 bg-white" name="ferdous" id="">
<option value="">Todo</option>
<option value="">Doing</option>
<option value="">Done</option>
</select>
      </p>


<button 
  type="submit"
  onClick={() => document.getElementById('my_modal_5').close()} // Close the modal
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
import { useState } from "react";

const Platform = () => {
  const [tasks, setTasks] = useState({
    todo: [],
    doing: [],
    done: []
  });

  const handleClick = (e) => {
    e.preventDefault();

    const title = e.target.title.value;
    const description = e.target.description.value;
    const subtasks = [e.target.Subtasks.value, e.target.Subtasks1.value];


    const newTask = { title, description, subtasks };

    setTasks((prevTasks) => ({
      ...prevTasks,
      [description]: [...prevTasks[description], newTask]
    }));

    // Clear input fields
    e.target.reset();
  };

  return (
    <div className="min-h-[calc(100vh-80px)] w-full bg-[#F4F7FD]">
      {/* Todo Section */}
      <div className="flex flex-col gap-2 min-h-[calc(100vh-80px)] p-2">
        <div className="w-[240px] flex justify-start gap-2 p-2">
          <p className="w-[15px] mt-1 h-[15px] bg-[#49C4E5] rounded-full "></p>
          <p>TODO ({tasks.todo.length})</p>
        </div>

        <div id="todo-section" className="space-y-2 shadow-lg mt-1 bg-[#FFFFFF] rounded-lg">
          {tasks.todo.map((task, index) => (
            <div key={index} className="mt-2 ml-2 mr-2 mb-4">
              <p>{task.title}</p>
              <p>{task.description}</p>
              <p>{task.subtasks.join(", ")}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Doing Section */}
      <div className="flex flex-col gap-2 min-h-[calc(100vh-80px)] p-2">
        {/* Similar structure as Todo section */}
      </div>

      {/* Done Section */}
      <div className="flex flex-col gap-2 min-h-[calc(100vh-80px)] p-2">
        {/* Similar structure as Todo section */}
      </div>

      {/* Add New Task Modal */}
      <dialog id="my_modal_5" className="modal w-[350px] md:w-[450px] lg:w-[450px] h-[675px] mx-auto modal-bottom sm:modal-middle">
        {/* Modal Content */}
      </dialog>

      {/* Navigation */}
      <NavLink className={({ isActive }) => (isActive ? "hidden" : "block")} to="/sitebarPlatform">
        <div className="rounded-r-full bg-[#635FC7] flex justify-center items-center text-white -mt-[50px] w-[50px] h-[40px]">
          <BiHide className="w-6" />
        </div>
      </NavLink>
    </div>
  );
};

export default Platform;
