import HomeAnmComp from "@/components/HomeAnmComp";
import HomeCard from "@/components/HomeCard";

async function getAnimalPics() {
  const res = await fetch("http://localhost:3000/api/animalPic", {
    next: { revalidate: 60 },
  });
  return res.json();
}

export default async function Home() {
  const animalPicData = await getAnimalPics();
  const s: string[] = ["pachon", "pachon2", "pachon3"];
  // return (
  //   <section className="h-99 bg-green-200 ">
  //     <div className="h-full font-dancingScript font-bold text-center text-4xl">
  //       Choose a pet you are interested in learning of!
  //     </div>
  //     <div className="h-full">
  //       {animalPicData.map((anmPic: any) => (
  //         <HomeCard pet={anmPic.animal} image={anmPic.image} tags={s} />
  //       ))}
  //     </div>
  //   </section>
  // );
  return (
    <div className="w-full overflow-hidden">
      <div className="font-dancingScript font-bold text-center text-4xl pt-16 pb-16">
        Choose a pet you are interested in learning of!
      </div>
      <div className="w-full h-99 relative overflow-hidden">
        {animalPicData.map((anmPic: any) => (
          <HomeCard pet={anmPic.animal} image={anmPic.image} tags={s} />
        ))}
      </div>
    </div>
  );
}
