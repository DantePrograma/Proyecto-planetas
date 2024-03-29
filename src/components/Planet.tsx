import { useReplaceInfo } from "../hooks/useReplaceInfo";

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
  const {
    data,
    handleDataOverview,
    handleDataStructure,
    handleDataSurface,
    windowWidth,
    imageWidth,
    geoImgWidth,
  } = useReplaceInfo(props);

  return (
    <section className="mx-auto max-w-6xl text-white specialGrid">
      <article className="imagen flex items-center justify-center animate-fade-right animate-once animate-duration-[500ms] animate-delay-[500ms] animate-ease-linear">
        <div className="relative flex items-center justify-center flex-col lg:min-h-[630px] lg:max-h-[630px]">
          <img
            height={"auto"}
            width={imageWidth}
            src={data.image}
            alt={`${props.name} img`}
          />

          {data === props.geology && (
            <img
              height={"auto"}
              width={geoImgWidth}
              className="absolute bottom-[-15px]"
              src={props.geology.geo}
              alt={`${props.name} geology img`}
            />
          )}
        </div>
      </article>

      <article className="planetInfo px-6 md:px-0 text-center md:text-left flex flex-col  md:gap-0 justify-between lg:justify-end animate-fade-right animate-once animate-duration-[500ms] animate-delay-[500ms] animate-ease-linear">
        <h1 className="text-3xl md:text-5xl lg:text-7xl uppercase font-antonio lg:mb-10 ">
          {props.name}
        </h1>
        <p className="text-[#ACAEBC] text-[12px] lg:text-[14px] md:text-[11px] font-spartan leading-6 font-normal md:max-w-[500px] lg:min-h-[170px] ">
          {data.content}
        </p>

        <div className="flex justify-center items-center md:justify-start gap-2 text-[#ACAEBC] text-[14px]">
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
        <div className="flex justify-evenly md:flex-col md:w-72 lg:w-full md:justify-center text-[14px] md:text-[12px] lg:text-[17px] h-full md:gap-3 lg:gap-5 text-left text-[#ACAEBC] md:text-white">
          <button
            style={{
              backgroundColor:
                data === props.overview && windowWidth >= 768
                  ? props.sectionColor
                  : "",
              color:
                data === props.overview && windowWidth <= 768 ? "white" : "",
              borderBottom:
                data === props.overview && windowWidth <= 768
                  ? `4px solid ${props.sectionColor}`
                  : "",
            }}
            className="text-left md:border-slate-600 md:border-[1px] tracking-[0.15rem] md:before:font-bold md:before:content-['01'] md:before:pr-3 md:before:font-spartan md:before:mt-[5px] md:before:text-[13px] md:before:text-[#ACAEBC] font-normal transition duration-300 py-2 md:px-6 md:py-[10px] font-antonio hover:bg-slate-600"
            onClick={handleDataOverview}
          >
            OVERVIEW
          </button>
          <button
            style={{
              backgroundColor:
                data === props.structure && windowWidth >= 768
                  ? props.sectionColor
                  : "",
              color:
                data === props.structure && windowWidth <= 768 ? "white" : "",
              borderBottom:
                data === props.structure && windowWidth <= 768
                  ? `4px solid ${props.sectionColor}`
                  : "",
            }}
            className="text-left md:border-slate-600 md:border-[1px] tracking-[0.15rem] md:before:font-bold md:before:content-['02'] md:before:pr-3 md:before:font-spartan md:before:mt-[5px] md:before:text-[13px] md:before:text-[#ACAEBC] font-normal transition duration-300 py-2 md:px-6 md:py-[10px] font-antonio hover:bg-slate-600"
            onClick={handleDataStructure}
          >
            {windowWidth < 768 ? "STRUCTURE" : "INTERNAL ESTRUCTURE"}
          </button>
          <button
            style={{
              backgroundColor:
                data === props.geology && windowWidth >= 768
                  ? props.sectionColor
                  : "",
              color:
                data === props.geology && windowWidth <= 768 ? "white" : "",
              borderBottom:
                data === props.geology && windowWidth <= 768
                  ? `4px solid ${props.sectionColor}`
                  : "",
            }}
            className="text-left md:border-slate-600 md:border-[1px] tracking-[0.15rem] md:before:font-bold md:before:content-['03'] md:before:pr-3 md:before:font-spartan md:before:mt-[5px] md:before:text-[13px] md:before:text-[#ACAEBC] font-normal transition duration-300 py-2 md:px-6 md:py-[10px] font-antonio hover:bg-slate-600"
            onClick={handleDataSurface}
          >
            {windowWidth < 768 ? "SURFACE" : "SURFACE GEOLOGY"}
          </button>
        </div>
      </article>

      <article className="pb-5 md:pb-0 footer animate-fade-right animate-once animate-duration-[500ms] animate-delay-[500ms] animate-ease-linear">
        <div className="flex flex-col px-6 md:px-0 md:flex-row items-start justify-between gap-2 md:gap-7 w-full">
          <div className="md:p-4 lg:p-6 flex items-center md:items-start md:flex-col justify-between p-3 border-slate-600 border-[1px] w-full">
            <h4 className="font-spartan text-[#ACAEBC] font-bold tracking-wider text-[13px] md:text-[9px] lg:text-[11px]">
              ROTATION TIME
            </h4>
            <p className="text-[18px] md:text-[25px] lg:text-[35px] uppercase font-antonio">
              {props.rotation}
            </p>
          </div>
          <div className="md:p-4 lg:p-6 flex items-center justify-between md:items-start md:flex-col p-3 border-slate-600 border-[1px] w-full">
            <h4 className="font-spartan text-[#ACAEBC] tracking-wider font-bold text-[13px] md:text-[9px] lg:text-[11px]">
              REVOLUTION TIME
            </h4>
            <p className="text-[18px] md:text-[25px] lg:text-[35px] uppercase font-antonio">
              {props.revolution}
            </p>
          </div>
          <div className="md:p-4 lg:p-6 flex items-center justify-between md:items-start md:flex-col p-3 border-slate-600 border-[1px] w-full">
            <h4 className="font-spartan text-[#ACAEBC] tracking-wider font-bold text-[13px] md:text-[9px] lg:text-[11px]">
              RADIUS
            </h4>
            <p className="text-[18px] md:text-[25px] lg:text-[35px] uppercase font-antonio">
              {props.radius}
            </p>
          </div>
          <div className="md:p-4 lg:p-6 flex items-center justify-between md:items-start md:flex-col p-3 border-slate-600 border-[1px] w-full">
            <h4 className="font-spartan text-[#ACAEBC] tracking-wider font-bold text-[13px] md:text-[9px] lg:text-[11px]">
              AVERAGE TEMP.
            </h4>
            <p className="text-[18px] md:text-[25px] lg:text-[35px] uppercase font-antonio">
              {props.temperature}
            </p>
          </div>
        </div>
      </article>
    </section>
  );
};
