"use client";
import "../styles/globals.css";
import "../styles/leaflet.css";
import { Inter } from "next/font/google";
import { AuthenticationContextProvider } from "../Store/Authentication-context";
const inter = Inter({ subsets: ["latin"] });
import Notifications from "../components/Notification/Notifications";
import { NotificationContextProvider } from "../Store/Notification-context";
import Footer from "../components/Footer";
import Script from "next/script";
import Navbar from "../components/Navbar";
import ChatBot from "../components/chatBot/ChatBot";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <link rel="icon" href="/logo1.jpeg" sizes={"any"} /> */}
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <body className={inter.className}>
        <NotificationContextProvider>
          <AuthenticationContextProvider>
            <Navbar />
            <Notifications />
            {children}
            <ChatBot />
            <Footer />
          </AuthenticationContextProvider>
        </NotificationContextProvider>
        <Script />
      </body>
    </html>
  );
}
