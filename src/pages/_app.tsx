import type { AppProps } from "next/app";
import "src/styles/tailwind.css";
import "animate.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
