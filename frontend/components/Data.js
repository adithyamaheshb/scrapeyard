import { useContext } from "react";
import { ScrapeContext } from "./ScrapeContext";

export default function Data() {
  const scrapeData = useContext(ScrapeContext);
  return (
    <div>
      <h1>Your Data:</h1>
    </div>
  );
}
