import { useState, useEffect } from "react"
import { addTaskList } from "../logic/addTaskToTaskList"

export function useTaskList() {
    const [task, setTask] = useState('')
    const [taskList, setTaskList] = useState(()=> {
        const getTaskListFromLocalStorage = localStorage.getItem('taskList')
    
        return getTaskListFromLocalStorage ? JSON.parse(getTaskListFromLocalStorage) : []
    })

    const addTaskToTaskList = addTaskList({task, setTask, taskList, setTaskList})

    useEffect(()=> {
        localStorage.setItem('taskList', JSON.stringify(taskList))
    }, [taskList])
     
    return { task, setTask, taskList, setTaskList, addTaskToTaskList }
}