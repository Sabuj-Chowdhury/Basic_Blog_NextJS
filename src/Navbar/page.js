"use client";

import { LoginLink } from "@kinde-oss/kinde-auth-nextjs";
import Link from "next/link";

const page = () => {
  return (
    <nav className="border border-red-500 container mx-auto py-4 flex justify-between gap-2">
      {/* name */}
      <h2>Blog</h2>
      <div>
        <ul className="flex justify-center items-center gap-4">
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/profile">
            <li>Profile</li>
          </Link>
          <li>
            <LoginLink>Login</LoginLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default page;
