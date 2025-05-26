export type Task = {
    taskID: number,
    taskName: string,
    taskColor: string,
}

function Tasks(task : Task){
    return (
        <>
            <div className="tasks" style={{backgroundColor:task.taskColor}} id={task.taskID+""}>
                <h4>{task.taskName}</h4>
                <div className="task-btns">
                    <div className="task-btn"><i className="fa-solid fa-check done"></i></div>
                </div>
            </div>
        </>
    )
}
export default Tasks;