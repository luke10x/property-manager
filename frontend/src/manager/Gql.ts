export const LIST_GQL = `
  query {
    returnAllItems {
      id
      address
    }
  }
`;

export const ITEM_GQL = `
  query ($id: String!) {
    returnSingleItem(id: $id) {
      id
      type
      address
      bedrooms
    }
  }
`;

export const UPDATE_PROPERTY = `
  mutation ($id: String!, $input: ItemInput!) {
    updateItem(id: $id, input: $input) {
      id
      type
      address
      bedrooms
    }
  }
`;

