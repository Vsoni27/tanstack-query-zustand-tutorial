"use server";

import prisma from "@/prisma/client";
import { PostSchema } from "../validationSchema";
import { z } from "zod";
import { revalidatePath } from "next/cache";

export async function FetchPost() {
  try {
    const posts = await prisma.post.findMany();

    // console.log("Posts Fetched: ", posts);
    return { success: true, data: posts };
  } catch (error: any) {
    // console.error("Error fetching the post", error);
    return { error: error.message };
  }
}

export async function CreatePost(data: z.infer<typeof PostSchema>) {
  try {
    const post = await prisma.post.create({
      data: {
        title: data.title,
        content: data.content,
      },
    });

    // console.log("Created post:", post);
    revalidatePath("/");
    return { success: true, data: post };
  } catch (error: any) {
    // console.error("Error creating post:", error);
    throw error;
  }
}
