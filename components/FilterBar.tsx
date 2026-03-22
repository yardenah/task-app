"use client"

type Filter = "all" | "active" | "completed"

type FilterBarProps = {
    currentFilter: Filter
    onChangeFilter: (filter: Filter) => void
}

export default function FilterBar({currentFilter, onChangeFilter}: FilterBarProps) {
    return (
        <div className="mb-6 flex gap-3">
      <button
        onClick={() => onChangeFilter("all")}
        className={`rounded px-4 py-2 ${
          currentFilter === "all"
            ? "bg-black text-white"
            : "bg-gray-200 text-black"
        }`}
      >
        All
      </button>

      <button
        onClick={() => onChangeFilter("active")}
        className={`rounded px-4 py-2 ${
          currentFilter === "active"
            ? "bg-black text-white"
            : "bg-gray-200 text-black"
        }`}
      >
        Active
      </button>

      <button
        onClick={() => onChangeFilter("completed")}
        className={`rounded px-4 py-2 ${
          currentFilter === "completed"
            ? "bg-black text-white"
            : "bg-gray-200 text-black"
        }`}
      >
        Completed
      </button>
    </div>
    )
}