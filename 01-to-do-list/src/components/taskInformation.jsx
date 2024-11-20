import { useTaskList } from "../hooks/useTaskList"

export function TaskInformation ({task}) {

    const {deleteTask, taskDone} = useTaskList()
    const eliminateTask = () => {
        deleteTask(task.id)
        task = ''
    }

    return (
        <div className="w-full">
            <div className="p-5 bg-gray-900 w-full border-b-2">
                <h2 className="text-start text"><strong>Task Info</strong></h2>
            </div>
            <div className="bg-gray-600 p-3">
                <div className="mb-3">
                    <h3 className={`font-black text-lg text-start ${task.isDone ? 'line-through' : ''}`}>{task.task}</h3>
                </div>
                <div className="flex w-full justify-between mb-3">
                    <p><strong>Date:</strong>{task.date}</p>
                    <p><strong>Priority:</strong>{task.priority}</p>
                </div>
                <div className="mb-3">
                    <h3 className="font-black mb-3">Description</h3>
                    <div className="overflow-auto h-40">
                        <p className="text-sm">
                            {task.description ? task.description : 'No hay description'}
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex">
                {
                    task.isDone == false && ( <button onClick={()=> taskDone(task.id)} className="w-6/12 transition bg-green-400 hover:bg-green-600 py-4 font-black">Done</button>)
                }
                <button onClick={eliminateTask} className={`${task.isDone ? 'w-full' : 'w-6/12'} transition bg-red-400 hover:bg-red-600 py-4 font-black`}>Delete</button>
            </div>
        </div>
    )
}