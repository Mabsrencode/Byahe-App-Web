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
//get all verified drivers
const getVerifiedDrivers = async () => {
  const databases = new Databases(client);
  let data = await databases.listDocuments(
    config.databaseId,
    config.userCollectionId,
    [Query.equal("verification", "verified")]
  );
  return data;
};
//get all unverified drivers
const getUnverifiedDrivers = async () => {
  const databases = new Databases(client);
  let data = await databases.listDocuments(
    config.databaseId,
    config.userCollectionId,
    [Query.equal("verification", "unverified")]
  );
  return data;
};
// update unverified driver to verified
const updateUnverifiedDriver = async (documentId) => {
  const databases = new Databases(client);
  await databases.updateDocument(
    config.databaseId,
    config.userCollectionId,
    documentId.id,
    { verification: "verified" }
  );
};

export { getUnverifiedDrivers, updateUnverifiedDriver, getVerifiedDrivers };
