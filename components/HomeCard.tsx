import Link from "next/link";
import Image from "next/image";

interface props {
  key: any;
  animalData: any;
}

export default function HomeCard(props: props) {
  return (
    <div
      className="shadow-xl rounded-xl w-96 bg-white travel1 invisible cursor-pointer"
      key={props.key}
    >
      {props.animalData.animal === "Guinea pigs"
        ? (console.log(
            "INSIDE MAPPPP HOMECARD PROPS.animalData.animal === Guinea pigs: ",
            props.animalData.animal
          ),
          (
            <Link
              href={{
                pathname: `/animals/${props.animalData.animal}`,
                query: {
                  pet: props.animalData.animal,
                  type: props.animalData.type,
                  tags: props.animalData.tags,
                  image: "/greg.jpeg",
                  description: props.animalData.description,
                },
              }}
            >
              <Image
                src="/greg.jpeg"
                alt="greg image"
                style={{ width: "100%", height: "auto" }}
                className="rounded-t-xl"
              />
              <div className="p-5 flex">
                {props.animalData.tags.map((tag: any, index: any) => (
                  <div className="mr-2" key={index}>
                    {tag}
                  </div>
                ))}
                <div>pachon</div>
              </div>
            </Link>
          ))
        : (console.log(
            "INSIDE MAPPPP HOMECARD PROPS.animalData.animal: ",
            props.animalData.animal
          ),
          (
            <Link
              href={{
                pathname: `/animals/${props.animalData.animal}`,
                query: {
                  pet: props.animalData.animal,
                  type: props.animalData.type,
                  tags: props.animalData.tags,
                  image: props.animalData.image,
                  description: props.animalData.description,
                },
              }}
            >
              <Image
                src={props.animalData.image}
                alt="pet image"
                style={{ width: "100%", height: "auto" }}
                className="rounded-t-xl"
              />
              <div className="p-5 flex">
                {props.animalData.tags.map((tag: any, index: any) => (
                  <div className="mr-2" key={index}>
                    {tag}
                  </div>
                ))}
              </div>
            </Link>
          ))}
    </div>
  );
}
