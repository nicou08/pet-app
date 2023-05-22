import { MongoClient } from "mongodb";

async function testConnection() {
    const uri = process.env.MONGODB_URI;
    const client = new MongoClient(uri, {});
}