import { Planet } from "../components/Planet";
import { mercuryData } from "./MercuryData";

export const Mercury = () => {
  return <Planet {...mercuryData} />;
};
