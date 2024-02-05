// import necessary modules and styles
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import React from "react";

// Define font styles
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "EventHub - Your Ultimate Event Destination",
  description:
    "Discover and attend the best events with EventHub. From concerts to conferences, find exciting gatherings near you.",
  keywords: [
    "event hub",
    "events near me",
    "concerts",
    "conferences",
    "event planning",
  ],
};

// Define RootLayout component
const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body className={poppins.variable}>{children}</body>
    </html>
  );
};

export default RootLayout;
