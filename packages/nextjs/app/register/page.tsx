import { Register } from "./_components/Register";
import type { NextPage } from "next";
import { getMetadata } from "~~/utils/scaffold-eth/getMetadata";

export const metadata = getMetadata({
  title: "Club Members",
  description: "View all the members of the QUT Blockchain Club 🖥️",
});

const RegisterPage: NextPage = () => {
  return (
    <>
      <Register />
    </>
  );
};

export default RegisterPage;
