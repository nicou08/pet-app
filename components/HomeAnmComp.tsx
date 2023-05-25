import Image from "next/image";

interface props {
  image: string;
  tags: string[];
}

export default function HomeAnmComp(props: props) {
  return (
    <div className="shadow-xl rounded-xl w-3/12">
      <Image
        src={props.image}
        alt="greg image"
        width={250}
        height={350}
        style={{ width: "100%", height: "auto" }}
        className="rounded-t-xl"
      />
      <div className="p-5">{props.tags}asdf asdf asdf asdf asdf asdf</div>
    </div>
  );
}
