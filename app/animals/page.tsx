import AnimalComp from "@/components/AnimalComp";

async function getAnimals() {
  const res = await fetch("http://localhost:3000/api/animals");
  return res.json();
}


interface anm {
  id: string;
  animal: string;
  type: string;
  tags: string[];
  description: string;
}

export default async function Animals() { 
  const animalData = await getAnimals();
  console.log("animalData")
  console.log(animalData);
  console.log("afterANIMALDATAAAAAA")


  return (
    <div>
      <div className="text-4xl">ANIMALSssssAs PAGEee </div>
      <ul>
        {animalData.map((anmm : anm) => (
          <li key={anmm.id}>This is {anmm.animal}</li>
        ))}
      </ul>
    </div>
  );
}
