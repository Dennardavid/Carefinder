const { NextResponse } = require("next/server");

export async function POST(request) {
  try {
    const { name, email, password } = await request.json();
    console.log("name", name);
    console.log("email", email);
    console.log("password", password);
    return NextResponse.json(
      { message: "User registered successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error registering user" },
      { status: 500 }
    );
  }
}


