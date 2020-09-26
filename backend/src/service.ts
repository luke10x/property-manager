import { findAll, findOne, insertOne, replaceOne } from './db';
import { Item, ItemInput } from './types/Item';

export const getOne = async (id: string): Promise<Item> => {
  return await findOne(id);
};

export const getList = async (): Promise<Item[]> => {
  return await findAll();
};

export const create = async (details: ItemInput): Promise<Item> => {
  return await insertOne(details);
};

export const update = async (id: string, details: ItemInput): Promise<Item> => {
  return await replaceOne(id, details);
};
