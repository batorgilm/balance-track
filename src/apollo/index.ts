import { NextApiHandler } from "next";
import { ApolloServer } from "apollo-server-micro";
import { schema } from "../../generated/graphql"; // Replace with the correct import path

const apolloServer = new ApolloServer({
  schema,
});

const handler: NextApiHandler = apolloServer.createHandler({
  path: "/api/graphql",
});

export default handler;
