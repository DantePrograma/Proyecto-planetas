import { useState } from "react";
import { Link } from "react-router-dom";
import { MenuMobile } from "./MenuMobile";
import earthImage from "../pages/assets/planet-earth.svg";
import mercuryImg from "../pages/assets/planet-mercury.svg";
import marsImg from "../pages/assets/planet-mars.svg";
import neptuneImg from "../pages/assets/planet-neptune.svg";
import saturnImg from "../pages/assets/planet-saturn.svg";
import jupiterImg from "../pages/assets/planet-jupiter.svg";
import uranusImg from "../pages/assets/planet-uranus.svg";
import venusImg from "../pages/assets/planet-venus.svg";

export const Header = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
      setClicked(!clicked);
    }
  };

  return (
    <header className="text-white shadow-white-bottom min-h-[85px] flex items-center justify-center px-4">
      <div className="max-w-7xl mx-auto flex justify-between md:flex-col gap-8 md:p-9 lg:p-0 lg:flex-row lg:justify-between items-center w-full">
        <div className=" z-[99999]">
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
              ? "animate-fade-right absolute top-0 left-0 bottom-0 flex flex-col text-white bg-gray-900 w-full z-10 pt-24 pl-4"
              : "hidden"
          } md:flex pt-2 md:items-center md:justify-center font-spartan gap-7 text-[16px] md:text-[11px] tracking-wider font-bold text-[#ACAEBC]`}
        >
          <Link
            onClick={handleClick}
            className="hover:text-white transition flex items-center gap-3"
            to={"Mercury"}
          >
            {clicked && (
              <img
                width={"20px"}
                height={"auto"}
                src={mercuryImg}
                alt="earth"
              ></img>
            )}
            MERCURY
          </Link>
          <Link
            onClick={handleClick}
            className="hover:text-white transition flex items-center gap-3"
            to={"Venus"}
          >
            {clicked && (
              <img
                width={"20px"}
                height={"auto"}
                src={venusImg}
                alt="earth"
              ></img>
            )}
            VENUS
          </Link>
          <Link
            onClick={handleClick}
            className="hover:text-white transition flex items-center gap-3"
            to={"Earth"}
          >
            {clicked && (
              <img
                width={"20px"}
                height={"auto"}
                src={earthImage}
                alt="earth"
              ></img>
            )}
            EARTH
          </Link>
          <Link
            onClick={handleClick}
            className="hover:text-white transition flex items-center gap-3"
            to={"Mars"}
          >
            {clicked && (
              <img
                width={"20px"}
                height={"auto"}
                src={marsImg}
                alt="earth"
              ></img>
            )}
            MARS
          </Link>
          <Link
            onClick={handleClick}
            className="hover:text-white transition flex items-center gap-3"
            to={"Jupiter"}
          >
            {clicked && (
              <img
                width={"20px"}
                height={"auto"}
                src={jupiterImg}
                alt="earth"
              ></img>
            )}
            JUPITER
          </Link>
          <Link
            onClick={handleClick}
            className="hover:text-white transition flex items-center gap-3"
            to={"Saturn"}
          >
            {clicked && (
              <img
                width={"20px"}
                height={"auto"}
                src={saturnImg}
                alt="earth"
              ></img>
            )}
            SATURN
          </Link>
          <Link
            onClick={handleClick}
            className="hover:text-white transition flex items-center gap-3"
            to={"Uranus"}
          >
            {clicked && (
              <img
                width={"20px"}
                height={"auto"}
                src={uranusImg}
                alt="earth"
              ></img>
            )}
            URANUS
          </Link>
          <Link
            onClick={handleClick}
            className="hover:text-white transition flex items-center gap-3"
            to={"Neptune"}
          >
            {clicked && (
              <img
                width={"20px"}
                height={"auto"}
                src={neptuneImg}
                alt="earth"
              ></img>
            )}
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
