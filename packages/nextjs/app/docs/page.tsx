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
      <Docs />
      <div className="text-center mt-8 bg-secondary p-10">
        <h1 className="text-4xl my-0">Documentation & About</h1>
      </div>
    </>
  );
};

export default DocsPage;
