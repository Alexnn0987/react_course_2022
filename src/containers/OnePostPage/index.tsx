import React from "react";
import { useParams, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import OnePost from "../../components/OnePost";
import { getPostsData } from "../../store/Posts/selectors";

const OnePostPage: React.FC = () => {
  const { id } = useParams();
  const data = useSelector(getPostsData);
  const post = data.find((el) => el.id === +id!);
  if (post) {
    return <OnePost post={post} />;
  }
  return <div>404</div>;
};

export default OnePostPage;
