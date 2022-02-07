import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostsList from "../../components/PostsLists";
import { fetchPostsDataAction } from "../../store/Posts/actions";
import { getPostsData } from "../../store/Posts/selectors";

const PostsPage: React.FC = () => {
  const dispatch = useDispatch();
  const data = useSelector(getPostsData);

  useEffect(() => {
    dispatch(fetchPostsDataAction());
  }, []);

  return <PostsList data={data} />;
};

export default PostsPage;
