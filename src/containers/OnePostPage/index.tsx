import React from "react";
import { useParams, Navigate } from "react-router-dom";
import OnePost from "../../components/OnePost";
import data from "../../assets/data";

const OnePostPage: React.FC = () => {
  const { id } = useParams();
  const post = data.find((el) => el.id === +id!);
  if (post) {
    return <OnePost post={post} />;
  }
  return <Navigate to="/posts" />;
};

export default OnePostPage;
