import NextAuth from 'next-auth'
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from 'next-auth/providers/google'
import connectDB from '@/app/db/connectdb'
import User from '@/app/models/user'
// import connectDB from '@/app/db/connectdb.js'

export const authoptions = NextAuth({
  providers: [
    // OAuth authentication providers...
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      // Optional: set scope if you need more permissions
      scope: "read:user user:email",
      authorization: {
        params: {
          // This parameter forces GitHub to show the account selection screen
          prompt: 'login',
        },
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      await  connectDB()
      
        if (account.provider == "google") {
          
          const curruser = await User.findOne({ email: user.email })
          
          if (!curruser) {
            const newuser = new User({
              email: user.email,
              username: user.email.split("@")[0]
            })
            await newuser.save()
          }
          return true
  
        }
        if (account.provider == "github") {
          
          const curruser = await User.findOne({ email: user.email })
          
          if (!curruser) {
            const newuser = new User({
              email: user.email,
              username: user.email.split("@")[0]
            })
            await newuser.save()
          }
          return true
  
        }
  
      },
    async session({ session, user, keytoken }) {
    await  connectDB()
      let dbuser = await User.findOne({ email: session.user.email })
      session.user.name = dbuser.username
console.log(session.user.name)
      return session
    }
    
  }
})
export { authoptions as GET, authoptions as POST }