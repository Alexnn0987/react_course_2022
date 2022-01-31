import { PostsDataType } from "../assets/data";
import { PostsActionsType, UsersActionsType } from "./actions";

export type ReducerType = {
  posts: PostsDataType;
  user: UserType;
};

export type UserType = {
  lastName: string;
  firstName: string;
};

export type FetchPostsDataActionType = {
  type: PostsActionsType.fetchPostsData;
  payload: PostsDataType;
};

export type userRegistrationActionType = {
  type: UsersActionsType.userRegistration;
  payload: UserType;
};

export type ActionsType = FetchPostsDataActionType | userRegistrationActionType;
