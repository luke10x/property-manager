/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ItemInput } from "./../global";

// ====================================================
// GraphQL mutation operation: updateItem
// ====================================================

export interface updateItem_updateItem {
  id: string;
  type: string;
  address: string;
  bedrooms: number;
}

export interface updateItem {
  updateItem: updateItem_updateItem;
}

export interface updateItemVariables {
  id: string;
  input: ItemInput;
}
