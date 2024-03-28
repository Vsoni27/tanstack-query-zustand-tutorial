import { FetchPost } from "@/lib/actions/PostsAction";
import PostForm from "@/components/Form/PostForm";
import Image from "next/image";
import PostsCard from "@/components/PostsCard";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

export default async function Home() {
  const PostData = await FetchPost();
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["posts"],
    queryFn: FetchPost,
  });

  return (
    <div className="flex flex-col justify-center items-center p-5">
      <h1 className="font-bold text-xl">Create Post</h1>

      <HydrationBoundary state={dehydrate(queryClient)}>
        <PostForm />
        <PostsCard />
      </HydrationBoundary>
    </div>
  );
}
