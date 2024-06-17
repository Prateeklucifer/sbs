import ConnectToDB from "@/DB/ConnectToDB";
import Requests from "@/schema/Requests";
import { NextResponse } from "next/server";
import validator from "validator";

export async function POST(req, res) {
  const { firstName, lastName, email, phone, message } =
    await req.json();

  try {
    ConnectToDB();

    if (validator.isEmail(email) && phone.length == 10) {
      await Requests.create({
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        message: message,
      });
      return NextResponse.json({ status: 200 });
    } else {
      return NextResponse.json({message: "invailed format"}, {status: 403})
    }
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { messege: "something went wrong" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    ConnectToDB();

    let data = await Requests.find({});
    return NextResponse.json({ data });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { messege: "something went wrong" },
      { status: 500 }
    );
  }
}
