export function Filter({ setFilter }) {

    const handleChangeFilter = (e) => {
        setFilter({
            category : e.target.value
        })
    }


  return (
    <div className="p-5 flex justify-between bg-gray-900 w-full border-b-2">
        <h2 className="text-start">
            <strong>Task List</strong>
        </h2>
        <label className="inline" htmlFor="filterTask">
            <select name="filterTask" id="filterTask" onChange={handleChangeFilter}>
                <option value="pending" defaultChecked>Pendiente</option>
                <option value="done">Realizadas</option>
            </select>
        </label>
    </div>
  );
}
