export const checkItemList = ( indexChecked, list, setList ) => {
  const updateTaskList = list.map((task, index) =>
    index === indexChecked ? { ...task, checked: !task.checked } : task
  );
  setList(updateTaskList);
}

export const someCheckTask = (list) => {
    return list.some(task => task.checked)
}
