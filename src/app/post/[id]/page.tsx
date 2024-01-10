export default async function Page({ params }: { params: { id: string } }) {
  const post = await getData(params.id);

  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </article>
  );
}

export async function getData(id: string | number) {
  const posts = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      next: {
        revalidate: 120,  
      },
    }
  );
  const res = await posts.json();

  return res;
}
