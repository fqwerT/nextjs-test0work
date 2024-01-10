
'use client'
import "./style.css";
import Link from "next/link";

interface PostProps {
    title: string;
    id: number;
    body: string;
  }
export const Post: React.FC<PostProps> = ({ title, id, body }) => {
  return (
    <article id={String(id)} className="card">
      <h5>{title}</h5>
      <p>{body}</p>
      <Link href={`/post/${id}`} style={{color:'lightblue'}}>подробнее...</Link>
    </article>
  );
};
