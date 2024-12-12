import mongoose from "mongoose";

export const connectDB = async ()=>{
    await mongoose.connect('mongodb+srv://mahalakshmi:17290504@cluster0.b0iu5.mongodb.net/food-del').then(()=>console.log("DB connected"));
}