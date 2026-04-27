import Card from "@/components/main/card";
import Link from "next/link";
import { cards } from "../consts/consts";
export default function Home() {
  return (
    <main>
      <div
        style={{
          backgroundImage: `url('img/main/laser.jpg')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "82vh",
        }}
      >
        <div className="container mx-auto ">
          <div className="w-fit pt-15">
            <h1 className="text-3xl p-4 text-white md:text-6xl font-bold">
              Изготовление изделий <br />
              из листового металла, <br />
              профильной трубы, <br />
              сортового проката
            </h1>
            <button className="text-4xl p-4 pointer rounded-2xl bg-black uppercase font-black cursor-pointer text-(--link-color) duration-500 ease-in-out hover:bg-(--link-color) hover:text-black block ml-auto mt-30 mr-2">
              Заказать
            </button>
          </div>
        </div>
      </div>
      <div className="container mx-auto my-6">
        <div className="flex justify-around flex-wrap my-5">
          {cards.map((card) => (
            <Link
              key={card.cardTitle}
              href={card.cardUrl}
              className="flex flex-col justify-center w-100 p-4 bg-gray-100 shadow-2xl rounded-4xl hover:-translate-y-4 duration-300 ease-in  "
            >
              <Card {...card} />
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
