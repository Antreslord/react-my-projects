import { checkItemList, someCheckTask } from "../logic/checkItemList"
import { removeTasks } from "../logic/removeTask"


export function CheckList({checkList, setCheckList}) {

  const someCheck = someCheckTask(checkList)

  return(
      <div>
        { someCheck &&
        (<div className="flex justify-center w-full mb-4">
            <button onClick={()=> removeTasks(checkList, setCheckList)} className="py-5 px-6  rounded-full bg-red-400 hover:bg-red-700">
              <i className="fa-solid fa-trash"></i>
            </button>
          </div>)
        }
        <ul className="w-96">
          {checkList.map((task, index) => (
            <li key={index} className="flex items-center h-12 w-full hover:bg-slate-500">
              <input
                defaultChecked={task.checked || false}
                onClick={()=> checkItemList(index, checkList, setCheckList)}
                type="checkbox"
                id={`check${index}`}
                className="mx-4 flex-none"
              />
              <label htmlFor={`check${index}`} className="flex-auto">
                <s>{task.task}</s> 
              </label>
            </li>
          ))}
        </ul>
    </div>
  )
}