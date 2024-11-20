import './App.css'
import { useState } from 'react'

import { TaskListProvider } from './context/taskListContext'
import { Header } from './components/Header'
import { Main } from './components/Main'


function App() {

  const [showInputTask, setShowInputTask] = useState(false)

  return (
    <TaskListProvider>
      <div className='w-full p-5'>
        <Header showInputTask={showInputTask} setShowInputTask={setShowInputTask}></Header>
        <Main showInputTask={showInputTask} setShowInputTask={setShowInputTask}></Main>
      </div>
    </TaskListProvider>
  )
}

export default App
