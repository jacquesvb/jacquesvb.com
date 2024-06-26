import type { Metadata } from "next";
import { Inter, Fira_Code, Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import Provider from "@/app/utils/Provider";

// const inter = Inter({ subsets: ["latin"] });
const firaCode = Fira_Code({ subsets: ["latin"] });
const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jacques' Website",
  description: "Personal website of Jacques Van Blokland",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`
        ${firaCode.className}
        h-full 
        bg-amber-50 
        text-indigo-950 
        dark:bg-slate-950 
        dark:text-amber-50
        dark:selection:bg-purple-500
      `}>
        <Provider>
          <Navbar />
          <main className="mx-auto max-w-5xl px-6">
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
}
