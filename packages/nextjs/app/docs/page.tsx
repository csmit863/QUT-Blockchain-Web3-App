import { Docs } from "./_components/Docs";
import { About } from "./_components/About";
import type { NextPage } from "next";
import { getMetadata } from "~~/utils/scaffold-eth/getMetadata";

export const metadata = getMetadata({
  title: "Documentation",
  description: "QUT Blockchain Club Docs",
});

const DocsPage: NextPage = () => {
  return (
    <>
      <About />
      
      <div className="text-center mt-8 bg-secondary p-10">
        <h1 className="text-4xl my-0">Documentation & About</h1>
        <Docs />
      </div>
      <div className="text-center mt-8 bg-secondary p-10">
        <h1 className="text-4xl my-0">Helpful Resources</h1>
          <p>TODO: compile list of all helpful resources: devcon, eth foundation, taproot wizards, twitter profiles, documentation, awesome githubs, scaffold eth/austingriffiths, sort by experience level and most highly rated, date uploaded, add tags and search by tags</p>
      </div>
    </>
  );
};

export default DocsPage;
