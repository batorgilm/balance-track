import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import { apolloClient } from "@/apollo";
import { Footer } from "@/components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={apolloClient}>
      <div className="container mx-auto p-4 md:px-0 mb-16">
        <Component {...pageProps} />
      </div>
      <Footer />
    </ApolloProvider>
  );
}
