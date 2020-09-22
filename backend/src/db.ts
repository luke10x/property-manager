import { MongoClient, ObjectId } from 'mongodb';
import { Property, PropertyDetails } from './service';

export const loadDb = async () => {
  const dbUrl = process.env.DB_URL;
  if (dbUrl === undefined) {
    console.error('DB_URL is undefined');
  }

  const mongoClientPromise = MongoClient.connect(dbUrl as string).catch(
    (e: Error) => {
      console.log('Cannot connect to database ' + dbUrl, e);
    },
  );
  const client = (await mongoClientPromise) as MongoClient;

  return client.db('propman');
};

export const findAll = async (): Promise<Array<any>> => {
  const db = await loadDb();
  const records = await db
    .collection('properties')
    .find({})
    .sort({ code: -1 })
    .toArray();
  
  return records.map((data: any) => {
    return {
      id: data._id,
      address: data.address,
      type: data.type,
      bedrooms: data.bedrooms,
    }
  });
};

export const findOne = async (id: string): Promise<Property> => {
  const db = await loadDb();
  const data = await db.collection('properties').findOne({
    _id: new ObjectId(id)
  });
  return {
    id: data._id,
    address: data.address,
    type: data.type,
    bedrooms: data.bedrooms,
  };
};

export const insertOne = async (newEntry: PropertyDetails): Promise<Property> => {
  const db = await loadDb();
  const collection = db.collection('properties');
  const result = collection.insertOne(newEntry);
  return {
    id: (await result).insertedId,
    ...newEntry
  };
};

export const replaceOne = async (id: string, details: PropertyDetails): Promise<Property> => {
  const db = await loadDb();
  const collection = db.collection('properties');
  const result = collection.replaceOne(
    { _id: new ObjectId(id) },
    details,
  );
  console.log('rex', result);
  return {
    id,
    ...details,
  }
};
