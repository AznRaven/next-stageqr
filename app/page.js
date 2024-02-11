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

  const stage = [];
  const stage2 = [];
  const num = [];
  const num2 = [];

  for (var i = 97; i <= 109; i++) {
    stage.push(String.fromCharCode(i));
  }
  for (var i = 110; i <= 122; i++) {
    stage2.push(String.fromCharCode(i));
  }
  for (var i = 1; i <= 13; i++) {
    num.push(i);
  }
  for (var i = 14; i <= 26; i++) {
    num2.push(i);
  }

  useEffect(() => {
    const checkImageExists = async () => {
      try {
        setImageExists(false);
        const response = await fetch(`/qr/${letter}/${letter}${numbers}.png`);
        if (response.ok) {
          setImageExists(true);
        }
      } catch (error) {
        setImageExists(false);
      }
    };
    checkImageExists();
  }, [letter, numbers]);

  return (
    <main className="flex justify-center h-screen md:p10">
      <div>
        {/* <div>
          {letter}
          {numbers}
        </div> */}

        <h1 className="text-center mb-10">Stage QR</h1>

        <div className="grid items-center justify-center h-fit ">
          <div className="h-full grid-rows-4 space-y-2 px-2">
            {/* A-M */}
            <div className="grid-col  space-x-2">
              {stage.map((x) => (
                // <button className="uppercase">{x}</button>
                <Button
                  key={x}
                  name={x}
                  handleClick={() => handleClick(x)}
                  letter={letter}
                />
              ))}
            </div>
            {/* N-Z */}
            <div className="grid-col  space-x-2">
              {stage2.map((x) => (
                // <button className="uppercase">{x}</button>
                <Button
                  key={x}
                  name={x}
                  handleClick={() => handleClick(x)}
                  letter={letter}
                />
              ))}
            </div>
            {/* 1-13 */}
            <div className="grid-col  space-x-2">
              {num.map((x) => (
                <Button
                  key={x}
                  name={x}
                  handleClick={() => handleClick2(x)}
                  numbers={numbers}
                />
              ))}
            </div>
            {/* 14-26 */}
            <div className="grid-col  space-x-2">
              {num2.map((x) => (
                <Button
                  key={x}
                  name={x}
                  handleClick={() => handleClick2(x)}
                  numbers={numbers}
                />
              ))}
            </div>
            <div className="flex flex-col"></div>
          </div>
          {/* Image */}
          <div className="grid place-content-center h-fit">
            {imageExists ? (
              <Image
                src={`/qr/${letter}/${letter}${numbers}.png`}
                alt="QR Code"
                width={300}
                height={300}
              />
            ) : (
              letter !== "" && numbers !== "" && "Image does not exist"
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
