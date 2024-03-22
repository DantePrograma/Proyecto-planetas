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

const updateWindowWidth = (
  props: PlanetProps,
  setWindowWidth: React.Dispatch<React.SetStateAction<number>>,
  setImageWidth: React.Dispatch<React.SetStateAction<string>>,
  setGeoImgWidth: React.Dispatch<React.SetStateAction<string>>
) => {
  const currentWindowWidth = window.innerWidth;

  if (currentWindowWidth == null) {
    console.error("Window width is null or undefined");
    return;
  }

  setWindowWidth(currentWindowWidth);

  let imageWidthToSet = props.desktopImgWidth;
  let geoImgWidthToSet = "160px";
  if (currentWindowWidth < 768) {
    imageWidthToSet = props.mobileImgWidth;
    geoImgWidthToSet = "80px";
  } else if (currentWindowWidth < 1024) {
    imageWidthToSet = props.tabletImgWidth;
    geoImgWidthToSet = "120px";
  }

  setImageWidth(imageWidthToSet);
  setGeoImgWidth(geoImgWidthToSet);
};

export const useReplaceInfo = (props: PlanetProps) => {
  const [data, setData] = useState(props.overview);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [imageWidth, setImageWidth] = useState(props.desktopImgWidth);
  const [geoImgWidth, setGeoImgWidth] = useState("80px");

  useEffect(() => {
    const handleResize = () => {
      updateWindowWidth(props, setWindowWidth, setImageWidth, setGeoImgWidth);
    };

    updateWindowWidth(props, setWindowWidth, setImageWidth, setGeoImgWidth);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [props]);

  const handleDataOverview = () => {
    setData(props.overview);
  };

  const handleDataStructure = () => {
    setData(props.structure);
  };

  const handleDataSurface = () => {
    setData(props.geology);
  };

  return {
    data,
    handleDataOverview,
    handleDataStructure,
    handleDataSurface,
    windowWidth,
    imageWidth,
    geoImgWidth,
  };
};
