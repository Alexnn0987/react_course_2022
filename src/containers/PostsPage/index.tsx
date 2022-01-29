import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import PostsList from "../../components/PostsLists";
import data from "../../assets/data";
import { fetchPostsDataAction } from "../../store/actions";

const PostsPage: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => dispatch(fetchPostsDataAction(data)), 5000);
  }, []);

  return <PostsList data={data} />;
};

export default PostsPage;
