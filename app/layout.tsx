import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
import "./globals.css";
import Header from "./navigation/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "ArmProf - Web Programming, Graphic Design, SMM",
    description:
        "ArmProf specializes in teaching and creating web applications and services, shaping the future of the web city. Learn from experts in web programming, graphic design, and social media marketing (SMM).",
    keywords:
        "ArmProf, web programming, graphic design, SMM, web city, courses, training, web applications",
    openGraph: {
        title: "ArmProf",
        description:
            "Learn and create web applications and services with ArmProf, the experts in web programming, graphic design, and SMM.",
        url: "https://www.armprof.am",
        siteName: "ArmProf",
        images: [
            {
                url: "https://www.armprof.am/img/logo.png",
                width: 800,
                height: 600,
                alt: "ArmProf Logo",
            },
        ],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "ArmProf",
        description:
            "Learn and create web applications and services with ArmProf, the experts in web programming, graphic design, and SMM.",
        site: "@armprof",
        creator: "@armprof",
        images: [
            {
                url: "https://www.armprof.am/img/logo.png",
                alt: "ArmProf Logo",
            },
        ],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Header />
                {children}

            </body>
        </html>
    );
}
