import type { Metadata } from "next";
import { Inter, Yellowtail } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.franzluthier.com';
const socialPreviewImage = `${siteUrl}/logoFranzLuthier.png`;

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
    default: "Franz Luthier | Luthier em São Bento do Sul",
    template: "%s | Franz Luthier",
  },
  applicationName: "FranzLuthier",
  description: "Franz Luthier em São Bento do Sul: regulagem, manutenção e customização de instrumentos de corda com atendimento local e envio para todo o Brasil.",
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
    title: "Franz Luthier | Luthier em São Bento do Sul",
    description: "Regulagem, manutenção e customização de instrumentos com atendimento em São Bento do Sul e envio para todo o Brasil.",
    url: siteUrl,
    type: "website",
    locale: "pt_BR",
    siteName: "Franz Luthier",
    images: [
      {
        url: socialPreviewImage,
        width: 432,
        height: 432,
        alt: "Logo Franz Luthier",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Franz Luthier | Luthier em São Bento do Sul",
    description: "Regulagem, manutenção e customização de instrumentos com atendimento em São Bento do Sul e envio para todo o Brasil.",
    images: [socialPreviewImage],
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
