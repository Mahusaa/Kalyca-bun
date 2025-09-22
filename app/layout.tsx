import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import Script from "next/script";
import "@/styles/globals.css";

import { type Metadata } from "next";
import { Poppins, Open_Sans } from "next/font/google";

export const metadata: Metadata = {
  title: "Kalyca Azzahra School - Everyone Deserves a Good Education",
  description: "Sekolah Islam Montessori di Depok dengan konsep Sekolah Alam, bilingual, Islami, aktif, kreatif, dan siap bekali anak keterampilan abad 21.",
  keywords: "Montessori school, inclusive education, Depok, West Java, bilingual education, technology integration, special needs, affordable education",
  authors: [{ name: "Kalyca Azzahra School" }],
  openGraph: {
    title: "Kalyca Azzahra School - Everyone Deserves a Good Education",
    description: "Inclusive Montessori school in Depok, West Java offering preschool to secondary education with technology integration, bilingual programs, and holistic character development.",
    type: "website",
    locale: "id_ID",
  },
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-open-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className={`${poppins.variable} ${openSans.variable}`}>
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-GMB0N6T9NG"
          strategy="afterInteractive"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-GMB0N6T9NG');
            `,
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
