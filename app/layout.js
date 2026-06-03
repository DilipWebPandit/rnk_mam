import "./globals.css";

export const metadata = {
  title: "RNK Legalheads – Proposal for Eva Ad Ventures",
  description:
    "Proposal & Practice Profile for Eva Ad Ventures Private Limited – Patent, Design, Trademark and Commercial Legal Support",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
