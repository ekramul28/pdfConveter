import connectDB from "../../../../../utils/db/connect";
import mongoose from "mongoose";
import { serviceModel } from "../../../../../utils/models/servicesModel";
import { NextResponse } from "next/server";
export async function GET(req, res) {
    await connectDB()
    const id = req.url.split("/services/")[1]
    console.log("hello");
    console.log(id);
    // const ObjectId = new mongoose.Types.ObjectId(id)
    const result = await serviceModel.findOne({ id: id })
    console.log("Result", result);
    return NextResponse.json(result)
}