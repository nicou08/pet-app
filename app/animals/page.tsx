import AnimalComp from "@/components/AnimalComp";
import clientPromise from "@/utils/mongodbCon";

// async function getAnimals( animal: string) {
//   const res = await fetch(process.env.MONGODB_URI!);
//   return res.json();
// }

// async function getAnimals() {
//   console.log("Beforeeeee");
//   const res = await fetch("http://localhost:3000/api/animals");
//   console.log("Afterrrrrr");
//   // console.log(res);
//   // console.log(res.json());
//   const text = await res.text();
//   console.log(JSON.parse(text))
//   // // Recommendation: handle errors
//   // if (!res.ok) {
//   //   // This will activate the closest `error.js` Error Boundary
//   //   throw new Error("Failed to fetch data");
//   // }

//   return res.json();
// }




export default async function Animals() { 
  // const animalData = await getAnimals();
  // console.log(animalData);

  return (
    <div>
      <div className="text-4xl">ANIMALSssssAs PAGEee </div>
    </div>
  );
}
