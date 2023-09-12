// import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { globalStyles } from "@/stitches.config";
import StitchesRegistry from "./registry";

export const metadata: Metadata = {
  title: "SD Team",
  description: "-",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  globalStyles();
  return (
    <html lang="en">
      <body>
        <StitchesRegistry>{children}</StitchesRegistry>
      </body>
    </html>
  );
}
