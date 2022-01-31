import { PostsDataType } from "../assets/data";
import { UserType } from "./types";

/* eslint-disable no-unused-vars */
export enum PostsActionsType {
  fetchPostsData = "FETCH_POST_DATA",
}

export enum UsersActionsType {
  userRegistration = "USER_REGISTRATION",
}

export const fetchPostsDataAction = (data: PostsDataType) => {
  return {
    type: PostsActionsType.fetchPostsData,
    payload: data,
  };
};

export const userRegistrationAction = (user: UserType) => {
  const editUser = {
    lastNAme: user.lastName.toLocaleLowerCase(),
    firstName: user.firstName.toLocaleLowerCase(),
  };
  return {
    type: UsersActionsType.userRegistration,
    payload: editUser,
  };
};
