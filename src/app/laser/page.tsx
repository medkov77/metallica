import Image from "next/image";
export default function Laser() {
  return (
    <section className="my-10">
      <div className="container mx-auto">
        <h1 className="text-xl text-center md:text-3xl font-bold mb-5">
          Лазерная резка листового металла
        </h1>
        <div className="flex flex-wrap">
          <div className="md:w-1/2 pr-4 mx-auto ">
            <Image
              src="/img/main/laser.jpg"
              alt="Kontract"
              width={0}
              height={0}
              sizes="100vw"
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "15px",
                margin: "0 auto",
                minWidth: "300px",
              }}
            />
          </div>
          <div className="pl-4 md:w-1/2 text-gray-600">
            <p className="mt-3">
              Лазерная резка — передовой метод обработки металла, который
              сочетает высочайшую точность, скорость исполнения и экономичность.
              Эта технология открывает новые возможности для производства
              деталей любой сложности.
            </p>
            <h2 className="text-xl font-bold text-center my-3 ">
              Ключевые преимущества
            </h2>
            <ul className="list-disc pl-5">
              <li>
                Точность до 0,1 мм — возможность создания сложных контуров и
                мелких деталей.
              </li>
              <li>
                Высокая скорость, что существенно сокращает сроки выполнения
                заказов.
              </li>
              <li>
                Универсальность — работа с металлами разной толщины и состава.
              </li>
              <li>
                Автоматизация — программируемое управление исключает
                человеческий фактор.
              </li>
            </ul>
            <h2 className="text-xl font-bold text-center my-3 ">
              Какие материалы обрабатываем
            </h2>
            <ul className="list-disc pl-5">
              <li>Углеродистая и конструкционная сталь</li>
              <li>Нержавеющая сталь</li>
              <li>Алюминий и сплавы</li>
            </ul>
            <h2 className="text-xl font-bold text-center my-3 ">
              Как заказать
            </h2>
            <ul className="list-disc pl-5">
              <li>
                Отправьте чертежи или эскизы изделия (формат: DXF, DWG, AI)
              </li>
              <li>
                Мы рассчитаем стоимость и сроки, предложим оптимальные решения.
              </li>
              <li>Согласуем прототип (при необходимости).</li>
              <li>Запустим производство и доставим готовый заказ.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
