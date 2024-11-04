import './App.css'
import { useState, useEffect } from 'react'
import { TaskInput } from './components/TaskInput'

function App() {

  const [task, setTask] = useState('')
  const [taskList, setTaskList] = useState([])

  const addTaskToTaskList = (e) => {
    e.preventDefault()

    if(task === '') return // cancela la acción si el input se encuentra vacío

    setTaskList([...taskList, task])
    setTask('')
  }


  return (
    <div>
      <header>
        <h1>To Do List created by <strong>Cristian Delgado</strong></h1>
        <TaskInput task={task} setTask={setTask} addTaskToTaskList={addTaskToTaskList} /> 
      </header>
      <main>
        
      </main>
    </div>
  )
}

export default App
