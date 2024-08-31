import "./globals.css";
import localFont from "@next/font/local";
const Vazir = localFont({
  src: [
    {
      path: "../../public/Fonts/Vazir.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/Fonts/Vazir.ttf",
      weight: "400",
      style: "normal",
    },
  ],
});
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa">
      <head>
        <link rel="stylesheet" href="../Styles.css" />
      </head>

      <body className={Vazir.className}>{children}</body>
    </html>
  );
}
