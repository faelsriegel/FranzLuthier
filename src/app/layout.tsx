import type { Metadata } from "next";
import { Inter, Yellowtail } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const yellowtail = Yellowtail({
  variable: "--font-script",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Franz Luthier | Luthier em São Bento do Sul",
  description: "Franz Luthier em São Bento do Sul: regulagem, manutenção e customização de instrumentos de corda com atendimento local e envio para todo o Brasil.",
  keywords: [
    "luthier em São Bento do Sul",
    "luthier São Bento do Sul",
    "regulagem de guitarra São Bento do Sul",
    "manutenção de violão São Bento do Sul",
    "luthier em Santa Catarina",
    "Franz Luthier",
  ],
  icons: {
    icon: [
      { url: "/logo.png", type: "image/png" },
    ],
    apple: "/logo.png",
  },
  openGraph: {
    title: "Franz Luthier | Luthier em São Bento do Sul",
    description: "Regulagem, manutenção e customização de instrumentos com atendimento em São Bento do Sul e envio para todo o Brasil.",
    type: "website",
    locale: "pt_BR",
    siteName: "Franz Luthier",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "Logo Franz Luthier",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="light scroll-smooth">
      <body
        className={`${inter.variable} ${yellowtail.variable} font-sans antialiased`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
