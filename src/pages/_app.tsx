import "assets/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { Outfit } from "next/font/google";
import { SearchProvider } from "contexts/search/use-search";
import { CartProvider } from "contexts/cart/cart-provider";
// import "react-toastify/dist/ReactToastify.css";
// import "overlayscrollbars/overlayscrollbars.css";
// 1. Import the extendTheme function
import { extendTheme } from "@chakra-ui/react";

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  primary: "#003048",
  secondary: "#F67F20",
};

export const theme = extendTheme({ colors });

export const inter = Outfit({
  subsets: ["latin"],
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
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
