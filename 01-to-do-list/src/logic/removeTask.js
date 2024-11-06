export const removeTasks = (list, setList) => {
  const newTaskList = list.filter((task) => task.checked == false);
  setList(newTaskList);
};