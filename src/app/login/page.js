"use client";

import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs";

const LoginPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl">Welcome to Blog</h1>
      <p className="text-lg mb-4">Log in or sign up to access your account</p>

      <div>
        <LoginLink
          postLoginRedirectURL="/profile"
          className="mr-4 bg-black p-3 rounded text-white"
        >
          Sign in
        </LoginLink>
        <RegisterLink
          postLoginRedirectURL="/profile"
          className="bg-black p-3 rounded text-white"
        >
          Sign up
        </RegisterLink>
      </div>
    </div>
  );
};

export default LoginPage;
