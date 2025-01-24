import "./globals.css";
import Navbar from "../Navbar/Navbar";

export const metadata = {
  title: "Simple Blog",
  description: "Simple Blog page in NextJS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
