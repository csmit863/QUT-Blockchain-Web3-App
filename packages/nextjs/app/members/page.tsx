import { Members } from "./_components/Members";
import type { NextPage } from "next";
import { getMetadata } from "~~/utils/scaffold-eth/getMetadata";

export const metadata = getMetadata({
  title: "Club Members",
  description: "View all the members of the QUT Blockchain Club 🖥️",
});

const MembersPage: NextPage = () => {
  return (
    <>
      <div className="text-center mt-8 bg-secondary p-10">
        <h1 className="text-4xl my-0">Club Members</h1>
        {/**
         * It would be cool if each member had their own personal profile page that they could
         * share with others, e.g. on their resume/cv. The page could include their name, student number,
         * personal email, and a html or markdown page of their own creation. The page could then be uploaded
         * to IPFS for decentralised storage. The IPFS hashes could then be stored in a lightweight database, or 
         * dynamically render on the page when typed into the URL.
         */}
      </div>
      <Members />
    </>
  );
};

export default MembersPage;
