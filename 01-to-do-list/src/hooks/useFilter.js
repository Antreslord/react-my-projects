import { useState } from "react";

export function useFilter () {

    const [filter, setFilter] = useState({
        category: 'pending'
    })

    const filterTask = (tasks) => {
        if(filter.category === 'done'){
            return tasks.filter(task => task.isDone == true)
        }
        else{
            return tasks.filter(task => task.isDone == false)
        }
    }

    return {filterTask, filter, setFilter}

}
