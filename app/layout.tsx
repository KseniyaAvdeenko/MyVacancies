import type {Metadata} from "next";
import "./globals.css";
import Header from "@/components/Header";
import {cookies} from "next/headers";


export const metadata: Metadata = {
    title: "JobSearch",
};

export default async function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    const cookieStore = await cookies();
    const isAuthCookies = cookieStore.get('isAuth')
    const isAuth = isAuthCookies && isAuthCookies.value ? JSON.parse(isAuthCookies.value) : false

    return (
        <html lang="en">
        <body className={`bg-neutral-900 text-gray-100 h-screen overflow-y-auto`}>
        <Header isAuth={isAuth}/>
        {children}
        </body>
        </html>
    );
}
