"use client";
import Button from "@/components/Button";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [letter, setLetter] = useState("");
  const [numbers, setNumbers] = useState([]);

  const handleClick = (x) => {
    setLetter(x);
  };
  const handleClick2 = (x) => {
    setNumbers(x);
  };

  const stage = [];
  const num = [];

  for (var i = 97; i <= 122; i++) {
    stage.push(String.fromCharCode(i));
  }
  for (var i = 1; i <= 20; i++) {
    num.push(i);
  }

  return (
    <main className="flex justify-center h-screen p-10">
      <div>
        {/* <div>
          {letter}
          {numbers}
        </div> */}

        <h1 className="text-center mb-20">Stage QR</h1>

        <div>
          <div className="flex gap-5 mt-5">
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
          <div className="flex gap-5 mt-5 justify-center">
            {num.map((x) => (
              <Button
                key={x}
                name={x}
                handleClick={() => handleClick2(x)}
                numbers={numbers}
              />
            ))}
          </div>
          <br />
          <div className="flex justify-center">
            <Image
              src={`/qr/${letter}/${letter}${numbers}.png`}
              alt="QR Code"
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
