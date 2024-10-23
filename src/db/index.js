import mongoose from "mongoose";
import {DB_NAME} from "../constants.js"
import dotenv from "dotenv"
dotenv.config({path:"../../.env"})
const connect_db=async ()=>
{
    try{
        const db_connect=await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        console.log(`${db_connect.connection.host}`);
    }
    catch(error)
    {
        console.log("database connection error",error)
        Process.exit(1);
    }
    
}
export { connect_db };