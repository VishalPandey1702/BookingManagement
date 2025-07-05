import NextAuth from "next-auth"
import Google from "next-auth/providers/google"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  callbacks: {
    async signIn({ user }) {
      console.log("User email:", user.email)
      console.log("User name:", user.name)
      console.log("User image:", user.image)
      return true
    },
  },
})