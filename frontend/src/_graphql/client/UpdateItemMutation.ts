/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ItemInput, ItemType } from "./../global";

// ====================================================
// GraphQL mutation operation: UpdateItemMutation
// ====================================================

export interface UpdateItemMutation_updateItem {
  id: string;
  type: ItemType;
  address: string;
  bedrooms: number;
}

export interface UpdateItemMutation {
  updateItem: UpdateItemMutation_updateItem;
}

export interface UpdateItemMutationVariables {
  id: string;
  input: ItemInput;
}
