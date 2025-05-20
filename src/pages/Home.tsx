import './styles/to-do-app.css'

function Home(){
    return(
        <>
            <div className="intro">
                <h1>To Do Application</h1>
                <div className="intro-add-btn-and-greetings">
                    <h2>Hi {'{username}'},</h2>
                    <div className="add-btn"><i className="fa-solid fa-plus"></i></div>
                </div>
            </div>
            <div>
                <div className="tasks adding-task">
                    <input type="text" maxLength={300}/>
                    <div className="task-btns">
                        <div className="task-btn"><i className="fa-solid fa-eye-dropper"></i></div>
                        <div className="task-btn"><i className="fa-solid fa-trash-can"></i></div>
                    </div>
                </div>
                <div className="tasks">
                    <h4>Task 2</h4>
                    <div className="task-btns">
                        <div className="task-btn"><i className="fa-solid fa-check done"></i></div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home;