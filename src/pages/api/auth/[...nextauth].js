import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import Facebook from 'next-auth/providers/facebook';

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  pages: {
    signIn: '/login',
  },
};

export default NextAuth(authOptions);
