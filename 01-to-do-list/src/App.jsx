import { useEffect, useState } from 'react'
import './App.css'
import AddTask from './components/add-task'
import TaskList from './components/task-list'

function App() {

  const [task, setTask] = useState('')
  const [taskList, setTaskList] = useState(()=> {
    const getTaskListFromLocalStorage = localStorage.getItem('taskList')

    return getTaskListFromLocalStorage ? JSON.parse(getTaskListFromLocalStorage) : []
  })

  // añadir las tareas al Array
  const addTask = (e) => {
    e.preventDefault()

    if(task === ''){
      return
    }

    const currentTasks = taskList
    setTaskList([...currentTasks, task])
    setTask('')
  }

  //Eliminar las tareas
  const deleteTask = (indexToDelete) => {
    const filterTaskList = taskList.filter((_, index) => index !== indexToDelete)
    setTaskList(filterTaskList)
  }

  // guardar la lista de tareas en el localStorage
  useEffect(() => {
    localStorage.setItem('taskList', JSON.stringify(taskList))
  },[taskList])


  return (
    <main>
      <h1 className='font-mono mb-2'>To do list create by <strong>Cristian Delgado</strong></h1>

      <section className="w-full mb-2">
        <AddTask task={task} setTask={setTask} addTask={addTask} />
      </section>

      <section>
        <ul>
          <TaskList deleteTask={deleteTask} taskList={taskList} />
        </ul>
      </section>
    </main>
  )
}

export default App
