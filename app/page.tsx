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
  return (
    <div>
      <div className="font-dancingScript font-bold text-center text-4xl mt-16 p-8">
        Choose a pet you are interested in learning of!
      </div>
      <div className="mt-20">
        {animalPicData.map((anmPic: any) => (
          <HomeCard pet={anmPic.animal} image={anmPic.image} tags={s} />
        ))}
       
      </div>
    </div>
  );
}
