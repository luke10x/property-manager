import { ApolloServer, gql } from 'apollo-server-express';
import { getOne, getList, create, update } from './service';

const typeDefs = gql`
  type Query {
    getProperty(id: String!, input: PropertyInput): Property
    getAllProperties: [Property]
  }
  type Mutation {
    createProperty(input: PropertyInput): Property
    updateProperty(id: String!, input: PropertyInput): Property
  }
  input PropertyInput {
    type: PropertyType
    address: String
    bedrooms: Int
  }
  type Property {
    id: String!
    type: PropertyType
    address: String
    bedrooms: Int
  }
  enum PropertyType {
    APARTMENT
    HOUSE
  }
`;

const getProperty = (_parent: any, args: { id: string }) => {
  console.log('🥳 GET ONE');
  return getOne(args.id);
};
const getAllProperties = () => {
  console.log('🦄 GET ALL');
  return getList();
};
const createProperty = (_parent: any, args: { input: any }) => {
  console.log('🎉 CREATE');
  return create(args.input);
};
const updateProperty = (_parent: any, args: { id: string; input: any }) => {
  console.log('🎊 UPDATE');
  return update(args.id, args.input);
};

const resolvers = {
  Query: {
    getProperty,
    getAllProperties,
  },
  Mutation: {
    createProperty,
    updateProperty,
  },
};

export const apollo = new ApolloServer({
  typeDefs,
  resolvers,
});
