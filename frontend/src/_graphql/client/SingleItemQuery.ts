/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ItemType } from "./../global";

// ====================================================
// GraphQL query operation: SingleItemQuery
// ====================================================

export interface SingleItemQuery_returnSingleItem {
  id: string;
  type: ItemType;
  address: string;
  bedrooms: number;
}

export interface SingleItemQuery {
  returnSingleItem: SingleItemQuery_returnSingleItem;
}

export interface SingleItemQueryVariables {
  id: string;
}
