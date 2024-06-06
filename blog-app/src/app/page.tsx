import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h2 className="text-4xl font-bold mb-8 text-center">Welcome to the Blog Application</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Link href="/about" className="block">
          <h3 className="text-2xl font-semibold mb-2">About</h3>
          <p>Learn more about this blog application.</p>
        </Link>
        <Link href="/blog" className="block">
          <h3 className="text-2xl font-semibold mb-2">Blog</h3>
          <p>Read our latest blog posts.</p>
        </Link>
      </div>
    </div>
  );
}
