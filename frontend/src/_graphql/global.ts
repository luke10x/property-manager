/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

/**
 * Possible types of an item
 */
export enum ItemType {
  APARTMENT = "APARTMENT",
  HOUSE = "HOUSE",
}

export interface ItemInput {
  type: ItemType;
  address: string;
  bedrooms: number;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
