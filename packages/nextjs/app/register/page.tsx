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
      <div className="text-center mt-8 bg-secondary p-10">
        <h1 className="text-4xl my-0">Registration Page</h1>
      </div>
    </>
  );
};

export default RegisterPage;
