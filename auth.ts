import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import authenticateOrCreateUser from "./app/api/main/AuthenticationAndAuthorization/authenticationandcreatinguser"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  callbacks: {
    async signIn({ user }) {
      console.log("User email:", user.email)
      console.log("User name:", user.name)
      console.log("User image:", user.image)
      if (!user.email || !user.name || !user.image) {
        console.error("Missing required user information")
        return false
      }
      const response = await authenticateOrCreateUser(
        user.email,
        user.name,
        user.image
      )
      if (response.status !== 200) {
        console.error("Error creating or authenticating user:", response.message)
        return false
      }
      console.log("User authenticated or created successfully:", response.data)
      // Optionally, you can store the user data in the session 
      return true
    },
  },
})