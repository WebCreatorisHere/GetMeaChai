import connectdb from "../db/connectdb";
import User from "../models/user";
import { NextResponse } from "next/server";

export async function GET(req) {
    await connectdb()
    let data = await User.find({})
    return NextResponse.json(data)
}