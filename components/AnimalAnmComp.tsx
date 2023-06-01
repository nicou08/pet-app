import Link from "next/link";

interface props {
  pet: string;
  image: string;
}

export default function AnimalAnmComp(props: props) {
  return (
    <div>
      <div className="text-xl">{props.pet}</div>
    </div>
  );
}
