import Link from "next/link";

interface props {
  pet: string;
  image: string;
  tags: string[];
}

export default function HomeCard(props: props) {
  return (
    <div className="shadow-xl rounded-xl w-96 bg-white travel1 invisible">
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
