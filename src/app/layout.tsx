import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Anthony Margherio — Systems & Endpoint Infrastructure Engineer",
  description:
    "Systems and Endpoint Infrastructure Engineer in Chicago specializing in Microsoft Intune, Entra ID, Azure Virtual Desktop (AVD), PowerShell/PSADT automation, and Model Context Protocol (MCP) tooling.",
  openGraph: {
    title: "Anthony Margherio — Systems & Endpoint Infrastructure Engineer",
    description:
      "Microsoft Intune, Entra ID, Azure Virtual Desktop (AVD), hybrid Linux/Windows infrastructure, and AI-assisted automation.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
        />
      </head>
      <body className="font-sans min-h-screen">{children}</body>
    </html>
  );
}
