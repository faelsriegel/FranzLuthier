import type { Metadata } from "next";
import { Inter, Yellowtail } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'https://franzluthier.vercel.app');

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
  metadataBase: new URL(siteUrl),
  title: {
    default: "Franz Luthier – Regulagem, Manutenção e Customização",
    template: "%s | Franz Luthier",
  },
  applicationName: "FranzLuthier",
  description: "Serviços de luthier profissional em São Bento do Sul: regulagens, manutenção e customização de instrumentos de corda com acabamento técnico.",
  keywords: [
    "luthier em São Bento do Sul",
    "luthier São Bento do Sul",
    "regulagem de guitarra São Bento do Sul",
    "manutenção de violão São Bento do Sul",
    "luthier em Santa Catarina",
    "Franz Luthier",
    "luthier para guitarra",
    "regulagem de violão",
    "setup de instrumento",
  ],
  authors: [{ name: "Franz Luthier" }],
  creator: "Franz Luthier",
  publisher: "Franz Luthier",
  category: "music",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  manifest: "/favicon/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon/favicon.ico", type: "image/x-icon" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: ["/favicon/favicon.ico"],
    apple: "/favicon/apple-touch-icon.png",
  },
  openGraph: {
    title: "Franz Luthier – Luthier Profissional",
    description: "Serviços completos de regulagem, manutenção e customização de instrumentos.",
    url: siteUrl,
    type: "website",
    locale: "pt_BR",
    siteName: "Franz Luthier",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Franz Luthier",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Franz Luthier – Luthier Profissional",
    description: "Serviços completos de regulagem, manutenção e customização de instrumentos.",
    images: ["/twitter-image"],
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
    canonical: siteUrl,
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
