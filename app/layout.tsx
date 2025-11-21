import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "My Computer Studio & Training",
  description: "Free Computer Training for Myanmar Youth",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          padding: 0,
          fontFamily: "sans-serif",
          background: "#fefeffff",
        }}
      >
        {/* ----------- NAVBAR ----------- */}
        <nav
          style={{
            width: "100%",
            padding: "15px 20px",
            background: "#000",
            color: "#f3f3f3ff",
            fontSize: "30px",
            fontWeight: "bold",
            position: "sticky",
            top: 0,
            zIndex: 50,
          }}
        >
          My Computer Studio & Training
        </nav>

        {/* ----------- PAGE CONTENT ----------- */}
        <main
          style={{
            width: "100%",
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "15px 20px",
            minHeight: "70vh",
          }}
        >
          {children}
        </main>

        {/* ----------- FOOTER ----------- */}
        <footer
          style={{
            marginTop: "40px",
            padding: "15px",
            textAlign: "center",
            background: "#f0f0f0",
            fontSize: "14px",
          }}
        >
          © 2025 My Computer Studio & Training – All rights reserved
        </footer>
      </body>
    </html>
  );
}
