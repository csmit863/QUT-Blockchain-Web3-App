"use client";
import { useEffect, useState } from "react";


export const CreateMembershipComponent: React.FC = () => {
  const [jwt, setJwt] = useState<string | null>(null);
  const [membershipCreated, setMembershipCreated] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Extract JWT from URL hash
    const hash = window.location.hash; // e.g., #your-jwt-token
    if (hash) {
      const token = hash.substring(1); // Remove the '#' and get the token
      setJwt(token);
    }
  }, []);

  useEffect(() => {
    // Handle membership creation using the JWT
    const createMembership = async () => {
      if (!jwt) return;

      try {
        const response = await fetch("http://localhost:5000/api/create-membership", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ data: jwt }),
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }

        const result = await response.json();
        console.log("Membership created successfully:", result);
        setMembershipCreated(true);
      } catch (err) {
        console.error("Failed to create membership:", err);
        setError("Failed to create membership. Please try again later.");
      }
    };

    createMembership();
  }, [jwt]);

  return (
    <div className="flex flex-col gap-y-6 lg:gap-y-8 py-8 lg:py-12 justify-center items-center">
      <h1 className="text-xl font-semibold">Create Membership</h1>
      {membershipCreated ? (
        <p>Membership created successfully!</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <p>Processing your membership...</p>
      )}
    </div>
  );
};
