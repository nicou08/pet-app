"use client";
import Image from "next/image";

interface props {
  searchParams: any;
}

export default function Animal({ searchParams }: props) {
  console.log("ASDFASDFsearchParams: ", searchParams);
  function handleClick() {
    console.log("CLICKED");
    console.log("ASDFASDFsearchParams: ", searchParams);
  }
  
  return (
    <div className="flex justify-center items-center h-101" key={searchParams._id}>
      <div className="w-7/12 h-auto flex">
        {searchParams.pet2 === "Guinea pigs" ||
        searchParams.pet2 === "Hamsters" ||
        searchParams.pet2 === "Lizzards" ||
        searchParams.pet2 === "Horses" ||
        searchParams.pet2 === "Turtles" ||
        searchParams.pet2 === "Hedgehogs" ||
        searchParams.pet2 === "Chickens" ||
        searchParams.pet2 === "Dog" ? (
          <div style={{ width: "3000px", height: "auto" }}>
            <Image
              src={searchParams.image}
              alt="pet image"
              className="w-full h-auto"
            />
            {searchParams.pet === "Guinea pigs" ? (
              <div>Special Note: This my 2 year old guinea pig. His name is Greg.</div>
            ) : null}
          </div>
        ) : (
          <div style={{ width: "1400px", height: "auto" }}>
            <Image
              src={searchParams.image}
              alt="pet image"
              className="w-full h-auto"
            />
          </div>
        )}

        <div className="p-5 font-andika">
          <div onClick={handleClick}>HELLPPINGG</div>
          <div className="text-5xl font-bold pb-5">PLEASEE{searchParams.pet2}</div>
          <div className="flex pb-2">
            <div className="font-bold">Type: </div>
            <div className="ml-2">{searchParams.type}</div>
          </div>
          <div className="font-bold">Tags</div>
          <div className="flex pb-2">
            {searchParams.tags.map((tag: any, index: any) => (
              <div className="mr-2" key={index}>{tag}</div>
            ))}
          </div>
          <div className="font-bold">Description</div>
          <div>{searchParams.description}</div>
        </div>
      </div>
    </div>
  );
}
