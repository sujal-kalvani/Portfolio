"use client";
import Image from "next/image";

export default function Hexagon() {
  return (
    <div className="flex justify-center relative">
      <div className="profile w-[400px] h-[400px] max-lg:w-[350px] max-lg:h-[350px] max-md:w-[300px] max-md:h-[300px] max-sm:w-[220px] max-sm:h-[220px] bg-cyan-500 rounded-full relative flex overflow-hidden shadow-[0_0_20px_white]">
        <Image
          className="absolute bottom-[-43px] max-lg:bottom-[-35px] max-md:bottom-[-30px] max-sm:bottom-[-25px]"
          src="https://drive.google.com/uc?export=view&id=1pc4dT32RmLILkGoNumYtkBw2ej5k4agW"
          alt="Profile"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}
