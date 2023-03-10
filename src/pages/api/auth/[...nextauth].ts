import NextAuth, { type NextAuthOptions } from 'next-auth';
import SpotifyProvider from 'next-auth/providers/spotify';
// Prisma adapter for NextAuth, optional and can be removed
import { PrismaAdapter } from '@next-auth/prisma-adapter';

import { env } from '../../../env/server.mjs';
import { prisma } from '../../../server/db';
import { loginURL, refreshAccessToken } from '../../../utils/spotify';

export const authOptions: NextAuthOptions = {
  // Include user.id on session
  callbacks: {
    async jwt({ token, account, user }) {
      if (account?.access_token) {
        token.accessToken = account.access_token;
      }
      if (account?.refresh_token) {
        token.refreshToken = account.refresh_token;
      }
      if (user) {
        token.id = user.id;
      }
      return token;
    },

    async session({ session, user, token }) {
      if (session.user) {
        session.user.id = user.id;
      }

      // const refreshToken = token.refreshToken as string;

      // session = {
      //   ...session,
      //   user: {
      //     name: user.name,
      //     email: user.email,
      //     image: user.image,
      //     id: user.id,
      //   },
      // };

      return session;
    },
  },
  // Configure one or more authentication providers
  adapter: PrismaAdapter(prisma),
  providers: [
    SpotifyProvider({
      clientId: env.SPOTIFY_CLIENT_ID,
      clientSecret: env.SPOTIFY_CLIENT_SECRET,
    }),
    /**
     * ...add more providers here
     *
     * Most other providers require a bit more work than the Discord provider.
     * For example, the GitHub provider requires you to add the
     * `refresh_token_expires_in` field to the Account model. Refer to the
     * NextAuth.js docs for the provider you want to use. Example:
     * @see https://next-auth.js.org/providers/github
     */
  ],
  secret: env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/login',
  },
  // callbacks: {
  //   async jwt({ token, account, user }) {
  //     // throw error if no token
  //     if (!token) {
  //       throw new Error('No token');
  //     }

  //     // Add access token to the token right after initial signin
  //     if (account && user) {
  //       return {
  //         ...token,
  //         accessToken: account.accessToken,
  //         refreshToken: account.refreshToken,
  //         id: user.id,
  //         accessTokenExpires: account.expires_at! * 1000,
  //       };
  //     }
  //     // Return previous token if the access token has not expired yet
  //     if (!token.accessTokenExpires) {
  //       throw new Error('No token');
  //     }
  //     if (Date.now() < token.accessTokenExpires) {
  //       return token;
  //     }
  //     // Refresh the access token if it has expired
  //     console.log('Refreshing access token.....');
  //     return await refreshAccessToken(token);
  //   },

  //   session({ session, token, user }) {
  //     if(session.user) {
  //       session.user.id = token.id;
  //     }
  //     session.user.accessToken = token.accessToken;
  //     session.user.refreshToken = token.refreshToken;
  //     session.user.username = token.username;
  //     return session;
  //   },
  // },
};

export default NextAuth(authOptions);
