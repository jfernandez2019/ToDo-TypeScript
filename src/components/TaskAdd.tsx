import React, {FormEvent, useState} from 'react'

type TaskAddProps = {
    onAddTask: (task:string) => void    
}

export const TaskAdd:React.FC<TaskAddProps> = ({onAddTask}) => {

    const [task, setTask] = useState('')

    const handleSubmit = (e:FormEvent) => {
        e.preventDefault()
        if (task.trim()){
            onAddTask(task)
            setTask('')
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="flex justify-center items-center">
                <input
                    placeholder="Ingrese Tarea"
                    className="w-1/2 p-2 m-5 border border-black rounded-sm "
                    type='text'
                    value={task}
                    onChange={e=>setTask(e.target.value) }
                />
                <button
                    type='submit'
                    className='bg-blue-500 text-white p-2 mt-2 rounded-md'
                >
                    Ingresar
                </button>
            </div>
        </form>
    )
}
