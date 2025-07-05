"use server";
import { auth } from "@/auth";


export default async function SessionData() {
  const session = await auth()
  console.log("Session data on server side:", session)

  if (!session?.user) return "no session found on server side"

  return session
}