"use client";
import Image from "next/image";

interface props {
  searchParams: any;
}

export default function Animal({ searchParams }: props) {
  function handleClick() {
    console.log("CLICKED");
    console.log("ASDFASDFsearchParams: ", searchParams);
  }

  return (
    <div
      className="flex justify-center xl:items-center h-[calc(100vh-9.5rem)] overflow-y-scroll "
      key={searchParams._id}
    >
      <div className="w-11/12 lg:w-2/3 xl:w-[1200px] xl:flex pb-16 pt-5 ">
        {searchParams.pet === "Guinea pigs" ||
        searchParams.pet === "Hamsters" ||
        searchParams.pet === "Lizzards" ||
        searchParams.pet === "Horses" ||
        searchParams.pet === "Turtles" ||
        searchParams.pet === "Hedgehogs" ||
        searchParams.pet === "Chickens" ||
        searchParams.pet === "Dog" ? (
          <div>
            <Image
              src={searchParams.image}
              alt="pet image"
              className="w-full xl:w-[4000px] h-auto"
            />

            {searchParams.pet === "Guinea pigs" ? (
              <div>
                Special Note: This is my 2 year old guinea pig. His name is
                Greg.
              </div>
            ) : null}
          </div>
        ) : (
          <Image
            src={searchParams.image}
            alt="pet image"
            className="w-full xl:w-[600px]"
          />
        )}

        <div className="p-5 font-andika">
          <div className="text-5xl font-bold pb-5">{searchParams.pet}</div>
          <div className="flex pb-2">
            <div className="font-bold">Type: </div>
            <div className="ml-2">{searchParams.type}</div>
          </div>
          <div className="font-bold">Tags</div>
          <div className="flex pb-2">
            {searchParams.tags.map((tag: any, index: any) => (
              <div className="mr-2" key={index}>
                {tag}
              </div>
            ))}
          </div>
          <div className="font-bold">Description</div>
          <div>{searchParams.description}</div>
        </div>
      </div>
    </div>
  );
}
