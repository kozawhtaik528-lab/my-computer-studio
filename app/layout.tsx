import "./globals.css";

export const metadata = {
  title: "My Computer Studio Training",
  description: "Free Computer Training for Myanmar Youth",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>
        <nav
          style={{
            width: "100%",
            padding: "15px 30px",
            background: "#000",
            color: "#fff",
            fontSize: "20px",
          }}
        >
          My Computer Studio
        </nav>

        {children}

        <footer
          style={{
            marginTop: "40px",
            padding: "15px",
            textAlign: "center",
            background: "#f0f0f0",
          }}
        >
          © 2025 My Computer Studio – All rights reserved
        </footer>
      </body>
    </html>
  );
}
