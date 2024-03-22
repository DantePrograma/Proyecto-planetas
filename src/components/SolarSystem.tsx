import { Link } from "react-router-dom";
import earthImage from "../pages/assets/planet-earth.svg";
import mercuryImg from "../pages/assets/planet-mercury.svg";
import venusImg from "../pages/assets/planet-venus.svg";
import marsImg from "../pages/assets/planet-mars.svg";
import jupiterImg from "../pages/assets/planet-jupiter.svg";
import saturnImg from "../pages/assets/planet-saturn.svg";
import uranusImg from "../pages/assets/planet-uranus.svg";
import neptuneImg from "../pages/assets/planet-neptune.svg";
import sunImg from "../pages/assets/sun.png";

export const SolarSystem = () => {
  return (
    <nav className="min-h-screen overflow-hidden relative flex flex-col-reverse items-center justify-center gap-2 animate-once  animate-ease-in-out animate-fade  animate-duration-[4500ms] animate-delay-0 ">
      <div className="">
        <img
          className="w-[85px] shadow-[0_0_10px_2px_rgba(255,107,0,0.4),_0_0_22px_11px_rgba(255,203,0,0.13)] rounded-full"
          src={sunImg}
          alt="sun img"
        />
      </div>

      <Link
        className="z-[100] hover:border-[#4793b9] transition w-[110px] h-[110px] border-[1px] rounded-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] border-[#fcfeff1e] flex items-start justify-center"
        to={"Mercury"}
      >
        <img
          className="w-[10px] mt-[-5px] hover:scale-y-150"
          src={mercuryImg}
          alt="mercury img"
        />
      </Link>

      <Link
        className="z-[90] hover:border-[#dede50] transition w-[150px] h-[150px] border-[1px] rounded-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] border-[#fcfeff1e] flex items-start justify-center"
        to={"Venus"}
      >
        <img className="w-[16px] mt-[-8px]" src={venusImg} alt="venus img" />
      </Link>

      <Link
        className="z-[80] hover:border-[#547cff] transition w-[190px] h-[190px] border-[1px] rounded-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] border-[#fcfeff1e] flex items-start justify-center"
        to={"Earth"}
      >
        <img className="w-[16px] mt-[-10px]" src={earthImage} alt="earth img" />
      </Link>

      <Link
        className="z-[70] hover:border-[#ff7f00] transition w-[240px] h-[240px] border-[1px] rounded-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] border-[#fcfeff1e] flex items-start justify-center"
        to={"Mars"}
      >
        <img className="w-[16px] mt-[-8px]" src={marsImg} alt="mars img" />
      </Link>

      <Link
        className="z-[60] hover:border-[#ffa200] transition w-[300px] h-[300px] border-[1px] rounded-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] border-[#fcfeff1e] flex items-start justify-center"
        to={"Jupiter"}
      >
        <img
          className="w-[30px] mt-[-15px]"
          src={jupiterImg}
          alt="jupiter img"
        />
      </Link>

      <Link
        className="z-[50] w-[380px] hover:border-[#fff700] transition h-[380px] border-[1px] rounded-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] border-[#fcfeff1e] flex items-start justify-center"
        to={"Saturn"}
      >
        <img className="w-[40px] mt-[-20px]" src={saturnImg} alt="saturn img" />
      </Link>

      <Link
        className="z-[40] w-[460px] h-[460px] hover:border-[#65F0D5] transition border-[1px] rounded-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] border-[#fcfeff1e] flex items-start justify-center"
        to={"Uranus"}
      >
        <img className="w-[16px] mt-[-10px]" src={uranusImg} alt="uranus img" />
      </Link>

      <Link
        className="z-[30] w-[540px] h-[540px] hover:border-[#3D6FE3] transition border-[1px] rounded-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] border-[#fcfeff1e] flex items-start justify-center"
        to={"Neptune"}
      >
        <img
          className="w-[16px] mt-[-10px]"
          src={neptuneImg}
          alt="neptune img"
        />
      </Link>
    </nav>
  );
};
