import type { Metadata } from "next";
import Script from "next/script";
import { APP_NAME, BASE_URL } from "@/lib/config";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "800", "900"],
});
export const metadata: Metadata = {
  title: `${APP_NAME} | Best Trucking Dispatch Service USA`,
  description: "experience of more than 5 years, we make sure that the net revenues of our owner-operators and fleets increase by at least 20% every year by providing them with a good value load.",
  verification: {
    google: "qgjKFTLBzz-5_x3q36cjiaUxa6Wqt2jh5HyqZlvjFdU",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: `${APP_NAME} | Best Trucking Dispatch Service USA`,
    description: "experience of more than 5 years, we make sure that the net revenues of our owner-operators and fleets increase by at least 20% every year by providing them with a good value load.",
    url: `${BASE_URL}`,
    siteName: `${APP_NAME}`,
    images: [
      {
        url: `${BASE_URL}/about-us1.1.jpg`,
        width: 1200,
        height: 630,
      },
    ],
    locale: "en-CA",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: `${APP_NAME} | Best Trucking Dispatch Service USA`,
    description: "experience of more than 5 years, we make sure that the net revenues of our owner-operators and fleets increase by at least 20% every year by providing them with a good value load.",
    images: [`${BASE_URL}/about-us1.1.jpg`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager Script */}
        <Script id="gtm-script" strategy="beforeInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PDVGJZWP');
          `}
        </Script>
      </head>
      <body className={`${roboto.variable} bg-white`}>
        {/* Google Tag Manager (noscript) fallback */}
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PDVGJZWP" height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe>
        </noscript>
        
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}