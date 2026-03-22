'use client';

import { task } from '@/types/task';

type TaskItemProps = {
  task: task;
  onToggleTask: (id: number) => void;
  onDeleteTask: (id: number) => void;
};

export default function TaskItem({
  task,
  onToggleTask,
  onDeleteTask,
}: TaskItemProps) {
  return (
    <li className="flex items-center justify-between rounded border border-gray-200 p-3">
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggleTask(task.id)}
        />

        <span className={task.completed ? 'line-through text-gray-500' : ''}>
          {task.text}
        </span>
      </div>
      <button
        onClick={() => onDeleteTask(task.id)}
        className="rounded bg-red-500 px-3 py-1 text-white"
      >
        Delete
      </button>
    </li>
  );
}
