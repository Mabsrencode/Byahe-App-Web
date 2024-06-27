import dotenv from "dotenv";
dotenv.config();
import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import bodyParser from "body-parser";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./db.js";
import { Client, Databases } from "node-appwrite";
import authRoutes from "./routes/auth.routes.js";

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

const client = new Client();
client
  .setEndpoint(process.env.APPWRITE_ENDPOINT)
  .setProject(process.env.APPWRITE_PROJECT_ID)
  .setKey(process.env.APPWRITE_API_KEY);

const databases = new Databases(client);

io.on("connection", (socket) => {
  console.log("Client connected");

  socket.on("location", (coords) => {
    console.log(`Received location: ${JSON.stringify(coords)}`);
    // Broadcast the received location to all clients
    socket.broadcast.emit("location", coords);
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

console.log("Socket.IO server started on port 8080");

app.use("/auth", authRoutes);
const PORT = process.env.PORT || 4000;
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Starting server on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to database:", error);
  });
httpServer.listen(8080);
