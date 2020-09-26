import gql from 'graphql-tag';
import { print } from 'graphql/language/printer';

export const ALL_ITEMS_QUERY = print(gql`
  query AllItemsQuery {
    returnAllItems {
      id
      address
    }
  }
`);

export const SINGLE_ITEM_QUERY = print(gql`
  query SingleItemQuery($id: String!) {
    returnSingleItem(id: $id) {
      id
      type
      address
      bedrooms
    }
  }
`);

export const UPDATE_ITEM_MUTATION = print(gql`
  mutation UpdateItemMutation($id: String!, $input: ItemInput!) {
    updateItem(id: $id, input: $input) {
      id
      type
      address
      bedrooms
    }
  }
`);

export const CREATE_ITEM_MUTATION = print(gql`
  mutation CreateItemMutation($input: ItemInput!) {
    createItem(input: $input) {
      id
      address
    }
  }
`);
