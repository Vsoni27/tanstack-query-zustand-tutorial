import { z } from "zod";

export const PostSchema = z.object({
  title: z
    .string()
    .min(1, "Title must not be empty")
    .max(70, "Title can contain at most 70 characters"),
  content: z.string().min(1, "Content must not be empty"),
});

export const TaskSchema = z.object({
  title: z.string().min(1, "Title must not be empty"),
  description: z.string(),
});
