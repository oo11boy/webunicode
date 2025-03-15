import "./globals.css";
import "./fonts.css"
import "./icons.css";
import FloatingContact from "@/Components/LandingPageComponents/FloatingContact";
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa">
      <head>
        <link rel="stylesheet" href="../Styles.css" />
        <meta name="enamad" content="12184300" /> 
        <meta name="google-site-verification" content="uaZQCkjdDH-yvDQJPE3SO7AogbkddpyjuLDdw_HuGCU" />
      </head>

      <body>{children}
      <div dir="rtl">
      <FloatingContact />
      </div>
      </body>
    </html>
  );
}
