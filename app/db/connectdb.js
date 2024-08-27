import mongoose from "mongoose";

const connectDB = async () => {
    try {
      const conn = await mongoose.connect(`mongodb://127.0.0.1:27017/GetMeaChai`, {
        useNewUrlParser: true,
      });
    } catch (error) {
      console.error(error.message);
      process.exit(1);
    }
  }
  export default connectDB