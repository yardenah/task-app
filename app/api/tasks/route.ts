import NextAuth from "next-auth";

let tasks = [
    {id: 1, text: "Buy milk", completed: false},
    {id: 2, text: "Clean the house", completed: false}
]

//GET /api/tasks
export async function GET() {
    return Response.json(tasks)
}

//POST /api/tasks
export async function POST (request: Request) {
    const body = await request.json()

    const newTask = {
        id: Date.now(),
        text: body.text,
        completed: false
    }

    tasks.push(newTask)

    return Response.json(tasks)
}

// PATCH /api/tasks
export async function PATCH(request: Request) {
    const body = await request.json()
    const taskId = body.id

    tasks = tasks.map((task) => task.id === taskId? {...task, completed: !task.completed}: task)

    return Response.json(tasks)
}

// DELETE /api/tasks
export async function DELETE(request: Request) {
    const body = await request.json()
    const taskId = body.id

    tasks = tasks.filter((task) => task.id !== taskId)

    return Response.json(tasks)
}