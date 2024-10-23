import { app} from "./app.js";
import dotenv from "dotenv"
import { connect_db } from "./db/index.js";
dotenv.config({path:"../env"})
const PORT=process.env.PORT||3000

connect_db().then(()=>
{app.listen(PORT,()=>
    {
        console.log(`hey server is running on port ${PORT}`)
        
    })
    

}).catch((err)=>{
    console.log("mongodb connection error");

})




