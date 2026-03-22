import Link from "next/link";
import "./globals.css"

export const metadata = {
  title: "Task Manager",
  description: "Next.js project"
}

export default function RootLayout({
  children,
}: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="en">
      <body>
        <header className="border-b border-gray-200">
          <nav className="mx-auto flex max-w-4xl gap-6 p-4">
            <Link href="/" className="mx-auto flex max-w-4xl gap-6 p-4">
            HOME
            </Link>
            <Link href="/about" className="font-medium hover:underline" >
            About
            </Link>
          </nav>
        </header>

        <main>{children}</main>
      </body>
    </html>
  )
}