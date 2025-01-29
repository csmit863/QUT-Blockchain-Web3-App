import type { NextPage } from "next";
import { getMetadata } from "~~/utils/scaffold-eth/getMetadata";

type PageProps = {
  params: { member: string };
};

export const metadata = getMetadata({
  title: "Member Profile",
  description: "A detailed view of a selected member's page",
});

const ProfilePage = async ({ params }: PageProps) => {
  const member = params?.member as string;
  console.log("blah", member);
  return (
    <>
      <div className="text-center mt-8 bg-secondary p-10">
        <h1 className="text-4xl my-0">{member}'s Profile Page</h1>
      </div>
    </>
  );
};

export default ProfilePage;
