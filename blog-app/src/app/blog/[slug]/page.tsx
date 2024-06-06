import { useParams } from 'next/navigation';
import data from '../../../../data/data.json';
import Head from 'next/head';

export default function BlogPost() {
  const params = useParams();
  const slug = params.slug;
  const post = data.find(post => post.title.toLowerCase().split(' ').join('-') === slug);

  if (!post) return <div>Post not found</div>;

  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.description} />
      </Head>
      <div className="prose lg:prose-xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-600 mb-4">{post.description}</p>
        <p className="text-sm text-gray-500">By {post.author} on {post.date}</p>
      </div>
    </>
  );
}
