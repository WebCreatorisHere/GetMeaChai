import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/component/navbar"
import Footer from "@/app/component/footer"
import Sessionwrapperr from "./component/sessionwrapper";
import { GoogleAnalytics } from '@next/third-parties/google'


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Get me a chai - Fund your projects with chai",
  description: "Generated by Yash next app"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={` bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]`}>
        <Sessionwrapperr>
          <Navbar />
          <div className="min-h-[86.3vh] text-white bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]" >
            {children}
          </div>
          <Footer />
        </Sessionwrapperr>

      </body>
<GoogleAnalytics gaId="G-NWF08B7ERH" />
    </html>
  );
}
