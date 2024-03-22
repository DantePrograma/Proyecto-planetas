import { Planet } from "../../components/Planet";
import { venusData } from "./VenusData";

export const Venus = () => {
  return <Planet {...venusData} />;
};
