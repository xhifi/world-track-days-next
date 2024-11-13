import { sendRequest } from "@/utils/request";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "email", placeholder: "a@a.es", required: true },
        password: { label: "Password", type: "password", required: true },
      },
      async authorize(credentials) {
        if (!credentials || !credentials?.email || !credentials?.password) return null;

        const patchParams = {
          url: "v1/public/login",
          method: "POST",
          cache: false,
          body: { email: credentials.email, password: credentials.password },
        };

        const response = await sendRequest(patchParams);

        if (response.ok && response.body && response.body.token) {
          const userBD = response.body.object;
          const user = {
            token: response.body.token,
            user: userBD,
            name: userBD.name,
            email: userBD.email,
            sub: userBD.role,
          };

          return user;
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  // session: {
  //     strategy: 'jwt',
  // },
  callbacks: {
    async jwt({ token, user, session }) {
      if (user)
        return {
          ...token,
          ...user,
        };
      return token;
    },
    async session({ token, user, session }) {
      session.user = token;
      return session;
    },
  },
});

export { handler as GET, handler as POST };
