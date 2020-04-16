import { useEffect, useState } from "react";
import { ScrapeProvider } from "./ScrapeContext";

// Custom Hook
function useScrapes() {
  const [scrapes, setScrapes] = useState({ twitter: [], instagram: [] });

  useEffect(function() {
    (async () => {
      console.log("Mounting Or Updating");
      const res = await fetch("http://localhost:9672/data");
      const data = await res.json();
      console.warn(data);
      setScrapes(data);
    })();
  }, []);

  return scrapes;
}

export default function Page({ children }) {
  const scrapes = useScrapes();
  return (
    <ScrapeProvider value={{ scrapes }}>
      <div className="page"> {children} </div>{" "}
    </ScrapeProvider>
  );
}
