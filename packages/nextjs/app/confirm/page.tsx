import type { NextPage } from "next";
import { getMetadata } from "~~/utils/scaffold-eth/getMetadata";
import { Confirm } from "./_components/Confirm";

export const metadata = getMetadata({
  title: "Confirm Registration",
  description: "Confirm registration for club membership",
});

const ConfirmPage: NextPage = () => {
  return (
    <>
      <Confirm />
      
    </>
  );
};

export default ConfirmPage;
