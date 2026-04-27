import { Icard } from "@/types/types";
import Image from "next/image";
export default function Card({ cardTitle, cardImage }: Icard) {
  return (
    <div className="flex flex-col justify-between h-full">
      <h2 className="text-center mb-4 text-2xl font-bold ">{cardTitle}</h2>
      <Image
        src={cardImage}
        alt={cardTitle}
        width={0}
        height={0}
        sizes="100vw"
        style={{
          width: "350px",
          height: "100%",
          borderRadius: "15px",
          margin: "0 auto",
        }}
      />
    </div>
  );
}
