import { useState } from "react";
import { Link } from "react-router-dom";
import { MenuMobile } from "./MenuMobile";

export const Header = () => {
  const [clicked, setClicked] = useState(false);
  console.log(window.innerWidth);

  const handleClick = () => {
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
      setClicked(!clicked);
    }
  };

  return (
    <header className="text-white shadow-white-bottom min-h-[85px] flex items-center justify-center px-4">
      <div className="max-w-7xl mx-auto flex justify-between md:flex-col gap-8 md:p-9 lg:p-0 lg:flex-row lg:justify-between items-center w-full">
        <div>
          <Link
            className="font-antonio text-2xl text-center font-semibold"
            to={"/"}
          >
            THE PLANETS
          </Link>
        </div>

        <nav
          className={`${
            clicked
              ? "animate-fade-right absolute top-0 left-0 bottom-0 flex flex-col  text-white bg-gray-900 w-full z-10 pt-6 pl-6"
              : "hidden"
          } md:flex pt-2 md:items-center md:justify-center font-spartan gap-7 text-[20px] md:text-[12px] tracking-wider font-bold text-[#ACAEBC]`}
        >
          <Link
            onClick={handleClick}
            className="hover:text-white"
            to={"Mercury"}
          >
            MERCURY
          </Link>
          <Link onClick={handleClick} className="hover:text-white" to={"Venus"}>
            VENUS
          </Link>
          <Link onClick={handleClick} className="hover:text-white" to={"Earth"}>
            EARTH
          </Link>
          <Link onClick={handleClick} className="hover:text-white" to={"Mars"}>
            MARS
          </Link>
          <Link
            onClick={handleClick}
            className="hover:text-white"
            to={"Jupiter"}
          >
            JUPITER
          </Link>
          <Link
            onClick={handleClick}
            className="hover:text-white"
            to={"Saturn"}
          >
            SATURN
          </Link>
          <Link
            onClick={handleClick}
            className="hover:text-white"
            to={"Uranus"}
          >
            URANUS
          </Link>
          <Link
            onClick={handleClick}
            className="hover:text-white"
            to={"Neptune"}
          >
            NEPTUNE
          </Link>
        </nav>

        <div className="block md:hidden">
          <MenuMobile handleClick={handleClick} clicked={clicked} />
        </div>
      </div>
    </header>
  );
};
