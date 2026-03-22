"use client"

import { task } from "@/types/task"
import TaskItem from "./TaskItem" 

type TaskListProps = {
    tasks: task[]
    onToggleTask: (id:number) => void
    onDeleteTask: (id:number) => void
}

export default function TaskList({tasks, onToggleTask, onDeleteTask}: TaskListProps) {
    if (tasks.length === 0) {
        return <p className="text-gray-500">No tasks yet</p>
    }

    return (
        <ul className="space-y-3">
            {tasks.map((task) => (
                <TaskItem 
                key={task.id}
                task={task}
                onToggleTask={onToggleTask}
                onDeleteTask={onDeleteTask}                
                />
            ))}
        </ul>
    )
}