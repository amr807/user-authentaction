/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-children-prop */
"use client"
/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import { Label, Textarea } from "flowbite-react";
import { Input } from "@nextui-org/input";
import { redirect } from "next/navigation";
import "../../css/style.css";


const NewPost = () => {
 

    const handleSubt = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

//        fetch("http://localhost:3000/profile",{
//         method:'POST',headers:{
//           "content-type":"application/json"
//         },
//         body:JSON.stringify({
// obj        })}).then((res)=>{
//     console.log(res)
// }).catch((e)=>console.log(e))
{/* <Posts props ={{title:Title ,body:content }}/> */}
    }; 
    
    const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
          setIsModalOpen(true)
    
  };
  const handleCancel = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
          setIsModalOpen(false)
    
  };
      
  return (
    <div className="container">
      <main className={`main ${isModalOpen ? 'blurred' : ''}`}>
          <div className="noTasks">
            <h2>No tasks have been added</h2>
            <button
            onClick={handleSubmit}
              className="addTaskButton"
            >
              Add Task
            </button>
          </div>
     
      </main>

      {isModalOpen && (
        <div className="modal">
          <div className="modalContent">
            <h2>Create New Task</h2>
            <form >
              <Label className="Label">
                Task Name:
                <input
                  type="text"
                  className="input"
                //   value={taskName}
                //   onChange={(e) => setTaskName(e.target.value)}
                  required
                />
              </Label>
              <Label className="Label">
                Employee:
                <select
                  className="input"
                //   value={employee}
                //   onChange={(e) => setEmployee(e.target.value)}
                  required
                >
                  <option value="">Select an employee</option>
                  <option value="Employee 1">Employee 1</option>
                  <option value="Employee 2">Employee 2</option>
                  <option value="Employee 3">Employee 3</option>
                </select>
              </Label>
              <Label className="Label">
                Description:
                <textarea
                  className="textarea"
                //   rows="5"
                //   value={description}
                //   onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </Label>
              <Label className="Label">
                Location:
                <input
                  type="text"
                  className="input"
                //   value={location}
                //   onChange={(e) => setLocation(e.target.value)}
                  required
                />
              </Label>
              <div className="buttonGroup">
                <button className="submitButton" type="submit">
                  Create Task
                </button>
                <button className="cancelButton" type="button" onClick={handleCancel}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default NewPost;