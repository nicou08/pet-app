import AnimalComp from "@/components/AnimalComp";

async function getAnimals() {
  const res = await fetch("http://localhost:3000/api/animals", {
    cache: "no-store",
  });
  return res.json();
}


export default async function Animals() {
  const animalData = await getAnimals();

  return (
    <div>
      <div className="text-4xl">ANIMALSssssAs PAGEee </div>
      <ul>
        {animalData.map((anmm: any) => (
          <li key={anmm._id}>
            <AnimalComp
              pet={anmm.animal}
              image={anmm.image}
              type={anmm.type}
              tags={anmm.tags}
              description={anmm.description}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
