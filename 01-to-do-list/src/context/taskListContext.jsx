import { createContext, useReducer, useEffect } from "react";

// 1. crear un Contexto
export const TaskListContext = createContext()

// 2. Crear una función reducer
const initialTasks = () => {
  const getTaskListFromLocalStorage = localStorage.getItem('taskList')
  return getTaskListFromLocalStorage ? JSON.parse(getTaskListFromLocalStorage) : []
}

const nextId = () => {
  const lastId = initialTasks().length > 0 ? initialTasks().map(item => item.id).sort(( a, b ) => b - a)[0] : 0

  return lastId 
}

let lastId = nextId()

function reducer ( tasks, action ){

  switch(action.type){
    case 'ADD_TASK' : {

      return [...tasks, {
        id : lastId,
        task : action.task, // <---
        date: action.date,  // <---
        priority: action.priority,  // <---
        description: action.description,  // <---
        isCheck : false,
        isDone : false
      }]
    }
    case 'TASK_IS_DONE' : {

      const auxTasks = tasks.map(task => 
        action.id === task.id ? { ...task, isDone: !task.isDone } : task
      )

      return auxTasks
    }
    case 'TASK_IS_CHECK' : {
      const auxTasks = tasks.map(task => 
        action.id === task.id ? { ...task, isCheck : !task.isCheck } : task
      )

      return auxTasks
    }
    case 'DELETE_TASK' : {
      const deleteTask = tasks.filter(task => task.id !== action.id)
      
      return deleteTask 
    }
    
    default : return tasks
  }
}

// 3. Crear un Provider
export function TaskListProvider ({ children }) {

  const [ tasks, dispath ] = useReducer(reducer, initialTasks())

  useEffect(()=>{
    localStorage.setItem('taskList', JSON.stringify(tasks))
    console.log(nextId())
  },[tasks])

  const addTask = ( {task, date, priority, description} ) => { // <---
    dispath({
      type: 'ADD_TASK',
      task, date, priority, description
    })
    lastId++
  }

  const taskDone = ( id ) => {
    dispath({
      type: 'TASK_IS_DONE',
      id
    })
  }

  const taskCheck = ( id ) => {
    dispath({
      type: 'TASK_IS_CHECK',
      id
    })
  }

  const deleteTask = ( id ) =>{
    dispath({
      type: 'DELETE_TASK',
      id
    })
  }

  return(
    <TaskListContext.Provider value={{tasks, addTask, taskDone, taskCheck, deleteTask}} >
      {children}
    </TaskListContext.Provider>
  )

}