import "./globals.css";
import Header from "@/components/header"; // New header import
import Footer from "@/components/footer/Footer";
import TabBar from "@/components/shared/tabBar/tabBar";
import Button from "@/components/shared/buttons/Button";

export default function RootLayout({ children }) {
  const array = [
    "Overview",
    "Solution",
    "Getting Started Higher Ed",
    "Getting Start Secondary",
  ];
  
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Header /> {/* Added sticky header */}
        <main className="flex-grow">
          {children}
          <TabBar tabs={array} />
          <Button value="Connect with us" />
        </main>
        <Footer /> {/* Existing footer */}
      </body>
    </html>
  );
}