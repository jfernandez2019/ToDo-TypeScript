import React from 'react'
import { Task } from '../types'

type TaskItempProps = {
    task:Task,
    onToggle: (id: number) => void 
    onDelete: (id: number) => void 
}

export const TaskItem: React.FC<TaskItempProps>  = ({task,onToggle,onDelete}) => {
  return (

    <div className=' mt-2 flex justify-between items-center w-full p-4 shadow-md bg-white mx-auto max-w-md'>
        <span
            onClick={()=>onToggle(task.id)}
            className={`cursor-pointer ${task.completed ? 'line-through text-gray-500':''}`}
        >
            {task.text}
        </span>
        <button
            onClick={()=> onDelete(task.id)}
            className='bg-red-500 text-white text-center p-1 rounded-md m-3 '
        >
            Eliminar
        </button>
    </div>
  )
}
