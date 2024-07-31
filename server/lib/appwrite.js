import { Client, Databases, Query } from "node-appwrite";
const client = new Client();

export const config = {
  endpoint: process.env.APPWRITE_ENDPOINT,
  platform: process.env.APPWRITE_PLATFORM,
  projectId: process.env.APPWRITE_PROJECT_ID,
  databaseId: process.env.APPWRITE_DATABASE_ID,
  userCollectionId: process.env.APPWRITE_COLLECTION_ID,
  apiKey: process.env.APPWRITE_API_KEY,
};
client
  .setEndpoint(config.endpoint)
  .setProject(config.projectId)
  .setKey(config.apiKey);

const getUnverifiedDrivers = async () => {
  let data = await Databases.listDocuments(
    config.databaseId,
    config.userCollectionId,
    [{ verification: "unverified" }]
  );
  console.log(data);
  return data;
};
