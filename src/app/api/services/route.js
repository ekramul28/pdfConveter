import mongoose from "mongoose";
import connectDB from "../../../../utils/db/connect";
import { NextResponse } from "next/server";
import { serviceModel } from "../../../../utils/models/servicesModel";

export async function GET() {
    await connectDB()
    const result = await serviceModel.find()
    console.log(NextResponse.json(result))
    return NextResponse.json(result)
}