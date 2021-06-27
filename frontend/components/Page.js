import { useEffect, useState } from "react";
import { ScrapeProvider } from "./ScrapeContext";

// Custom Hook
function useScrapes() {
  //Initial State inside our hook
  const [scrapes, setScrapes] = useState({
    twitter: [],
    instagram: [],
  });

  //fetch function
  async function fetchScrapes() {
    const res = await fetch("http://localhost:9672/data");
    const data = await res.json();
    setScrapes(data);
  }

  useEffect(() => {
    fetchScrapes();
  }, []);

  return {
    scrapes,
    fetchScrapes,
  };
}

export default function Page({ children }) {
  const scrapes = useScrapes();
  return (
    <ScrapeProvider
      value={{
        scrapes,
      }}
    >
      <div className="page"> {children} </div>{" "}
    </ScrapeProvider>
  );
}
