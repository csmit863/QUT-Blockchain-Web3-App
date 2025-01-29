import { About } from "./_components/About";
import type { NextPage } from "next";
import { getMetadata } from "~~/utils/scaffold-eth/getMetadata";

export const metadata = getMetadata({
  title: "Documentation",
  description: "QUT Blockchain Club Docs",
});

/**
 * Should the below be kept in a database or just hardcoded?
 *
 */
/**<p>TODO: compile list of all helpful resources: 
          twitter profiles, documentation, awesome githubs, scaffold eth/austingriffiths, 
          sort by experience level and most highly rated, date uploaded, add tags and search by tags</p> */
const helpfulResources = [
  {
    name: "Scaffold-ETH 2",
    source: "https://github.com/scaffold-eth/scaffold-eth-2",
    tags: ["beginner", "development", "ethereum"],
    date: "2024-01-01",
  },
  {
    name: "Ethereum.org",
    source: "https://ethereum.org/en/",
    tags: ["research", "beginner", "ethereum"],
    date: "2023-06-15",
  },
  { name: "Devcon", source: "https://devcon.org/", tags: ["conference", "events"], date: "2023-10-01" },
  { name: "Austin Griffiths", source: "https://austingriffith.com/", tags: ["beginner", "development", "ethereum"] },
  {
    name: "Taproot Wizards",
    source: "https://taprootwizards.com/",
    tags: ["nft", "development", "bitcoin", "ordinals"],
  },
  {
    name: "Awesome Ethereum",
    source: "https://github.com/ttumiel/Awesome-Ethereum",
    tags: ["github", "beginner", "ethereum", "development"],
  },
];

const DocsPage: NextPage = () => {
  return (
    <>
      <div className="text-center mt-8 bg-secondary p-10">
        <h1 className="text-4xl my-0">Documentation & About</h1>
        <About />
      </div>

      <div className="text-center mt-8 bg-secondary p-10">
        <h1 className="text-4xl my-0">Contact Details</h1>
        Email: qutbtc@gmail.com <br />
      </div>

      <div className="text-center mt-8 bg-secondary p-10">
        <h1 className="text-4xl my-0">QUT Testnet Details</h1>
        <p>RPC URL: https://testnet.qutblockchain.club</p>
        <p>Chain ID: 452</p>
      </div>

      <div className="text-center mt-8 bg-secondary p-10">
        <h1 className="text-4xl my-0">Helpful Resources</h1>
        <ul className="list-disc list-inside mt-4">
          {helpfulResources.map((resource, index) => (
            <li key={index} className="my-2">
              <a href={resource.source} className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">
                {resource.name}
              </a>
              <span className="text-sm text-gray-400"> ({resource.tags.join(", ")})</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default DocsPage;
