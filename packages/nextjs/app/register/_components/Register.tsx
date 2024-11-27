"use client";
import Link from "next/link";
import { InputBase } from "~~/components/scaffold-eth";
import { useState } from "react";

export function Register() {
  const [email, setEmail] = useState<string>();
  return (
    <div className="flex flex-col gap-y-6 lg:gap-y-8 py-8 lg:py-12 justify-center items-center">
      hello this is the registration page
      <InputBase name="email" placeholder="email" value={email} onChange={setEmail} />
      <Link href="/confirm" className="btn btn-primary rounded-md"> 
        Send Email Confirmation
      </Link>
    </div>
  );
}
