export function addTaskList ({ task, setTask, taskList, setTaskList }) {
    const addTaskList = (e) => {
        e.preventDefault()
    
        if(task === '') return // cancela la acción si el input se encuentra vacío
    
        setTaskList([...taskList, {task: task, checked: false}])
        setTask('')
    }

    return addTaskList
}