import { API } from "@api";
import { Post } from "./types";

const path = 'https://jsonplaceholder.typicode.com/todos';

export const PostsService = {
  getAll: async  () => {
    const res = await API(path);

    return res;
  },
  create: async  (newPost: Post) => {
    const res = await API(path, {
      method: 'POST',
      body: JSON.stringify(newPost),
    });

    return res;
  },
}
