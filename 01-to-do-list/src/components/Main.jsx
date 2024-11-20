import { TaskList } from './TaskList.jsx'
import { InputTask } from './InputTask'

export function Main ({ showInputTask, setShowInputTask }) {
    return (
        <main className='w-full max-h-max flex justify-between relative'>
          <div className='relative '>
            <TaskList />
            { showInputTask && <InputTask setShowInputTask={setShowInputTask}/> }
          </div>
        </main>
    )
} 