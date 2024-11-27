"use client";
import Link from "next/link";

export function Members() {

  return (
    <div className="flex flex-col gap-y-6 lg:gap-y-8 py-8 lg:py-12 justify-center items-center">
      hello this is the members page
      <Link href={"/members/csmit863"} className="btn btn-primary rounded-md">
          <span>csmit863's page</span>
        </Link>
    </div>
  );
}
