import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from "type-graphql";

import "reflect-metadata";
import { ItemResolver } from './resolver/item-resolver';

export const createApollo = async () => {
  const schema = await buildSchema({
    resolvers: [ItemResolver],
    emitSchemaFile: true,
    validate: false,
  });
  
  return new ApolloServer({schema});
}