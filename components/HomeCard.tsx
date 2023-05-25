import Image from "next/image";
import Link from "next/link";

interface props {
  pet: string;
  image: string;
  tags: string[];
}

export default function HomeCard(props: props) {
  return (
    <div className="shadow-xl rounded-xl w-2/12 left-[-19%] absolute travel1">
      {props.pet === "Guinea pigs" ? (
        <img
          src="/greg.jpeg"
          alt="greg image"
          style={{ width: "100%", height: "auto" }}
          className="rounded-t-xl"
        />
      ) : (
        <img
          src={props.image}
          alt="pet image"
          style={{ width: "100%", height: "auto" }}
          className="rounded-t-xl"
        />
      )}
      <div className="p-5">{props.tags}asdf asdf asdf asdf asdf asdf</div>
    </div>
  );
}
