
export default function Page({ params }: { params: { id: string} }) {


  return (
    <article>
    
    </article>
  );
}

export async function generateStaticParams() {
  const posts = await fetch("https://jsonplaceholder.typicode.com/posts")
  const res = await posts.json()

  return res.map((post: any) => ({
    id:String(post.id),
  }));
}
