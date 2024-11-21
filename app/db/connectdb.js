import mongoose from "mongoose";

const connectdb = async () => {
  if (mongoose.connections[0].readyState) {
    console.log("Already connected to MongoDB");
    return;
  }

  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.error("MongoDB URI is undefined. Please check your environment variables.");
    return;
  }

  try {
    await mongoose.connect(uri, {
      serverApi: { version: '1', strict: true, deprecationErrors: true },
      connectTimeoutMS: 10000,  // Timeout after 10 seconds if connection is not established
      socketTimeoutMS: 45000,   // Timeout after 45 seconds if socket is not active
    });
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};

export default connectdb;