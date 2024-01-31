import { NextResponse } from "next/server";
import connectDB from "../../../../utils/db/connect";
import User from "../../../../utils/models/userModel";
import bcrypt from "bcryptjs";

export async function POST(req) {
    try {
        const { name, email, password } = await req.json();
        // console.log(value)
        const hashedPassword = await bcrypt.hash(password, 10);
        console.log(hashedPassword);

        await connectDB();
        await User.create({ name, email, password: hashedPassword })
        return NextResponse.json({ message: "user Registered." }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: "An Error occurred while registering the user." }, { status: 500 });
    }
}