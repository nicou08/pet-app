import Link from "next/link";

interface props {
  animalData: any;
}

export default function AnimalAnmComp(props: props) {
  console.log("ANIMALANMCOMP PROPS: ", props);
  return props.animalData.animal === "Guinea pigs" ? (
    <Link
      href={{
        pathname: `/animals/${props.animalData.animal}`,
        query: {
          pet: props.animalData.animal,
          pet2: props.animalData.animal,
          type: props.animalData.type,
          tags: props.animalData.tags,
          image: "/greg.jpeg",
          description: props.animalData.description,
        },
      }}
      className="text-xl"
    >
      <div className="shadow h-28 w-72 flex justify-center items-center hover:bg-amber-100 cursor-pointer">
        {props.animalData.animal}GREG{props.animalData.animal}
      </div>
    </Link>
  ) : (
    <Link
      href={{
        pathname: `/animals/${props.animalData.animal}`,
        query: {
          animal: props.animalData.animal,
          type: props.animalData.type,
          tags: props.animalData.tags,
          image: props.animalData.image,
          description: props.animalData.description,
        },
      }}
      className="text-xl"
    >
      <div className="shadow h-28 w-72 flex justify-center items-center hover:bg-amber-100 cursor-pointer">
        {props.animalData.animal}**{props.animalData.animal}
      </div>
    </Link>
  );
}
