"use client";

import {
  LoginLink,
  LogoutLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import Link from "next/link";

const Navbar = () => {
  const { user, getUser } = useKindeBrowserClient();
  const alsoUser = getUser();

  // console.log(alsoUser);

  return (
    <nav className="bg-black text-white py-4 px-6 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Blog Name */}
        <h2 className="text-4xl font-bold">Blog</h2>

        {/* Navigation Links */}
        <div>
          <ul className="flex space-x-6 gap-6 text-lg">
            <li>
              <Link href="/" className="hover:text-gray-400 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/profile"
                className="hover:text-gray-400 transition-colors"
              >
                Profile
              </Link>
            </li>

            {user ? (
              <div>
                <LogoutLink className="ml-4 hover:underline">
                  Log out
                </LogoutLink>
              </div>
            ) : (
              <div>
                <LoginLink postLoginRedirectURL="/profile" className="mr-4">
                  Sign in
                </LoginLink>
                <RegisterLink postLoginRedirectURL="/profile">
                  Sign up
                </RegisterLink>
              </div>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
