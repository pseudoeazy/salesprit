import { useEffect } from "react";
import type { AppProps } from "next/app";
import Router from "next/router";
import NProgress from "nprogress";
import { Outfit } from "next/font/google";
import { ChakraProvider } from "@chakra-ui/react";
import { SearchProvider } from "contexts/search/use-search";
import { CartProvider } from "contexts/cart/cart-provider";
import "assets/styles/globals.css";
import "assets/styles/nprogress.css"; // Import NProgress stylesheet here

export const inter = Outfit({
  subsets: ["latin"],
  display: "swap",
});

// Add NProgress loading indicator for page transitions
NProgress.configure({ showSpinner: false });
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Cleanup NProgress events on unmounting the component
    Router.events.off("routeChangeStart", () => NProgress.start());
    Router.events.off("routeChangeComplete", () => NProgress.done());
    Router.events.off("routeChangeError", () => NProgress.done());
  }, []);
  return (
    <ChakraProvider>
      <SearchProvider>
        <CartProvider>
          <div className={inter.className}>
            <Component {...pageProps} />
          </div>
        </CartProvider>
      </SearchProvider>
    </ChakraProvider>
  );
}
