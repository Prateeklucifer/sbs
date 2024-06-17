import { NextResponse } from "next/server";
import jsonwebtoken from "jsonwebtoken";
import { cookies } from "next/headers";
import ConnectToDB from "@/DB/ConnectToDB";
import About from "@/schema/About";
import Shop from "@/schema/shop";

export async function POST(req, res) {
  const { AllAbout } = await req.json();
  const cookieStore = cookies();
  const token = cookieStore.get("token");

  if (token) {
    // checks if token is vailed or not
    try {
      let isVailed = jsonwebtoken.verify(token.value, process.env.JWT_SECRET);

      if (isVailed) {
        try {
          ConnectToDB();

          AllAbout.map(async (item) => {
            await Shop.findByIdAndUpdate(item._id, {
              mainTitle: item.mainTitle,
              para1: item.para1,
            });
          });

          return NextResponse.json({ message: "Update Sucessfull" });
        } catch (error) {
          console.log(error);
          return NextResponse.json(
            { message: "Something went wrong" },
            { status: 500 }
          );
        }
        // return NextResponse.json({ messege: "token is vailed" }, {status: 200})
      }
    } catch (error) {
      // return NextResponse.json({ messege: "token is not vailed" }, {status: 401})
      return NextResponse.json({ message: "Not Authorized" }, { status: 302 });
    }
  } else {
    return NextResponse.json({ message: "Not Authorized" }, { status: 302 });
  }
}
