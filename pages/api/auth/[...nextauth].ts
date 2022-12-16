import NextAuth from 'next-auth';
import "next-auth/jwt";

import TwitterProvider from "next-auth/providers/twitter";
import DiscordProvider from "next-auth/providers/discord";


export default NextAuth({
    providers: [
        TwitterProvider({
            clientId: process.env.NEXT_PUBLIC_TWITTER_CLIENT_ID!,
            clientSecret: process.env.NEXT_PUBLIC_TWITTER_CLIENT_SECRET_KEY!,
            version: "2.0"
        }),
        DiscordProvider({
            clientId: process.env.NEXT_PUBLIC_DISCORD_CLIENT_ID!,
            clientSecret: process.env.NEXT_PUBLIC_DISCORD_CLIENT_SECRET!
        })
    ],
    session: {
        strategy: "jwt",
    },
    callbacks: {
        async jwt({ token, account }) {

            if (account) {
                const { provider } = account;
                token.provider = provider;
                token.userid = account?.userId
            }

            return token;
        },
        async session({ session, token }) {
            const { provider } = token;

            let _session: Session = { ...session, userid: token.sub, provider: provider + "" };
            return _session;
        },
    },

    theme: {
        colorScheme: "light",
    },
    debug: true,


})


declare type ISODateString = string;
interface DefaultSession {
    user?: {
        name?: string | null;
        email?: string | null;
        image?: string | null;
    };
    expires: ISODateString;
}

interface Session extends DefaultSession {
    provider: string
    userid: string | undefined
}


