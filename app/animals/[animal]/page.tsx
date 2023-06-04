"use client";

interface props {
  searchParams: any;
}

export default function Animal({ searchParams }: props) {
  return (
    <div className="flex justify-center items-center h-101" key={searchParams._id}>
      <div className="w-7/12 h-auto flex">
        {searchParams.pet === "Guinea pigs" ||
        searchParams.pet === "Hamsters" ||
        searchParams.pet === "Lizzards" ||
        searchParams.pet === "Horses" ||
        searchParams.pet === "Turtles" ||
        searchParams.pet === "Hedgehogs" ||
        searchParams.pet === "Chickens" ||
        searchParams.pet === "Dog" ? (
          <div style={{ width: "3000px", height: "auto" }}>
            <img
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
            <img
              src={searchParams.image}
              alt="pet image"
              className="w-full h-auto"
            />
          </div>
        )}

        <div className="p-5 font-andika">
          <div className="text-5xl font-bold pb-5">P{searchParams.pet}</div>
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
