import { Planet } from "../../components/Planet";
import { saturnData } from "./SaturnData";

export const Saturn = () => {
  return <Planet {...saturnData} />;
};
