import User from "@/models/User";
import { connectMongoDB } from "@/lib/mongo";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    await connectMongoDB();
    const { email } = await request.json();
    const user = await User.findOne({ email }).select("_id");

    console.log("user:", user);
    return NextResponse.json({ user }, { status: 200 });
  } catch (error) {
    console.log("from router", error);
    return NextResponse.json(
      { message: "Error checking user user" },
      { status: 500 }
    );
  }
}
