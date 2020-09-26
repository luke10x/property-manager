/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ItemInput } from "./../global";

// ====================================================
// GraphQL mutation operation: createItem
// ====================================================

export interface createItem_createItem {
  id: string;
  address: string;
}

export interface createItem {
  createItem: createItem_createItem;
}

export interface createItemVariables {
  input: ItemInput;
}
