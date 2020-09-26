/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ItemInput } from "./../global";

// ====================================================
// GraphQL mutation operation: CreateItemMutation
// ====================================================

export interface CreateItemMutation_createItem {
  id: string;
  address: string;
}

export interface CreateItemMutation {
  createItem: CreateItemMutation_createItem;
}

export interface CreateItemMutationVariables {
  input: ItemInput;
}
