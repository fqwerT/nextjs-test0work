"use client";
import { useState, useEffect } from "react";
import "./main.css";
import { dataFetch } from "./utils/dataFetch";
import { Post } from "./components/post/post";

interface PostsProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}
export default function Home() {
  const [posts, setPosts] = useState<null | PostsProps[]>(null);

  useEffect(() => {
    if (posts === null) {
      const fetchData = async () => {
        const response = await dataFetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setPosts(response);
      };
      fetchData();
    }
  }, [posts]);

  return (
    <div className="app">
      {posts ? (
        posts.map((item) => (
          <Post
            key={item.id}
            title={item.title}
            id={item.id}
            body={item.body}
            
          />
        ))
      ) : (
        <p>пусто</p>
      )}
    </div>
  );
}
