import Footer from "@/components/Footer";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Lexend } from 'next/font/google'
import { ThresholdProvider } from "@/context/ThresholdContext";

const lexend = Lexend({
  subsets: ['latin'],
})

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={lexend.className}>
      <body>
        <ThresholdProvider>
          <Navbar/>
          <main>
            {children}
          </main>
          <Footer/>
        </ThresholdProvider>
      </body>
    </html>
  );
}
