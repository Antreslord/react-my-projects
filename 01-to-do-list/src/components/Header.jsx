
export function Header ({ setShowInputTask, showInputTask }) {

    return(
        <header className='mb-5'>
          <h1 className='mb-4'>To Do List created by <strong>Cristian Delgado</strong></h1>
          <div className=' flex w-full justify-content-start pl-5'>
            <button className='bg-blue-400 hover:bg-blue-600 px-2 py-1 rounded-md' type='button' onClick={()=> setShowInputTask(!showInputTask)}>
              <strong>Add Task</strong>
            </button>
          </div>
        </header>
    )
}