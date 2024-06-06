import Link from 'next/link';
import data from '../../../data/data.json';

export default function Blog() {
  return (
    <div>
      <h2 className="text-4xl font-bold mb-8 text-center">Blog</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map(post => (
          <Link key={post.id} href={`/blog/${post.title.toLowerCase().split(' ').join('-')}`} className="block">
            <h3 className="text-2xl font-semibold mb-2">{post.title}</h3>
            <p className="text-gray-600">{post.description}</p>
            <p className="text-sm text-gray-500 mt-2">By {post.author} on {post.date}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
