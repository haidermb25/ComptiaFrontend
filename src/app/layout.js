import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer/Footer";
import TabBar from "@/components/shared/tabBar/tabBar";
import Button from "@/components/shared/buttons/Button";
import QuickLinksWrapper from "@/components/quickLinks/QuickLinksWrapper";


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
        <Header />
        <main className="flex-grow">
          {children}
          <TabBar tabs={array} />
          <Button value="Connect with us" />
        </main>
        <Footer />
         <QuickLinksWrapper />
    </body>
  </html>
);
}