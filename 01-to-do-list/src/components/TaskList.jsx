import { TaskInformation } from '../components/taskInformation'
import { useFilter } from '../hooks/useFilter'
import { useTaskList } from '../hooks/useTaskList'
import { Filter } from './Filter'
import { useEffect, useState } from 'react'

export function TaskList () {

    // useTaskList <-- implemta un useContext()
    const { tasks, taskDone, taskCheck, deleteTask } = useTaskList()

    // actividad la cual se reflejara en InfoTask
    const [infoTask, setInfoTask] = useState({})
    const {filter, setFilter, filterTask} = useFilter()
    
    // TaskList aplicando los filtros
    const [ taskListAux, setTaskListAux ] = useState([])

    // Actualizar los cambios de tasks y filter
    useEffect(()=> {
        setTaskListAux(filterTask(tasks))
    }, [filter, tasks])

    // Eliminar una tarea <-- función de TaskListContext
    const eliminateTask = (task) => {
        deleteTask(task)
        setInfoTask('')
    }


    return (
        <div className="w-full relative">
            <div className="absolute w-8/12 flex flex-col">
                
                <Filter setFilter={setFilter}></Filter>

                <ul className="bg-gray-600">
                    {
                        taskListAux.map(task => (
                            <li key={task.id} className={`w-full h-12 flex align-items-center px-3 hover:bg-gray-700 ${task.isCheck ? 'bg-gray-700':''}`}>
                                <input  type="checkbox" id={task.id} defaultChecked={task.isCheck} onChange={()=> taskCheck(task.id)} />
                                <label htmlFor={task.id} className="w-full h-full flex place-items-center">
                                    <p className={`flex-1 truncate pl-5 text-start ${task.isDone ? 'line-through' : ''}`}>{task.task}</p>

                                    <div className="flex max-w-max flex-0 flex-col justify-center">
                                        <p className="flex-0 text-xs">{task.date}</p>
                                        <p className="flex-0 font-thin" style={{fontSize : '10px'}}>{task.priority}</p>
                                    </div>

                                    <div className="flex-0 max-w-max mx-3">
                                        <button onClick={()=> setInfoTask(task)} className="flex-0" type="button">
                                            <i hidden={!task.isCheck} className="fa-solid transition fa-info p-1 rounded-lg bg-yellow-200 hover:bg-yellow-600" style={{color: '#b1bac8'}}></i>
                                        </button>
                                        <button onClick={()=> {eliminateTask(task.id)}} hidden={!task.isCheck} className="flex-0" type="button">
                                            <i className="fa-solid transition fa-trash ml-2 p-1 rounded-lg bg-red-200 hover:bg-red-600" style={{color: '#b1bac8'}}></i>
                                        </button>
                                        <button onClick={()=> taskDone(task.id)} hidden={!task.isCheck} className="flex-0" type="button">
                                            <i className="fa-solid transition fa-check ml-2 p-1 rounded-lg bg-green-200 hover:bg-green-600" style={{color: '#b1bac8'}}></i>
                                        </button>
                                    </div>
                                </label>
                            </li>
                        ))
                    }
                </ul>
            </div>

            { infoTask.id  && (
                <div className='fixed border-2 right-0 ' style={{width : '32%'}}>
                    <TaskInformation task={infoTask} />
                </div> )
            }

        </div>
        
    )
}