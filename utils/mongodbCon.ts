// import { MongoClient } from 'mongodb'

// if (!process.env.MONGODB_URI) {
//   throw new Error('Invalid/Missing environment variable: "MONGODB_URI"')
// }

// const uri = process.env.MONGODB_URI
// const options = {}

// let client
// let clientPromise: Promise<MongoClient>

// if (process.env.NODE_ENV === 'development') {
//   // In development mode, use a global variable so that the value
//   // is preserved across module reloads caused by HMR (Hot Module Replacement).
//   let globalWithMongo = global as typeof globalThis & {
//     _mongoClientPromise?: Promise<MongoClient>
//   }

//   if (!globalWithMongo._mongoClientPromise) {
//     client = new MongoClient(uri, options)
//     globalWithMongo._mongoClientPromise = client.connect()
//   }
//   clientPromise = globalWithMongo._mongoClientPromise
// } else {
//   // In production mode, it's best to not use a global variable.
//   client = new MongoClient(uri, options)
//   clientPromise = client.connect()
// }

// // Export a module-scoped MongoClient promise. By doing this in a
// // separate module, the client can be shared across functions.
// export default clientPromise

// import { MongoClient } from "mongodb";

// const uri = process.env.MONGODB_URI;

// const client = new MongoClient(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// export async function connectToDatabase() {
//   if (!client.isConnected()) await client.connect();
//   const db = client.db("pet-app-db");
//   return { db, client };
// }

// import { MongoClient } from 'mongodb';

// const uri = process.env.MONGODB_URI;
// const options = {
//   // useUnifiedTopology: true,
//   // useNewUrlParser: true,
// };

// let client;
// // let clientPromise;
// let clientPromise: Promise<MongoClient>;

// if (!process.env.MONGODB_URI) {
//   throw new Error('Please add your Mongo URI to .env.local');
// }

// if (process.env.NODE_ENV === 'development') {
//   // In development mode, use a global variable so that the value
//   // is preserved across module reloads caused by HMR (Hot Module Replacement).
//   if (!global._mongoClientPromise) {
//     client = new MongoClient(uri, options);
//     global._mongoClientPromise = client.connect();
//   }
//   clientPromise = global._mongoClientPromise;
// } else {
//   // In production mode, it's best to not use a global variable.
//   client = new MongoClient(uri, options);
//   clientPromise = client.connect();
//   console.log('clientPromise', clientPromise);
//   console.log("Connected to MongoDB");
// }

// // Export a module-scoped MongoClient promise. By doing this in a
// // separate module, the client can be shared across functions.
// export default clientPromise;

import { MongoClient } from "mongodb";

declare global {
  var _mongoClientPromise: any;
}
if (!process.env.MONGODB_URI) {
  throw new Error('Invalid environment variable: "MONGODB_URI"');
}

const uri = process.env.MONGODB_URI;
const options = {};

let client;
let clientPromise: Promise<MongoClient>;

if (!process.env.MONGODB_URI) {
  throw new Error("Please add your Mongo URI to .env.local");
}

if (process.env.NODE_ENV === "development") {
  // In development mode, use a global variable so that the value
  // is preserved across module reloads caused by HMR (Hot Module Replacement).
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production mode, it's best to not use a global variable.
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
export default clientPromise;
