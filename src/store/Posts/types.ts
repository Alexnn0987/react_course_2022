import { PostsActionsType } from "./actions";

export type ReducerType = {
  posts: OnePostType[];
};

export type OnePostType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type FetchPostsDataActionType = {
  type: PostsActionsType.fetchPostsData;
  payload: OnePostType[];
};

export type ActionsType = FetchPostsDataActionType;
