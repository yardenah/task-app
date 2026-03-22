"use client"

import { useState, useEffect } from 'react';
import TaskForm from '@/components/TaskForm';
import TaskList from '@/components/TaskList';
import { task } from '../types/task';
import { fileURLToPath } from 'url';
import FilterBar from '@/components/FilterBar';

type Filter = "all" | "active" | "completed"

export default function Home() {
  const [tasks, setTasks] = useState<task[]>([]);
  const [filter, setFilter] = useState<Filter>("all");

  //Load tasks from api 
  useEffect(() => {
    fetch('/api/tasks')
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, []);

  async function handleAddTask(text: string) {
    const res = await fetch("/api/tasks", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({text})
    })

    const data = await res.json()
    setTasks(data)
  }

  async function handleToggleTask(id: number) {
    const res = await fetch("/api/tasks",{
      method: "PATCH",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({id}),
    })

    const data = await res.json()
    setTasks(data)
  }

  async function handleDeleteTask(id: number) {
    const res = await fetch("/api/tasks", {
      method: "DELETE",
      headers: {"content-type": "application/json"},
      body: JSON.stringify({id})
    })

    const data = await res.json()
    setTasks(data)
  }

  const filteredTask = tasks.filter((task) => {
    if (filter === 'active') {
      return !task.completed
    }
    if (filter === 'completed') {
      return task.completed
    }
    return true
  })

  return (
    <main className="mx-auto max-w-2xl p-10">
      <h1 className="mb-6 text-3xl font-bold">Task Manager</h1>

      <TaskForm onAddTask={handleAddTask} />

      <FilterBar currentFilter ={filter} onChangeFilter={setFilter}/>

      <TaskList
        tasks={filteredTask}
        onToggleTask={handleToggleTask}
        onDeleteTask={handleDeleteTask}
      />
    </main>
  );
}
