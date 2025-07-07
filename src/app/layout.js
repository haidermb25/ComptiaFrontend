import "./globals.css";
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
      <body>
        <main className="min-h-screen">{children}</main>
        <TabBar tabs={array} />
        <Button value="Connect with us" />
      </body>
    </html>
  );
}
