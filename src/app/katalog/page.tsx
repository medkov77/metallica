import { cards } from "../../consts/consts";
import Link from "next/link";
import Card from "@/components/main/card";
export default function Katalog() {
  return (
    <div className="container mx-auto my-6">
      <div className="flex justify-around flex-wrap my-5">
        {cards.map((card) => (
          <Link
            key={card.cardTitle}
            href={card.cardUrl}
            className="flex flex-col justify-center w-100 p-4 bg-gray-100 shadow-2xl rounded-4xl my-2 hover:-translate-y-4 duration-300 ease-in "
          >
            <Card {...card} />
          </Link>
        ))}
      </div>
    </div>
  );
}
