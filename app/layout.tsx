import Footer from "@/components/Footer";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Tinos } from 'next/font/google'
import { ThresholdProvider } from "@/context/ThresholdContext";

const inter = Tinos({
  subsets: ['latin'],
  weight: "400"
})

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.className}>
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
