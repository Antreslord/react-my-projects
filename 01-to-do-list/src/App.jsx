import './App.css'
import { useState, useEffect } from 'react'
import { TaskInput } from './components/TaskInput'
import { TaskList } from './components/TaskList'
import { useTaskList } from './hooks/useTaskList'
import { useCheckList } from './hooks/useCheckList'
import { CheckList } from './components/CheckList'

function App() {
  const {task, setTask, taskList, setTaskList, addTaskToTaskList} = useTaskList()
  const {checkList, setCheckList} = useCheckList()

  return (
    <div className='w-full'>
      <header className='my-12'>
        <h1 className='mb-6'>To Do List created by <strong>Cristian Delgado</strong></h1>
        <TaskInput task={task} setTask={setTask} addTaskToTaskList={addTaskToTaskList} /> 
      </header>
      <main className='flex w-full'>
        <section className='flex w-full justify-evenly '>
          <div className='w-max'> 
            <h3 className='text-lg py-4'>Lista de pendientes: <strong>{taskList.length}</strong></h3> 
            <TaskList 
              taskList={taskList} 
              setTaskList={setTaskList}
              checkList={checkList}
              setCheckList={setCheckList}
            />
          </div>

          { checkList.length > 0 &&
            <div className='w-max'>
            <h3 className='text-lg py-4'>Lista de T. Realizadas: <strong>{checkList.length}</strong></h3>
            <CheckList  checkList={checkList} setCheckList={setCheckList}/>
          </div>}
        </section>
      </main>
    </div>
  )
}

export default App
