import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { Pool } from '@neondatabase/serverless';
import { hash, verify } from 'argon2';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const handler = NextAuth({
  secret: process.env.AUTH_SECRET,
  pages: {
    signIn: '/account/signin',
    signOut: '/account/logout',
  },
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    session({ session, token }) {
      if (token.sub) {
        session.user.id = token.sub;
      }
      return session;
    },
  },
  providers: [
    Credentials({
      id: 'credentials-signin',
      name: 'Credentials Sign in',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
        },
        password: {
          label: 'Password',
          type: 'password',
        },
      },
      authorize: async (credentials) => {
        const { email, password } = credentials;
        if (!email || !password) {
          return null;
        }
        if (typeof email !== 'string' || typeof password !== 'string') {
          return null;
        }

        // For now, return a mock user - adapter will be implemented separately
        return {
          id: '1',
          email,
          name: 'Test User',
        };
      },
    }),
    Credentials({
      id: 'credentials-signup',
      name: 'Credentials Sign up',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
        },
        password: {
          label: 'Password',
          type: 'password',
        },
        name: { label: 'Name', type: 'text' },
        image: { label: 'Image', type: 'text', required: false },
      },
      authorize: async (credentials) => {
        const { email, password, name, image } = credentials;
        if (!email || !password) {
          return null;
        }
        if (typeof email !== 'string' || typeof password !== 'string') {
          return null;
        }

        // For now, return a mock user - adapter will be implemented separately
        return {
          id: crypto.randomUUID(),
          email,
          name: typeof name === 'string' && name.length > 0 ? name : undefined,
          image: typeof image === 'string' && image.length > 0 ? image : undefined,
        };
      },
    }),
  ],
});

export { handler as GET, handler as POST };
