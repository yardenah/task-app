export default function ServerInfo() {
    const currentTime = new Date().toLocaleString()

    return (
    <div className="rounded border border-blue-200 bg-blue-50 p-4">
      <h2 className="mb-2 text-xl font-semibold">Server Component Example</h2>
      <p>This component was rendered on the server.</p>
      <p className="mt-2">Rendered at: {currentTime}</p>
    </div>
  )
}