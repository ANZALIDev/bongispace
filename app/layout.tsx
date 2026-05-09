import "./globals.css";

export const metadata = {
  title: "BONGISPACE",
  description: "Studio créatif digital"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
