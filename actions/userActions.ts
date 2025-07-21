"use server";
import { eq, not } from "drizzle-orm";
import { revalidatePath } from "next/cache";

import { db } from "@/db/drizzle";

import { users } from "@/db/schema";

export const getAllUsers = async () => {
  const user = await db.select().from(users);
  return user;
};

export const getUser = async (userId:number) => {
 
  const user = await db.query.users.findMany({
   where:(users ,{ eq }) => eq(users.id, userId),
    with: {
      todos: true,

    },
  });
  return user;
  
};

export const addUser = async () => {
  await db.insert(users).values({
    name: "user1",
    email: "unair@gmail.com",
  
  });

  revalidatePath("/");
};

