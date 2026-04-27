"use client";
import React, { MouseEvent, FunctionComponent } from "react";
import Link from "next/link";
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
const Nav = () => {
  const menu: { name: string; link: string }[] = [
    { name: "Главная", link: "/" },
    { name: "О компании", link: "/about" },
    { name: "Каталог", link: "/katalog" },
    { name: "Примеры работ", link: "/example" },
    { name: "Контакты", link: "/contakts" },
  ];
  const pathname = usePathname();
  const [menuActive, setMenuActive] = useState(false);

  function openMenu(event: MouseEvent<HTMLDivElement>) {
    setMenuActive(true);
  }

  function closeMenu(this: HTMLElement): void {
    setMenuActive(false);
  }

  useEffect(() => {
    document.body.addEventListener("click", closeMenu);
    //document.body.addEventListener("click", handleCloseLogMenu);

    return function cleanup() {
      window.removeEventListener("click", closeMenu);
      //window.removeEventListener("click", handleCloseLogMenu);
    };
  }, []);
  return (
    <div className="p-3 bg-[#CAB069]">
      <nav className="container mx-auto ">
        <div className="text-black p-4 relative  md:hidden">
          {!menuActive ? (
            <div className="" onClick={openMenu}>
              <HiMenu
                style={{
                  width: "30px",
                  height: "30px",
                  color: "inherit",
                }}
              />
            </div>
          ) : (
            <div className="absolute top-0 right-0" onClick={closeMenu}>
              <IoClose
                style={{
                  width: "30px",
                  height: "30px",
                  color: "inherit",
                }}
              />
            </div>
          )}

          <div className={menuActive ? `block` : `hidden`}>
            <div className="flex flex-col gap-2">
              {menu.map((item) => {
                return (
                  <Link
                    href={item.link}
                    key={item.link}
                    className={
                      pathname === item.link
                        ? "font-bold"
                        : "text-black hover:text-gray-100"
                    }
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        <div className=" hidden md:block ">
          <div className="flex gap-2">
            {menu.map((item) => {
              return (
                <Link
                  href={item.link}
                  key={item.link}
                  className={
                    pathname === item.link
                      ? "font-bold text-xl"
                      : "text-black hover:text-gray-200 text-xl"
                  }
                  onClick={closeMenu}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Nav;
