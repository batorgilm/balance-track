import type { AppProps } from "next/app";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

export const apolloClient = new ApolloClient({
  uri: "https://api-balance-track.vercel.app/api/graphql",
  cache: new InMemoryCache(),
});
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />;
    </ApolloProvider>
  );
}
