import type {Metadata} from "next";
import "./globals.css";
import Header from "@/components/Header";


export const metadata: Metadata = {
    title: "JobSearch",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={`bg-neutral-900 text-gray-100 h-screen overflow-y-auto`}>
        <Header/>
        {children}
        </body>
        </html>
    );
}
