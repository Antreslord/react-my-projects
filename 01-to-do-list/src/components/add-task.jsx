function AddTask({task, setTask, addTask}){

    const handleInputChange = (e) => {
        setTask(e.target.value)
    } 

    return(
        <div className="w-full">
            <form className="w-full" onSubmit={addTask}>
                <input type="text" onChange={handleInputChange} value={task} className="p-2 rounded-l" placeholder="Agregar una tarea" />
                <button type="submit" className="bg-indigo-500 hover:bg-indigo-900 p-2 rounded-r"><i className="fa-solid fa-check bg"></i></button>
            </form>
        </div>
    )

}

export default AddTask