import Link from "next/link";
import { AiFillPhone, AiFillMail } from "react-icons/ai";
import { phone, phoneNumber, mail } from "../../../public/contakts/contakts";
import Social from "../header/social";
export default function Footer() {
  return (
    <footer className="bg-black mt-auto">
      <div className="container mx-auto  p-4">
        <div className="flex justify-between items-center flex-wrap">
          <div className="text-(--link-color) text-xl font-bold">
            ООО Металлика
          </div>
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
    </footer>
  );
}
