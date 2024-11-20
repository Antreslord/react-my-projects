import { useContext } from "react"
import { TaskListContext } from "../context/taskListContext"

export function useTaskList() {

  const context = useContext(TaskListContext)
  
  if(context == undefined){
    throw new Error('useTaskList must be used within Provider')
  }

  return context
}