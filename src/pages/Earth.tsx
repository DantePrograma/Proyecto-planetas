import { Planet } from "../components/Planet";
import { earthData } from "./earthData";

export const Earth = () => {
  return <Planet {...earthData} />;
};
