import "@/styles/globals.css";
import type { AppProps } from "next/app";

import localFont from "next/font/local";
export const monument = localFont({
  src: "../fonts/EduMonumentGroteskVariable.woff2",
  variable: "--font-monument",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div
      className={`${monument.variable} font-sans flex flex-col min-h-screen`}
    >
      <Component {...pageProps} />
    </div>
  );
}
