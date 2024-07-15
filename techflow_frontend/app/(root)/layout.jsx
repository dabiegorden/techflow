import { Inter } from "next/font/google";
import "../globals.css";
import Leftsidebar from "@/components/Leftsidebar";
import Rightsidebar from "@/components/Rightsidebar";
import Topbar from "@/components/Topbar";
import Bottombar from "@/components/Bottombar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TechFlow",
  description: "Creating a techflow to make coding easiar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Topbar />

        <main className="flex flex-row">
          <Leftsidebar />
          <section className="main-container">
            <div className="w-full max-w-4xl">{children}</div>
          </section>
          <Rightsidebar />
        </main>

        <Bottombar />
      </body>
    </html>
  );
}
