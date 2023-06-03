import Link from "next/link";

interface props {
  animalData: any;
}

export default function HomeCard(props: props) {
  return (
    <div className="shadow-xl rounded-xl w-96 bg-white travel1 invisible cursor-pointer">
      {props.animalData.animal === "Guinea pigs" ? (
        <Link
          href={{
            pathname: `/animals/${props.animalData.animal}`,
            query: {
              animal: props.animalData.animal,
              type: props.animalData.type,
              tags: props.animalData.tags,
              image: "/greg.jpeg",
              description: props.animalData.description,
            },
          }}
        >
          <img
            src="/greg.jpeg"
            alt="greg image"
            style={{ width: "100%", height: "auto" }}
            className="rounded-t-xl"
          />
          <div className="p-5 flex">
            {props.animalData.tags.map((tag: any) => (
              <div className="mr-2">{tag}</div>
            ))}
            <div>pachon</div>
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
        >
          <img
            src={props.animalData.image}
            alt="pet image"
            style={{ width: "100%", height: "auto" }}
            className="rounded-t-xl"
          />
          <div className="p-5 flex">
            {props.animalData.tags.map((tag: any) => (
              <div className="mr-2">{tag}</div>
            ))}
          </div>
        </Link>
      )}
    </div>
  );
}
