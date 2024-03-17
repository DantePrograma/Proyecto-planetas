import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="text-white shadow-white-bottom min-h-[85px] flex items-center justify-center px-4">
      <div className="max-w-7xl mx-auto flex flex-col gap-8 p-9 lg:p-0 lg:flex-row lg:justify-between items-center w-full">
        <div>
          <Link
            className="font-antonio text-2xl text-center font-semibold"
            to={"/"}
          >
            THE PLANETS
          </Link>
        </div>

        <nav className="flex pt-2 items-center justify-center font-spartan gap-7 text-[11px] tracking-wider font-bold text-[#ACAEBC]">
          <Link className="hover:text-white" to={"Mercury"}>
            MERCURY
          </Link>
          <Link className="hover:text-white" to={"Venus"}>
            VENUS
          </Link>
          <Link className="hover:text-white" to={"Earth"}>
            EARTH
          </Link>
          <Link className="hover:text-white" to={"Mars"}>
            MARS
          </Link>
          <Link className="hover:text-white" to={"Jupiter"}>
            JUPITER
          </Link>
          <Link className="hover:text-white" to={"Saturn"}>
            SATURN
          </Link>
          <Link className="hover:text-white" to={"Uranus"}>
            URANUS
          </Link>
          <Link className="hover:text-white" to={"Neptune"}>
            NEPTUNE
          </Link>
        </nav>
      </div>
    </header>
  );
};
