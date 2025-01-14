"use client";
import { useState } from "react";
import HairImg from "@public/hair.png";
import Image from "next/image";
import "./hair.scss";

const Hair = () => {
  const [isFaded, setIsFaded] = useState(false);
  const handleFade = () => {
    setIsFaded(!isFaded);
  };
  return (
    <div
      className={`fade-div ${isFaded ? "faded" : ""}`}
      onMouseEnter={() => !isFaded && setIsFaded(true)}
      onMouseLeave={() => isFaded && setIsFaded(false)}
      onClick={handleFade}
    >
      <Image src={HairImg} width={240} height={240} alt="someone's hair" />
    </div>
  );
};

export default Hair;
