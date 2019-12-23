import { ScrapeProvider } from "./ScrapeContext";

export default function Page({ children }) {
  return (
    <ScrapeProvider value={{ firstName: "AD", lastName: "B" }}>
      <div className="page">{children}</div>
    </ScrapeProvider>
  );
}
