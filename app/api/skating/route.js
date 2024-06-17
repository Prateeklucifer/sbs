import ConnectToDB from "@/DB/ConnectToDB";
import Skating from "@/schema/Skating";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    ConnectToDB();
    let allEntries = await Skating.find({});

    // if all entries 0 then create 3 of them

    if (allEntries.length == 0) {
      await Skating.create(
        {
          title: "Skateboard",
          description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alterationThere are many variations",
        },
        {
          title: "Skateboard",
          description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alterationThere are many variations",
        },
        {
          title: "Skateboard",
          description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alterationThere are many variations",
        },
      );

      let allData = await Pricing.find({});

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
