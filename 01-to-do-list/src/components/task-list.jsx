function TaskList({taskList, deleteTask}){

    return(
        taskList.map((task, index) => {
            return(
                <li key={index}>
                    <label>{task}</label>
                    <button onClick={() => deleteTask(index)}><i className="fa-solid fa-trash"></i></button>
                </li>
            )
        })
    )

}

export default TaskList