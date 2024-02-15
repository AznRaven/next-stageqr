"use client";
import Button from "@/components/Button";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [letter, setLetter] = useState("");
  const [numbers, setNumbers] = useState("");
  const [imageExists, setImageExists] = useState(false);

  const handleClick = (x) => {
    setLetter(x);
  };
  const handleClick2 = (x) => {
    setNumbers(x);
  };

  const stageLetter = [];
  for (var i = 97; i <= 122; i++) {
    stageLetter.push(String.fromCharCode(i));
  }
  const stageNumber = [];
  for (var i = 1; i <= 40; i++) {
    stageNumber.push(i);
  }

  useEffect(() => {
    const checkImageExists = async () => {
      try {
        const response = await fetch(`/qr/${letter}/${letter}${numbers}.png`);
        if (response.ok) {
          setImageExists(true);
        } else {
          setImageExists(false);
        }
      } catch (error) {
        setImageExists(false);
      }
    };
    checkImageExists();
  }, [letter, numbers]);

  return (
    <main className="flex justify-center h-screen md:p10 p-4 ">
      <div>
        {/* <div>
          {letter}
          {numbers}
        </div> */}

        <h1 className="text-center font-bold text-2xl mt-5 mb-0">Stage QR</h1>

        <div className="grid gap-2 ">
          {/* Image */}
          <div className="grid h-52 overflow-hidden justify-center  relative ">
            {imageExists ? (
              <div className="absolute right-0 -top-10 m-auto left-1/2 -translate-x-1/2  w-[290px]">

                <Image
                  src={`/qr/${letter}/${letter}${numbers}.png`}
                  alt="QR Codes"
                  width={300}
                  height={300}
                />
              </div>
            ) : (
              letter !== "" && numbers !== "" && "Image does not exist"
            )}
          </div>
          {/* All Letters */}

          <div class="border rounded-md">
            <h5 class="bg-slate-200 p-2 font-bold text-lg">
              Select Staging Letter
            </h5>
            <div class="p-2">
              {/* <h5 class="card-title">Select Staging Letter</h5> */}
              <p class="card-text grid grid-cols-10 gap-x-5 gap-y-2 px-2">
                {stageLetter.map(
                  (x) =>
                    x !== "i" &&
                    x !== "e" &&
                    x !== "m" &&
                    x !== "o" &&
                    x !== "u" &&
                    x !== "w" && (
                      // <button className="uppercase">{x}</button>
                      <Button
                        key={x}
                        name={x}
                        handleClick={() => handleClick(x)}
                        letter={letter}
                      />
                    )
                )}
              </p>
              {/* <a href="#" class="btn btn-primary">
              Go somewhere
            </a> */}
            </div>
          </div>

          {/* All Numbers */}
          <div class="border rounded-md">
            <h5 class="bg-slate-200 p-2 font-bold text-lg">
              Select Staging Number
            </h5>
            <div class="p-2">
              {/* <h5 class="card-title">Select Staging Letter</h5> */}
              <p class="card-text grid grid-cols-10  gap-x-5 gap-y-2 px-2">
                {stageNumber.map((x) => (
                  <Button
                    key={x}
                    name={x}
                    handleClick={() => handleClick2(x)}
                    numbers={numbers}
                  />
                ))}
              </p>
              {/* <a href="#" class="btn btn-primary">
              Go somewhere
            </a> */}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
