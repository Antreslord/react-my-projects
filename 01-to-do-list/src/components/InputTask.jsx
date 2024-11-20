import { useState } from "react"
import { useTaskList } from "../hooks/useTaskList"

export function InputTask({ setShowInputTask }){

    const { addTask } = useTaskList()

    const [task, setTask] = useState({
        task: '',
        date: new Date().toISOString().split('T')[0],
        priority: 'low'
    })

    function handlerInputs (e, prop) {
        setTask({ ...task, [ prop ]: e.target.value })
    }

    const addTaskToTaskList = (e) => {
        e.preventDefault()
        if(task.task === '') return
        addTask(task)
        setTask({date: new Date().toISOString().split('T')[0], task: '', priority: 'low', description: ''})
        setShowInputTask(false)
    }

    const styleLabel = 'mb-4'

    return (
        <div className="absolute w-full grid place-items-center">
            <div className="max-w-max bg-gray-700 grid place-items-center rounded-lg p-10">
                <h2 className="inline mb-5 text-2xl"><strong>Add Task...</strong></h2>    
                <form onSubmit={addTaskToTaskList} className="flex flex-col justify-center max-w-max">
                    <label htmlFor="taskText" className={styleLabel}> Ingresa una Tarea <br />
                        <input type="text" onChange={(e)=> handlerInputs(e,'task')} value={task.task} required id="taskText" className="px-4 py-2" placeholder="Viajar a Marruecos..." />
                    </label>

                    <label htmlFor="dateTask" className={styleLabel}> Indique una fecha limite <br/>
                        <input type="date" onChange={(e)=> handlerInputs(e,'date')} value={task.date} name="dateTask" id="dateTask" />
                    </label>

                    <label htmlFor="priorityTask" className={styleLabel}> Prioridad <br />
                        <select name="priorityTask" onChange={(e)=> handlerInputs(e,'priority')} value={task.priority} id="priorityTask">
                            <option value="low" defaultValue >Low</option>
                            <option value="media">Media</option>
                            <option value="high">High</option>
                        </select>
                    </label>

                    <label htmlFor="taskDescription"> Descripción <br />
                        <textarea name="taskDescription" id="taskDescription" onChange={(e)=> handlerInputs(e,'description') }></textarea>
                    </label>

                    <div className="w-full flex justify-evenly">
                        <button type="submit" className="bg-green-400 hover:bg-green-600 px-2 py-1 w-20 rounded-md"><strong>Save</strong></button>
                        <button type="button" onClick={()=> setShowInputTask(false)} className="bg-red-400 hover:bg-red-600 px-2 py-1 w-20 rounded-md"><strong>Cancel</strong></button>
                    </div>
                </form>
            </div>
        </div>
    )
}
