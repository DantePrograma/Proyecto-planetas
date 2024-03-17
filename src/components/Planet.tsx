import { useEffect, useState } from "react";

interface PlanetProps {
  name: string;
  overview: {
    content: string;
    source: string;
    image: string;
  };
  structure: {
    content: string;
    source: string;
    image: string;
  };
  geology: {
    content: string;
    source: string;
    image: string;
    geo: string;
  };
  sectionColor: string;
  desktopImgWidth: string;
  tabletImgWidth: string;
  mobileImgWidth: string;
  rotation: string;
  revolution: string;
  radius: string;
  temperature: string;
}

export const Planet = (props: PlanetProps) => {
  const [data, setData] = useState(props.overview);

  const handleDataOverview = () => {
    setData(props.overview);
  };

  const handleDataStructure = () => {
    setData(props.structure);
  };

  const handleDataSurface = () => {
    setData(props.geology);
  };

  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  const [imageWidth, setImageWidth] = useState<string>(props.desktopImgWidth);

  //jejej

  useEffect(() => {
    const updateWindowWidth = () => {
      const currentWindowWidth = window.innerWidth;
      setWindowWidth(currentWindowWidth);

      if (currentWindowWidth === null) {
        console.error("Window width is null");
        return;
      }

      let imageWidthToSet = props.desktopImgWidth;
      if (currentWindowWidth < 768) {
        imageWidthToSet = props.mobileImgWidth;
      } else if (currentWindowWidth < 1024) {
        imageWidthToSet = props.tabletImgWidth;
      }

      setImageWidth(imageWidthToSet);
    };

    updateWindowWidth();

    window.addEventListener("resize", updateWindowWidth);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener("resize", updateWindowWidth);
    };
  }, []);

  return (
    <section className="mx-auto max-w-6xl text-white specialGrid">
      <article className="imagen flex items-center justify-center animate-fade-right animate-once animate-duration-[500ms] animate-delay-[500ms] animate-ease-linear">
        <div className="relative flex items-center justify-center flex-col ">
          <img
            height={"auto"}
            width={imageWidth}
            src={data.image}
            alt={`${props.name} img`}
          />

          {data === props.geology && (
            <img
              className="h-auto w-40 absolute bottom-[-50px] "
              src={props.geology.geo}
              alt={`${props.name} geology img`}
            />
          )}
        </div>
      </article>

      <article className="planetInfo flex flex-col md:justify-between lg:justify-end animate-fade-right animate-once animate-duration-[500ms] animate-delay-[500ms] animate-ease-linear">
        <h1 className="md:text-5xl lg:text-7xl uppercase font-antonio lg:mb-10 ">
          {props.name}
        </h1>
        <p className="text-[#ACAEBC] lg:text-[14px] md:text-[11px] font-spartan leading-6 font-normal max-w-[500px] lg:min-h-[170px] ">
          {data.content}
        </p>

        <div className="flex gap-2 text-[#ACAEBC] text-[14px]">
          <span>Source:</span>
          <a
            className="flex items-center gap-1 font-semibold underline"
            href={data.source}
          >
            {" "}
            Wikipedia{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 mt-[2px] "
            >
              <path d="M6.22 8.72a.75.75 0 0 0 1.06 1.06l5.22-5.22v1.69a.75.75 0 0 0 1.5 0v-3.5a.75.75 0 0 0-.75-.75h-3.5a.75.75 0 0 0 0 1.5h1.69L6.22 8.72Z" />
              <path d="M3.5 6.75c0-.69.56-1.25 1.25-1.25H7A.75.75 0 0 0 7 4H4.75A2.75 2.75 0 0 0 2 6.75v4.5A2.75 2.75 0 0 0 4.75 14h4.5A2.75 2.75 0 0 0 12 11.25V9a.75.75 0 0 0-1.5 0v2.25c0 .69-.56 1.25-1.25 1.25h-4.5c-.69 0-1.25-.56-1.25-1.25v-4.5Z" />
            </svg>
          </a>
        </div>
      </article>

      <article className="md:flex md:justify-end lg:block planetButtons animate-fade-right animate-once animate-duration-[500ms] animate-delay-[500ms] animate-ease-linear border-b-slate-600 border-b-[1px] md:border-0">
        <div className="flex justify-center md:flex-col md:w-72 lg:w-full md:justify-center text-[13px] md:text-[12px] lg:text-[17px] h-full md:gap-3 lg:gap-5 text-left text-[#ACAEBC] md:text-white">
          <button
            style={{
              backgroundColor:
                data === props.overview && windowWidth >= 768
                  ? props.sectionColor
                  : "transparent",
              color:
                data === props.overview && windowWidth <= 768 ? "white" : "",
              borderBottom:
                data === props.overview && windowWidth <= 768
                  ? `4px solid ${props.sectionColor}`
                  : "",
            }}
            className="text-left md:border-slate-600 md:border-[1px] tracking-[0.15rem] md:before:font-bold md:before:content-['01'] md:before:pr-3 md:before:font-spartan md:before:mt-[5px] md:before:text-[13px] md:before:text-[#ACAEBC] font-normal transition duration-300 px-6 py-[10px] font-antonio"
            onClick={handleDataOverview}
          >
            OVERVIEW
          </button>
          <button
            style={{
              backgroundColor:
                data === props.structure && windowWidth >= 768
                  ? props.sectionColor
                  : "transparent",
              color:
                data === props.structure && windowWidth <= 768 ? "white" : "",
              borderBottom:
                data === props.structure && windowWidth <= 768
                  ? `4px solid ${props.sectionColor}`
                  : "",
            }}
            className="text-left md:border-slate-600 md:border-[1px] tracking-[0.15rem] md:before:font-bold md:before:content-['02'] md:before:pr-3 md:before:font-spartan md:before:mt-[5px] md:before:text-[13px] md:before:text-[#ACAEBC] font-normal transition duration-300 px-6 py-[10px] font-antonio"
            onClick={handleDataStructure}
          >
            INTERNAL ESTRUCTURE
          </button>
          <button
            style={{
              backgroundColor:
                data === props.geology && windowWidth >= 768
                  ? props.sectionColor
                  : "transparent",
              color:
                data === props.geology && windowWidth <= 768 ? "white" : "",
              borderBottom:
                data === props.geology && windowWidth <= 768
                  ? `4px solid ${props.sectionColor}`
                  : "",
            }}
            className="text-left md:border-slate-600 md:border-[1px] tracking-[0.15rem] md:before:font-bold md:before:content-['03'] md:before:pr-3 md:before:font-spartan md:before:mt-[5px] md:before:text-[13px] md:before:text-[#ACAEBC] font-normal transition duration-300 px-6 py-[10px] font-antonio"
            onClick={handleDataSurface}
          >
            SURFACE GEOLOGY
          </button>
        </div>
      </article>

      <article className="footer animate-fade-right animate-once animate-duration-[500ms] animate-delay-[500ms] animate-ease-linear">
        <div className="flex items-start justify-between gap-7 w-full">
          <div className="md:p-4 lg:p-6 border-slate-600 border-[1px] w-full">
            <h4 className="font-spartan text-[#ACAEBC] font-bold tracking-wider md:text-[9px] lg:text-[11px]">
              ROTATION TIME
            </h4>
            <p className="md:text-[25px] lg:text-[35px] uppercase font-antonio">
              {props.rotation}
            </p>
          </div>
          <div className="md:p-4 lg:p-6 border-slate-600 border-[1px] w-full">
            <h4 className="font-spartan text-[#ACAEBC] tracking-wider font-bold md:text-[9px] lg:text-[11px]">
              REVOLUTION TIME
            </h4>
            <p className="md:text-[25px] lg:text-[35px] uppercase font-antonio">
              {props.revolution}
            </p>
          </div>
          <div className="md:p-4 lg:p-6 border-slate-600 border-[1px] w-full">
            <h4 className="font-spartan text-[#ACAEBC] tracking-wider font-bold md:text-[9px] lg:text-[11px]">
              RADIUS
            </h4>
            <p className="md:text-[25px] lg:text-[35px] uppercase font-antonio">
              {props.radius}
            </p>
          </div>
          <div className="md:p-4 lg:p-6 border-slate-600 border-[1px] w-full">
            <h4 className="font-spartan text-[#ACAEBC] tracking-wider font-bold md:text-[9px] lg:text-[11px]">
              AVERAGE TEMP.
            </h4>
            <p className="md:text-[25px] lg:text-[35px] uppercase font-antonio">
              {props.temperature}
            </p>
          </div>
        </div>
      </article>
    </section>
  );
};
