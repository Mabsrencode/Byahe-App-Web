import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import bodyParser from "body-parser";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./db.js";
import authRoutes from "./routes/auth.routes.js";
import driversRoutes from "./routes/drivers.routes.js";

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  },
});

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

const driverLocations = [];
io.on("connection", (socket) => {
  console.log("Client connected");

  socket.on("location", (coords) => {
    driverLocations[socket.id] = coords;
    io.emit("locationUpdate", Object.values(driverLocations));
    socket.broadcast.emit("location", Object.values(driverLocations));
    console.log("Driver location: ", driverLocations);
  });

  socket.on("disconnect", () => {
    delete driverLocations[socket.id];
    io.emit("locationUpdate", Object.values(driverLocations));
    socket.broadcast.emit("location", Object.values(driverLocations));
    console.log("Client disconnected");
  });
});

io.on("error", (error) => {
  console.error("Socket.IO Error:", error);
});

console.log("Socket.IO server started on port 8080");

app.use("/auth", authRoutes);
app.use("/drivers", driversRoutes);
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

httpServer.listen(8080, () => {
  console.log("HTTP server listening on port 8080");
});

httpServer.on("error", (error) => {
  if (error.code === "ECONNRESET") {
    console.warn("Connection reset by peer.");
  } else {
    console.error("HTTP Server Error:", error);
  }
});

process.on("uncaughtException", (error) => {
  console.error("Uncaught Exception:", error);
});

process.on("unhandledRejection", (reason, promise) => {
  console.error("Unhandled Rejection at:", promise, "reason:", reason);
});
