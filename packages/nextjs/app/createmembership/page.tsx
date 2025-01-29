import { CreateMembershipComponent } from "./_components/CreateMembership";
import type { NextPage } from "next";
import { getMetadata } from "~~/utils/scaffold-eth/getMetadata";

export const metadata = getMetadata({
  title: "Create Membership",
  description: "Create a membership using a special one time key",
});

const CreateMembership: NextPage = () => {
  return (
    <>
      <CreateMembershipComponent />
    </>
  );
};

export default CreateMembership;
