import AnimalAnmComp from "@/components/AnimalAnmComp";

async function getAnimals() {
  const res = await fetch("https://pet-app-theta.vercel.app/api/animals");
  // const res = await fetch("https://pet-app-theta.vercel.app/api/animals", {
  //   next: { revalidate: 60 },
  // });
  // const res = await fetch("http://localhost:3000/api/animals", {
  //   next: { revalidate: 60 },
  // });
  return res.json();
}

export default async function Animals() {
  const animalData = await getAnimals();
  console.log("Data here: ", animalData);

  return (
    <div className="">
      <div className="font-dancingScript font-bold text-4xl flex justify-center  pt-16 pb-14 mr-98">
        Animals
      </div>
      <div className="flex justify-center">
        <ul className="grid grid-cols-4 gap-x-0 text-center gap-0">
          {animalData.map((anmm: any) => (
            <li
              key={anmm._id}
              className="shadow h-28 w-72 flex justify-center items-center"
            >
              <AnimalAnmComp animalData={anmm} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
