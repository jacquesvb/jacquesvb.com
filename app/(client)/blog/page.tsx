import { client } from '@/sanity/lib/client';
import Header from '@/app/components/Header';
import { Post } from '@/app/utils/interface';
import PostComponent from '@/app/components/PostComponent';

async function getPosts() {
  const query = `
  *[_type == "post"] {
    title,
      slug,
      publishedAt,
      excerpt,
      tags[]-> {
        _id,
        slug,
        name
      }
  }
  `;
  const data = await client.fetch(query);
  return data;
}

export const revalidate = 60;

export default async function Blog() {
  const posts: Post[] = await getPosts();

  return (
    <div>
      <Header title="Articles" tags/>
      <div>
        {posts?.length > 0 && posts?.map((post) => (
          <PostComponent key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
}
