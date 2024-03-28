import { FetchPost } from "../actions/PostsAction";
import { useQuery } from "@tanstack/react-query";

export function useGetPosts() {
  return useQuery({
    queryKey: ["posts"],
    queryFn: async () => FetchPost(),
    // refetchInterval: 1000,
  });
}
