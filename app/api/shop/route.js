import ConnectToDB from "@/DB/ConnectToDB";
import Shop from "@/schema/shop";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    ConnectToDB();
    let allEntries = await Shop.find({});

    // if all entries 0 then create 3 of them

    if (allEntries.length == 0) {
      await Shop.create({
        mainTitle: "Our Skate Shop",
        para1:
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alterationThere are many variatioThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alterationThere are many variationsns",
      });

      let allData = await FAQs.find({});

      return NextResponse.json({ data: allData });
    } else {
      return NextResponse.json({ data: allEntries });
    }
  } catch (err) {
    return NextResponse.json(
      { message: "something went wrong" },
      { status: 500 }
    );
  }
}
