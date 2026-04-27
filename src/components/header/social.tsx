import Link from "next/link";
import Image from "next/image";
import { FaWhatsapp, FaTelegram } from "react-icons/fa";
import { phoneNumber } from "../../../public/contakts/contakts";
import max from "../../../public/img/header/max-messenger-sign-logo.svg";
const Social = () => {
  return (
    <div className="flex gap-2 ">
      <Link
        href={`"https://max.im/ваш_логин" target="_blank"`}
        className="transition delay-150 duration-300 ease-in-out flex gap-1 text-(--link-color) hover:text-(--link-hover) flex-col items-center"
      >
        <Image src={max} alt="logo" width={30} height={30} className="" />
        <span className="text-sm">Max</span>
      </Link>
      <Link
        href={`https://wa.me/${phoneNumber}`}
        className="transition delay-150 duration-300 ease-in-out flex gap-1 text-(--link-color) hover:text-(--link-hover) flex-col items-center"
      >
        <FaWhatsapp
          style={{
            width: "30px",
            height: "30px",
            color: "inherit",
          }}
        />
        <span className="text-sm">Watsapp</span>
      </Link>
      <Link
        href={`tg://resolve?domain=<@medkov77>`}
        className="transition delay-150 duration-300 ease-in-out flex gap-1 text-(--link-color) hover:text-(--link-hover) flex-col items-center"
      >
        <FaTelegram
          style={{
            width: "30px",
            height: "30px",
            color: "inherit",
          }}
        />
        <span className="text-sm">Telegramm</span>
      </Link>
    </div>
  );
};
export default Social;
