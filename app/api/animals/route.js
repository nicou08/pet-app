import clientPromise from "@/utils/mongodbCon";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("pet-app-db");

    try {
      const pets = await db
        .collection("pet-app-collection-animal-info")
        .find()
        .toArray();
      //console.log("RESULTSTTT");
      //console.log(pets);

      return new Response(JSON.stringify(pets));
    } catch (e) {
      console.log("INSIDE HERE ERRR");
      console.log(e);
    }
  } catch (e) {
    console.log("HEREEE ERRORRRRRR");
    console.error(e);
  }
}
