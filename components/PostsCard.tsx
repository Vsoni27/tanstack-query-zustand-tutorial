"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useGetPosts } from "@/lib/data/get-post";
import { Post } from "@prisma/client";
import { FcLike } from "react-icons/fc";

export default function PostsCard() {
  const { data: posts, error, fetchStatus } = useGetPosts();
  console.log("posts on PostCard: ", posts);
  if (posts?.error)
    return (
      <h1 className="font-semibold text-md mt-6 mx-auto">
        Error: {posts?.error}
      </h1>
    );

  if (posts?.success)
    return (
      <div className="mt-5 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {posts?.data && posts.data.length > 0 ? (
          posts.data.map((post) => (
            <Card key={post.id}>
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-ellipsis overflow-hidden ...">
                  {post.content}
                </p>
              </CardContent>
              <CardFooter className="flex justify-between items-center mx-auto">
                <FcLike />
                <p>Likes: 0</p>
              </CardFooter>
            </Card>
          ))
        ) : (
          <h1 className="font-semibold text-lg mx-auto">No Post Created!!</h1>
        )}
      </div>
    );
}
