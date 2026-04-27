import logo from "../../../public/img/header/logo.png";
import Social from "./social";
import Image from "next/image";
import Link from "next/link";
import { AiFillPhone, AiFillMail } from "react-icons/ai";

import { phone, phoneNumber, mail } from "../../../public/contakts/contakts";

export default function FirstLine() {
  return (
    <div className="bg-black">
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center flex-wrap">
          <Link href="/">
            <Image src={logo} alt="logo" width={300} height={75} className="" />
          </Link>
          <div className="flex flex-col gap-2">
            <Link
              className="transition delay-150 duration-300 ease-in-out flex gap-1  text-(--link-color) hover:text-(--link-hover) "
              href={`tel: ${phoneNumber}`}
            >
              <AiFillPhone
                style={{
                  width: "24px",
                  height: "24px",
                  color: "inherit",
                }}
              />
              <span className="">{phone}</span>
            </Link>
            <Link
              className="transition delay-150 duration-300 ease-in-out flex gap-1 text-(--link-color) hover:text-(--link-hover)"
              href={`mailto: ${mail}`}
            >
              <AiFillMail
                style={{
                  width: "24px",
                  height: "24px",
                  color: "inherit",
                }}
              />
              <span className="">{mail}</span>
            </Link>
          </div>
          <Social />
        </div>
      </div>
    </div>
  );
}
