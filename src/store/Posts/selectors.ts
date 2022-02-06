import { RootReducerType } from "../types";

export const getPostsData = (state: RootReducerType) => state.posts.posts;
