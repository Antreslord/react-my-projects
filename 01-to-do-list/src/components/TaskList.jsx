import { checkItemList, someCheckTask } from "../logic/checkItemList"
import { removeTasks } from "../logic/removeTask"

export function TaskList({checkList, setCheckList, taskList, setTaskList }) {

    const addCheckList = () => {
      const newCheckList = taskList.filter(task => task.checked )
      const joinCheckList = checkList.concat(newCheckList)
      setCheckList(joinCheckList)   
      removeTasks(taskList, setTaskList)
    }

    const someCheck = someCheckTask(taskList)

    return (
      <div className="flex flex-col justify-center">
        { someCheck &&
        (<div className="flex justify-evenly w-full mb-4">
          <button onClick={addCheckList} className="py-5 px-6 rounded-full bg-green-400 hover:bg-green-700">
            <i className="fa-solid fa-check"></i>
          </button>
          <button onClick={()=> removeTasks(taskList, setTaskList)} className="py-5 px-6  rounded-full bg-red-400 hover:bg-red-700">
            <i className="fa-solid fa-trash"></i>
          </button>
        </div>)
        }
        <ul className="w-96">
          {taskList.map((task, index) => (
            <li key={index} className="flex items-center h-12 w-full hover:bg-slate-500">
              <input
                checked={task.checked || false}
                onChange={()=> checkItemList(index, taskList, setTaskList)}
                type="checkbox"
                id={`task${index}`}
                className="mx-4 flex-none"
              />
              <label htmlFor={`task${index}`} className="flex-auto">
                {task.task}
              </label>
            </li>
          ))}
        </ul>
      </div>
    );
}