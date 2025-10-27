"use client"
import Image from "next/image";
export default function Hexagon() {
    return (
        <div className="flex justify-center relative max-sm:g">
            <div className="profile w-[400px] h-[400px] max-md:w-[300px] max-md:h-[300px] max-sm:w-[200px] max-sm:h-[200px] max-sm:mt-10 bg-cyan-500 rounded-full flex overflow-hidden shadow-[0_0_20px_white]"> 
                <Image
                    className="absolute bottom-[-43px]"
                    src="https://drive.google.com/uc?export=view&id=1pc4dT32RmLILkGoNumYtkBw2ej5k4agW"
                    alt="Drive Image"
                    width={500}
                    height={500}
                />
            </div>
        </div>
    );
}

