"use client";

import { SignOutButton, UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";

const Navbar = () => {
  const { isSignedIn } = useUser();

  return (
    <nav className="border-b h-[8vh] flex items-center">
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <Link href="/">
          <h1 className="font-bold text-3xl cursor-pointer">Logo</h1>
        </Link>

        {/* Right section */}
        <div className="flex items-center gap-x-5">
          {isSignedIn ? (
            <>
              <SignOutButton>
                <button className="w-[100px] bg-gray-200 p-2 rounded-md text-center hover:bg-gray-300">
                  Sign out
                </button>
              </SignOutButton>
              <UserButton afterSignOutUrl="/" />
            </>
          ) : (
            <div className="flex items-center gap-x-5">
              <Link href="/sign-in">
                <button className="w-[100px] bg-gray-200 p-2 rounded-md text-center hover:bg-gray-300">
                  Sign in
                </button>
              </Link>
              <Link href="/sign-up">
                <button className="w-[100px] bg-gray-200 p-2 rounded-md text-center hover:bg-gray-300">
                  Sign up
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
