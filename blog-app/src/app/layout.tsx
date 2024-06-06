import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blog Application",
  description: "A blog application built with Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="py-4">
          <div className="container flex justify-between items-center">
            <h1 className="text-3xl font-bold">Blog Application</h1>
            <nav>
              <ul className="flex space-x-4">
                <li><Link href="/" className="nav-link">Home</Link></li>
                <li><Link href="/about" className="nav-link">About</Link></li>
                <li><Link href="/blog" className="nav-link">Blog</Link></li>
              </ul>
            </nav>
          </div>
        </header>
        <main className="container my-8">
          {children}
        </main>
        <footer>
          <div className="container">
            <p>&copy; 2024 Blog Application. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
