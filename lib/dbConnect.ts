import { Db, MongoClient, MongoClientOptions, ObjectId } from 'mongodb';
import { NextApiRequest } from 'next';
import { NumViews } from 'lib/types';

const { MONGODB_URI = '', MONGODB_DB = '' } = process.env;

if (MONGODB_URI === '') {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  );
}

if (MONGODB_DB === '') {
  throw new Error(
    'Please define the MONGODB_DB environment variable inside .env.local'
  );
}

interface CachedMongo {
  client: MongoClient;
  db: Db;
}

interface MongoGlobal {
  conn: CachedMongo | null;
  promise: Promise<CachedMongo> | null;
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
// @ts-expect-error
let cached = global.mongo as unknown as MongoGlobal;

if (!cached) {
  // @ts-expect-error
  cached = global.mongo = { conn: null, promise: null };
}

export async function connectToDatabase(): Promise<{ db: Db }> {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts: MongoClientOptions = {};

    cached.promise = MongoClient.connect(MONGODB_URI, opts).then((client) => {
      return {
        client,
        db: client.db(MONGODB_DB)
      };
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export const NumViewsDao = {
  async getTotal() {
    const { db } = await connectToDatabase();
    const docArray = await db
      .collection<NumViews>('views')
      .find()
      .project({ _id: 0, count: 1 })
      .toArray();

    let total = 0;

    for (let doc of docArray) {
      total += doc.count;
    }

    return total;
  },

  async getBySlug(slug: string) {
    const { db } = await connectToDatabase();
    const docArray = await db
      .collection<NumViews>('views')
      .findOne({ _id: slug });
    return docArray;
  },

  async upsertBySlug(slug: string) {
    const { db } = await connectToDatabase();
    const result = await db.collection<NumViews>('views').findOneAndUpdate(
      { _id: slug },
      {
        $inc: {
          count: 1
        }
      },
      {
        upsert: true // Update || Insert
      }
    );

    return {
      success: result.ok,
      count: result.value?.count
    };
  }
};
