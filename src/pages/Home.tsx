import { useEffect, useState, useRef, type JSX } from 'react';
import './styles/to-do-app.css'
import CreateTask from './task components/CreateTask';
import { v4 as uuidv4 } from 'uuid';



function Home(){
    const [tasks, setTasks] = useState(Array<string>());

    //another feature to add is when add component it should click it (do it later)
    function addButton(){
        setTasks(prevTasks => [uuidv4(), ...prevTasks]);
    }

    function deleteCreateTaskWithSpecificId(id:string){
        setTasks(prevTasks => prevTasks.filter(task => task !== id));
        console.log("meow")
        console.log(tasks);
        
    }
     
    return(
        <>
            <div className="intro">
                <h1>To Do Application</h1>
                <div className="intro-add-btn-and-greetings">
                    <h2>Hi {'{username}'},</h2>
                    <div className="add-btn"><i className="fa-solid fa-plus" onClick={addButton}></i></div>
                </div>
            </div>
            <div>
                <div style={{margin:0}} className='add-tasks-container'>

                    {tasks.map(task => <CreateTask key={task} taskId={task} deleteCreateTaskWithSpecificId={deleteCreateTaskWithSpecificId} />)}
                </div>
                <div style={{margin:0}}>
                    <div className="tasks">
                        <h4>Task 2</h4>
                        <div className="task-btns">
                            <div className="task-btn"><i className="fa-solid fa-check done"></i></div>
                        </div>
                    </div>
                    <div className="tasks">
                        <h4>Task 2</h4>
                        <div className="task-btns">
                            <div className="task-btn"><i className="fa-solid fa-check done"></i></div>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}
export default Home;