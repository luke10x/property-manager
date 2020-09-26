/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: singleItem
// ====================================================

export interface singleItem_returnSingleItem {
  id: string;
  type: string;
  address: string;
  bedrooms: number;
}

export interface singleItem {
  returnSingleItem: singleItem_returnSingleItem;
}

export interface singleItemVariables {
  id: string;
}
