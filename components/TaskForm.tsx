'use client';

import { FormEvent, useState } from 'react';

type TaskFormProps = {
  onAddTask: (text: string) => void;
};

export default function TaskForm({ onAddTask }: TaskFormProps) {
  const [text, setText] = useState('');

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const trimmedText = text.trim();
    if (!trimmedText) {
      return;
    }

    onAddTask(trimmedText);
    setText('');
  }

  return (
    <form onSubmit={handleSubmit} className="mb-6 flex gap-3">
      <input
        type="text"
        placeholder="Enter a new task"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="flex-1 rounded border border-gray-300 px-4 py-2 outline-none"
      />

      <button type="submit" className="rounded bg-black px-4 py-2 text-white">
        Add
      </button>
    </form>
  );
}
