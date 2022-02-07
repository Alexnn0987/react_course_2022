import React from "react";
import { useNavigate } from "react-router-dom";
import { OnePostType } from "../../store/Posts/types";

type OnePostPropsType = {
  post: OnePostType;
};

const OnePost: React.FC<OnePostPropsType> = (props) => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const {
    post: { title, body },
  } = props;
  return (
    <div>
      <h1>{title}</h1>
      <pre>{body}</pre>
      <button type="button" onClick={goBack}>
        Назад
      </button>
    </div>
  );
};

export default OnePost;
