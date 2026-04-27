import Image from "next/image";
import img from "/img/main/robot1.png";
export default function Kontract() {
  return (
    <section className="my-10">
      <div className="container mx-auto">
        <h1 className="text-xl text-center md:text-3xl font-bold mb-5">
          Контрактное производство изделий из листового металла: надёжное
          решение для вашего бизнеса
        </h1>
        <div className="flex flex-wrap">
          <div className="md:w-1/2 pr-4 mx-auto ">
            <Image
              src="/img/main/robot1.png"
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
              Ищете способ запустить производство металлических изделий без
              капитальных вложений в оборудование и персонал? Контрактное
              производство — оптимальное решение для бизнеса любого масштаба.
            </p>
            <h2 className="text-xl font-bold text-center my-3 ">
              Что мы предлагаем
            </h2>
            <ul className="list-disc pl-5">
              <li>лазерную резку</li>
              <li>гибку металла</li>
              <li>роботизированную сварку</li>
              <li>порошковую покраску</li>
              <li>сборку готовых конструкций</li>
            </ul>
            <h2 className="text-xl font-bold text-center my-3 ">
              Почему стоит выбрать контрактное производство? <br />
              Экономия ресурсов. Вам не нужно:
            </h2>
            <ul className="list-disc pl-5">
              <li>закупать дорогостоящее оборудование</li>
              <li>нанимать и обучать производственный персонал</li>
              <li>организовывать склад сырья</li>
              <li>решать логистические вопросы</li>
            </ul>
            <h2 className="text-xl font-bold text-center my-3 ">
              Скорость запуска.
            </h2>
            <p>
              Начните выпуск продукции под собственным брендом уже через
              несколько недель после оформления заказа.
            </p>
            <h2 className="text-xl font-bold text-center my-3 ">
              Гибкость производства.
            </h2>
            <p>
              Мы изготавливаем как опытные партии для тестирования рынка, так и
              крупносерийные заказы.
            </p>
            <h2 className="text-xl font-bold text-center my-3 ">
              Контроль качества.
            </h2>
            <p>
              На каждом этапе производства действует строгая система контроля,
              гарантирующая соответствие изделий вашим требованиям.
            </p>
            <h2 className="text-xl font-bold text-center my-3 ">
              Мы изготавливаем изделия для:
            </h2>
            <ul className="list-disc pl-5">
              <li>торгового оборудования (стойки, витрины, стеллажи)</li>
              <li>рамы инсталляций подвесных унитазов</li>
              <li>мебельный крепеж (уголки стажки кронштейны)</li>
              <li>Каркасы для мебели лофт</li>
              <li>
                строительной отрасли (фасадные элементы, ограждения, крепеж)
              </li>
              <li>бытового назначения (корзины, полки, органайзеры)</li>
            </ul>
            <h2 className="text-xl font-bold text-center my-3 ">
              Как мы работаем: этапы сотрудничества
            </h2>
            <ul className="list-disc pl-5">
              <li>
                <span className="font-black">Техническое задание.</span> Вы
                предоставляете чертежи, эскизы или подробное описание изделия.
                Наши инженеры помогут доработать документацию при необходимости.
              </li>
              <li>
                <span className="font-black">Расчёт стоимости.</span> Мы готовим
                детальное коммерческое предложение с указанием сроков и цены.
              </li>
              <li>
                <span className="font-black">Изготовление прототипа.</span>{" "}
                Создаём опытный образец для согласования всех параметров.
              </li>
              <li>
                <span className="font-black">Серийное производство.</span>{" "}
                Запускаем выпуск партии согласно утверждённому образцу.
              </li>
              <li>
                <span className="font-black">Контроль и отгрузка.</span>{" "}
                Проверяем качество готовой продукции и организуем доставку на
                ваш склад.
              </li>
            </ul>
            <h2 className="text-xl font-bold text-center my-3 ">
              Работаем по всей России — организуем доставку готовой продукции в
              любой регион.
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
