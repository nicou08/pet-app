import HomeCard from "@/components/HomeCard";

async function getAnimalPics() {
  const res = await fetch("https://pet-app-theta.vercel.app/api/animals", {
    next: { revalidate: 60 },
  });
  // const res = await fetch("http://localhost:3000/api/animals", {
  //   next: { revalidate: 60 },
  // });
  return res.json();
}

export default async function Home() {
  const animalPicData = await getAnimalPics();

  return (
    <div className="w-full overflow-hidden">
      <div className="font-dancingScript font-bold text-center text-4xl pt-16 pb-16">
        Choose a pet you are interested in learning of!
      </div>
      <div className="w-full h-99 relative overflow-hidden">
        {animalPicData.map((ani: any) => (
          <HomeCard animalData={ani} key={ani._id}/>
        ))}
      </div>
    </div>
  );
}

// export default async function Home() {
//   return <div>Hello</div>
// }