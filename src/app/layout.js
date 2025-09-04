// app/layout.js
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer/Footer";
import TabBar from "@/components/shared/tabBar/TabBar";
import Button from "@/components/shared/buttons/Button";
import QuickLink from "@/components/quickLinks/QuickLink";
import ConditionalChatBot from "@/components/chatbot/ConditionalChatBot";

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
        <main className="flex-grow">{children}</main>
        <Footer />
        <QuickLink />
        <ConditionalChatBot />
      </body>
    </html>
  );
}
