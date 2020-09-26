import gql from 'graphql-tag';
import { print } from 'graphql/language/printer';

export const LIST_GQL = print(gql`
  query allItems{
    returnAllItems {
      id
      address
    }
  }
`);

export const ITEM_GQL = print(gql`
  query singleItem($id: String!) {
    returnSingleItem(id: $id) {
      id
      type
      address
      bedrooms
    }
  }
`);

export const UPDATE_PROPERTY = print(gql`
  mutation updateItem($id: String!, $input: ItemInput!) {
    updateItem(id: $id, input: $input) {
      id
      type
      address
      bedrooms
    }
  }
`);

export const CREATE_PROPERTY = print(gql`
  mutation createItem($input: ItemInput!) {
    createItem(input: $input) {
      id
      address
    }
  }
`);

