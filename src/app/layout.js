import "./globals.css";
import "./fonts.css"
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

      <body>{children}</body>
    </html>
  );
}
