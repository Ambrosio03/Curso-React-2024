import React, { useState } from 'react'
import idGenerator from '../../helpers/idGenerator';

const initialState= [
    {
        id:1,
        title:"Comprer pan",
        completed: false,
    },
    {
        id:2,
        title:"Sacar el perro",
        completed: true
    },
    {
        id:3,
        title:"Entender React",
        completed: false
    }
]



const ToDoListTailWindCss = () => {

//Hoock
const [tasks, setTasks] = useState(initialState);
const [newTask, setNewTask] = useState("");

function handlerAddTask() {
    const newid = idGenerator();
    if(newTask.trim() !== ""){
        const newTaskObject = {
            id: newid,
            title: newTask.trim(),
            completed:false,
        }
        setTasks([...tasks , newTaskObject]);
        setNewTask("");
    }
}
function handlerRemoveTask(taskId) {
    const updateTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updateTasks);
}

function handlerToggleCompleted(taskId) {
    const updateTask = tasks.map((task) =>
        task.id === taskId ? {...task, completed: !task.completed} : task
        
    );
    setTasks(updateTask);
}

  return (
    <div className='max-w-md mx-auto mt-8 p-6 bg-yellow-50 shadow-md rounded-md'>
        <h1 className='text-2x1 mb-4 font-bold uppercase text-center'>ToDoList</h1>
        <div className='flex mb-4'>
            <input type="text" placeholder='Nueva Tarea' 
            className='flex-1 mr-2 p-2 border rounded-md focus:outline-none focus:border-blue-500'
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            //onKeyDown={}
             />
            <button className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-800'
            onClick={handlerAddTask}> Agregar tarea</button>
        </div>
        <div>
            <ul>
                {
                    tasks.map(task => (
                        <li key={task.id} className='flex items-center mb-2'>
                            <input
                             type="checkbox"
                             className='mr-2'
                             checked={task.completed}
                             onChange={() => handlerToggleCompleted(task.id)}
                            />
                            <span className={task.completed ? "line-through" : ""}>{task.title}</span>
                            <button className='ml-auto bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-800'
                            onClick={() => handlerRemoveTask(task.id)}>Eliminar</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    </div>
  )
}

export default ToDoListTailWindCss