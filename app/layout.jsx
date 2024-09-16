import "./globals.css";

export const metadata = {
  title: "InsightVest",
  description: "InsightVest is a platform for investors to gain insights into the stock market.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
