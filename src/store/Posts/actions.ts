import { Dispatch } from "react";
import { PostsDataType } from "../../assets/data";
import makeRequest from "../../network";
import { FetchPostsDataActionType } from "./types";

export enum PostsActionsType {
  fetchPostsData = "FETCH_POST_DATA",
}

// export const fetchPostsDataAction = (data: PostsDataType) => {
//   return {
//     type: PostsActionsType.fetchPostsData,
//     payload: data,
//   };
// };

export const fetchPostsDataAction = () => {
  return async (dispatch: Dispatch<FetchPostsDataActionType>) => {
    const data = await makeRequest({ url: "posts" });
    dispatch({
      type: PostsActionsType.fetchPostsData,
      payload: data,
    });
  };
};
