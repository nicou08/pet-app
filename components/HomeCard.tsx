import Link from "next/link";

interface props {
  pet: string;
  image: string;
  tags: string[];
}

export default function HomeCard(props: props) {
  return (
    <div className="shadow-xl rounded-xl w-96 bg-white travel1 invisible cursor-pointer">
      {props.pet === "Guinea pigs" ? (
        <>
          <img
            src="/greg.jpeg"
            alt="greg image"
            style={{ width: "100%", height: "auto" }}
            className="rounded-t-xl"
          />
          <div className="p-5 flex">
            {props.tags.map((tag: any) => (
              <div className="mr-2">{tag}</div>
            ))}
            <div>pachon</div>
          </div>
        </>
      ) : (
        <>
          <img
            src={props.image}
            alt="pet image"
            style={{ width: "100%", height: "auto" }}
            className="rounded-t-xl"
          />
          <div className="p-5 flex">
            {props.tags.map((tag: any) => (
              <div className="mr-2">{tag}</div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
