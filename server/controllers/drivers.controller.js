import { Client, Databases, Query } from "node-appwrite";
const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("6673fdbd0012f4a44e1c");

let promise = Databases.listDocuments("<DATABASE_ID>", "<COLLECTION_ID>", [
  Query.equal("title", "Avatar"),
]);
