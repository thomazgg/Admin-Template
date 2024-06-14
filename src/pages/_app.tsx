import "@/styles/globals.css";
import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import { AppProvider } from "@/data/content/AppContext";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <AppProvider>
            <Component {...pageProps} />;
        </AppProvider>
    )
}