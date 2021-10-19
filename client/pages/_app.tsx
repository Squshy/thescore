import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
// import { RushesProvider } from "../contexts/RushesContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // <RushesProvider>
    <Component {...pageProps} />
    // </RushesProvider>
  );
}
export default MyApp;
