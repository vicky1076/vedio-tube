import { asyncHandler } from "../utils/asynchandeler.js";
import { apiResponce } from "../utils/apiResponce.js";

const healthcheck=asyncHandler( async (req,res)=>
{
    return res
    .status(200)
    .json(new apiResponce(200,"ok","health check passed"))
})
export { healthcheck }
