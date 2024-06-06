import type { Metadata } from "next";
import "./globals.css";
import styles from './layout.module.css'
import Link from 'next/link'
import { headers } from "next/headers";

export const metadata: Metadata = {
  title: "FretNav",
  description: "Easily navigate the guitar fretboard with this interactive tool.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = headers();
  // read the custom x-url header
  const header_url = headersList.get('x-url') || "";
  
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/ect8fwn.css" />
      </head>
      <body>
        <div className={styles.header}>
          <a href="/">
            <div className={styles.header_logo}>
                <img src="/logo-icon-transparent.png" alt="logo" />
                <p>FretNav</p>
            </div>
          </a>
          <div className={styles.header_nav}>
            {header_url.includes("/blog") && <Link href="/app">App</Link>}
            {header_url.includes("/app") && <Link href="/blog">Blog</Link>}
            <Link href="/help">Help</Link>
            <button className={styles.header_button}>Go Pro</button>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
