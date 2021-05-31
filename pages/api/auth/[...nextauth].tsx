import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

export default NextAuth({
  providers: [
    // OAuth authentication providers...
    Providers.Discord({
      clientId: process.env.DISCORDID,
      clientSecret: process.env.DISCORDKEY
    })
  ],
  // Optional SQL or MongoDB database to persist users
  database: process.env.DATABASE_URL
})