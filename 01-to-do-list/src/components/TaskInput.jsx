import { useState } from "react"

export function TaskInput({ task, setTask, addTaskToTaskList }){

    const handleChange = (e) => {
        setTask(e.target.value)
    }

    return (
        <form onSubmit={addTaskToTaskList}>
            <input type="text" onChange={handleChange} value={task} placeholder="Nombre de la tarea"/>
            <button type="submit" hidden></button>
        </form>
    )
}