"use client";
import { useEffect } from "react";
import "./main.css";
import { dataFetch } from "./utils/dataFetch";
import { Post } from "./components/post/post";
import { useAppSelector, useAppDispatch } from "@/store.ts/store";
import { shallowEqual } from "react-redux";
import { setPosts } from "@/store.ts/reducers/postsReducer";

export default function Home() {
  const posts = useAppSelector((state) => state.posts.usersPosts, shallowEqual);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!posts) {
      dataFetch({
        url: "https://jsonplaceholder.typicode.com/posts?limit=5",
        dispatch: dispatch,
        action: setPosts,
        type: "set state",
        revalidate: { status: false, delay: 0 },
      });
    }
  }, [posts]);

  console.log("render");
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
