import { PostsDataType } from "../../assets/data";

export enum PostsActionsType {
  fetchPostsData = "FETCH_POST_DATA",
}

export const fetchPostsDataAction = (data: PostsDataType) => {
  return {
    type: PostsActionsType.fetchPostsData,
    payload: data,
  };
};
