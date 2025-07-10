import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer/Footer";
import TabBar from "@/components/shared/tabBar/tabBar";
import Button from "@/components/shared/buttons/Button";
import QuickLink from "@/components/quickLinks/QuickLink";
import ChatBot from "@/components/chatbot/ChatBot";
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
        <QuickLink />
        <ChatBot />
      </body>
    </html>
  );
}
