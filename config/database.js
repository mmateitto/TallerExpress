import mongoose from "mongoose";

let url = process.env.URI_MONGO;

async function connectDB(){
    try{
        await mongoose.connect(url)
        console.log("Connected to MongoDB");
    } catch(error){
        console.log(error);
    }
}

connectDB();