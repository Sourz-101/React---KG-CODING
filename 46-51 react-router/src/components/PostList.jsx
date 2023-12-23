import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import { useLoaderData } from "react-router-dom";
// import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {
  // const { postList, fetching } = useContext(PostListData);

  const postList = useLoaderData();

  return (
    <>
      {/* {fetching && <LoadingSpinner />}
      {!fetching && postList.length === 0 && <WelcomeMessage />}
      {!fetching && postList.map((post) => <Post key={post.id} post={post} />)} */}

      {postList.length === 0 && <WelcomeMessage />}
      {postList.map((post) => <Post key={post.id} post={post} />)}
    </>
  );
};

export default PostList;

export const postLoader = () => {
   return fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
    .then((data) => {
      return data.posts;
    });
};
