import Image from "next/image";
import greg from "../public/greg.jpg";

interface props {
  pet: string;
  image: string;
  type: string;
  tags: string[];
  description: string;
}

export default function AnimalComp(props: props) {
  return (
    <div>
      <div className="text-4xl">THIS IS THE ANIMAL COMPONENT</div>
      <div> {props.pet} </div>
      <div> {props.type} </div>
      <div> {props.tags} </div>
      <div> {props.description} </div>
      {props.pet === "Guinea pigs" ? (
        <>
            {console.log("this is greg")}
          <img src="/greg.jpeg"  alt="greg image" height={100} width={100} ></img>
          <p>THIS IS GREG</p>
        </>
      ) : (
        <img src={props.image} alt="pet image" height={100} width={100} />
      )}
    </div>
  );
}
