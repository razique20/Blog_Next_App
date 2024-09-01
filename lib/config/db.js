import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://razique2002:Razique2002@cluster0.tzdck.mongodb.net/blog-app"
  );
  console.log("DB Connected");
};
