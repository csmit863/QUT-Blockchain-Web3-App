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
      <Members />
      <div className="text-center mt-8 bg-secondary p-10">
        <h1 className="text-4xl my-0">Members Page</h1>
      </div>
    </>
  );
};

export default MembersPage;
