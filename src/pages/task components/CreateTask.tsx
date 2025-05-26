import { useRef, useState } from "react";

interface CreateTaskProp{
    deleteCreateTaskWithSpecificId: (id:string) => void;
    taskId : string;
}

function CreateTask({deleteCreateTaskWithSpecificId,taskId}: CreateTaskProp){
    const colorInputTag = useRef(null);
    const [taskName, setTaskName] = useState('');
    const [selectedColor, setSelectedColor] = useState('#E54040')

    function handleChange( event: any){
        if(event.target)
        setTaskName(event.target.value);
    }
    function submitTaskToDB(event: any){
        if(event.key === 'Enter' && taskName !== ''){
            console.log(taskName);
            
        }
    }

    function selectColorForTask(event: any){
        //do this feature later

    }
    function deleteBtnFunc(){
        deleteCreateTaskWithSpecificId(taskId);
    }

    return(
        <>
            <div className="tasks adding-task" id={taskId}>
                <input type="text" maxLength={300} onChange={handleChange} onKeyDown={submitTaskToDB}/>
                <div className="task-btns">
                    <div className="task-btn">
                        {/* <input ref={colorInputTag} value={selectedColor} onChange={handelColorChange} type="color" style={{display:"none"}}></input> */}
                        <i onClick={selectColorForTask}  className="fa-solid fa-eye-dropper"></i>
                    </div>
                    <div className="task-btn" onClick={deleteBtnFunc}><i className="fa-solid fa-trash-can"></i></div>
                </div>
            </div>
        </>
    )
}

export default CreateTask;