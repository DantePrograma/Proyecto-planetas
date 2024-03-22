import { Planet } from "../../components/Planet";
import { MarsData } from "./MarsData";

export const Mars = () => {
  return <Planet {...MarsData} />;
};
