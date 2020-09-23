import { findAll, findOne, insertOne, replaceOne } from './db';

export interface PropertyDetails {
  type: 'APARTMENT' | 'HOUSE';
  address: string;
  bedrooms: number;
}

export interface Property extends PropertyDetails {
  id: string;
}

export const getOne = async (id: string): Promise<Property> => {
  return await findOne(id);
};

export const getList = async (): Promise<Property[]> => {
  return await findAll();
};

export const create = async (details: PropertyDetails): Promise<Property> => {
  return await insertOne(details);
};

export const update = async (
  id: string,
  details: PropertyDetails,
): Promise<Property> => {
  return await replaceOne(id, details);
};
