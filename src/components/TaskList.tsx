import React from 'react'
import { Task } from '../types'
import { TaskItem } from './TaskItem'

type TaskListProps = {
    tasks:Task[]
    onToggle: (id:number) => void 
    onDelete: (id:number) => void
}

export const TaskList: React.FC<TaskListProps> = ({tasks,onToggle,onDelete}) => {
  return (
    <div>
        {tasks.map(task => (
            <TaskItem
                key={task.id}
                task={task}
                onToggle={onToggle}
                onDelete={onDelete}

            />
        ))}
    </div>
  )
}
