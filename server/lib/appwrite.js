import "dotenv/config";
import { Client, Databases, Query } from "node-appwrite";

const client = new Client();

export const config = {
  endpoint: process.env.APPWRITE_ENDPOINT,
  projectId: process.env.APPWRITE_PROJECT_ID,
  databaseId: process.env.APPWRITE_DATABASE_ID,
  userCollectionId: process.env.APPWRITE_COLLECTION_ID,
  apiKey: process.env.APPWRITE_API_KEY,
};

client
  .setEndpoint(config.endpoint)
  .setProject(config.projectId)
  .setKey(config.apiKey);

export const getUnverifiedDrivers = async () => {
  const databases = new Databases(client);
  let data = await databases.listDocuments(
    config.databaseId,
    config.userCollectionId,
    [Query.equal("verification", "unverified")]
  );
  return data;
};
