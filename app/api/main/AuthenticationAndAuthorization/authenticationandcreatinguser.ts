"use server";
import { PrismaClient } from "@/generated/prisma"

const prisma = new PrismaClient()

export default async function authenticateOrCreateUser(
  email: string,
  fullName: string,
  imageUrl?: string
) {
  try {
    if (!email || !fullName || !imageUrl) {
      return {
        status: 400,
        message: "Missing required fields.",
      };
    }

    // Check if the user already exists

    let user = await prisma.user.findUnique({
      where: { user_email: email },
    });

    // If user does not exist, create a new user
    if (!user) {
      user = await prisma.user.create({
        data: {
          user_email: email,
          user_full_name: fullName,
          user_image_url: imageUrl || null,
          user_role_id:3
        },
      });
    }

    return {
      status: 200,
      data: user,
    };
  } catch (error) {
    console.error("Error in authenticateOrCreateUser:", error);
    return {
      status: 500,
      message: "An error occurred while authenticating or creating the user.",
    };
  }
}
