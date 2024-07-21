import React, { useState } from "react"
import { TaskAdd } from "./components/TaskAdd"
import { TaskList } from "./components/TaskList"
import { Task } from "./types"


const App: React.FC = () => {
  //manejo los estados de la tarea y como son varios los usare como arreglo []
  const [tasks, setTasks] = useState<Task[]>([])
  
  //Creo los valores iniciales del type
  const addTask = (text: string) => {
    const newTask: Task = {
      id: Date.now() + 1,
      text,
      completed: false
    }
    setTasks([...tasks, newTask])

  }

  const ToggleTask = (id: number) => {
    setTasks(tasks.map(task => (
      task.id === id ? { ...task, completed: !task.completed } : task
    )))
  }

  const deleteTask = (id:number) =>{
    setTasks(tasks.filter(task => task.id !== id))
  }
  return (
    <>
      <header
        className=" mt-5 text-5xl text-white text-center font-bold"
      >
        Lista de Tareas
      </header>
      <TaskAdd 
        onAddTask={addTask}
      />
      <TaskList
        tasks={tasks}
        onToggle={ToggleTask}
        onDelete={deleteTask}
      />
    </>
  )
}

export default App