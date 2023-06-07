import { ApolloClient, InMemoryCache } from "@apollo/client";

export const apolloClient = new ApolloClient({
  uri: "https://api-balance-track.vercel.app/api/graphql",
  // uri: "http://localhost:4000/api/graphql",
  cache: new InMemoryCache(),
});
