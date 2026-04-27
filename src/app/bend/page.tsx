import Image from "next/image";
export default function Bend() {
  return (
    <section className="my-10">
      <div className="container mx-auto">
        <h1 className="text-xl text-center md:text-3xl font-bold mb-5">
          Гибка металла
        </h1>
        <div className="flex flex-wrap">
          <div className="md:w-1/2 pr-4 mx-auto ">
            <Image
              src="/img/main/bend.jpg"
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
              Гибка металла — высокотехнологичный процесс пластической
              деформации листового металла, позволяющий придавать заготовкам
              заданную пространственную форму без нарушения целостности
              материала.
            </p>
            <h2 className="text-xl font-bold text-center my-3 ">
              Как проходит процесс
            </h2>
            <ul className="list-disc pl-5">
              <li>
                <span className="font-black">Подготовка материала</span> —
                обрезка до нужных размеров и очистка поверхности.
              </li>
              <li>
                <span className="font-black">Выбор оборудования</span> — подбор
                станка и оснастки (матриц, штампов) под конкретную задачу.
              </li>
              <li>
                <span className="font-black">Настройка параметров</span> —
                расчёт угла и радиуса гиба, усилия деформации.
              </li>
              <li>
                <span className="font-black">Гибка</span> — формообразование
                заготовки на специализированном оборудовании.
              </li>
              <li>
                <span className="font-black">Контроль качества</span> — проверка
                геометрии, углов, отсутствие дефектов.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
