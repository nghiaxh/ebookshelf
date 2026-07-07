import mongoose from "mongoose";

const uri = process.env.MONGODB_URL || "mongodb://localhost:27017/ebookshelf";

async function wait() {
  try {
    await mongoose.connect(uri, { serverSelectionTimeoutMS: 3000 });
    console.log("ok");
    await mongoose.disconnect();
    process.exit(0);
  } catch {
    process.exit(1);
  }
}

wait();
