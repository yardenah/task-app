import ServerInfo from "../../components/ServerInfo"

export default function AboutPage() {
    return (
        <section className="mx-auto max-w-2xl p-10">
            <h1 className="mb-4 text-3xl font-bold">About This Project</h1>

            <p className="mb-4">
            This is a small Next.js App Router project built for interview practice.
            </p>

            <p className="mb-6">
                It includes React components, API routes, client-side state, and routing.
            </p>

            <ServerInfo />
        </section>
    )
}