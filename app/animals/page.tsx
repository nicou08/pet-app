import AnimalComp from "@/components/AnimalComp";

async function getAnimals() {
  // const res = await fetch("http://localhost:3000/api/animals", {
  //   cache: "no-store",
  // });
  const res = await fetch("http://localhost:3000/api/animals", {
    next: { revalidate: 60 },
  });
  return res.json();
}

export default async function Animals() {
  const animalData = await getAnimals();

  // return (
  //   <div>
  //     <div className="text-xl ">ANIMALSssssAs PAGEee </div>
  //     <ul className="p-6">
  //       {animalData.map((anmm: any) => (
  //         <li key={anmm._id} className="p-6">
  //           <AnimalComp
  //             pet={anmm.animal}
  //             image={anmm.image}
  //             type={anmm.type}
  //             tags={anmm.tags}
  //             description={anmm.description}
  //           />
  //         </li>
  //       ))}
  //     </ul>
  //   </div>
  // );
  return <div>ANIMALS PAGE</div>;
}
