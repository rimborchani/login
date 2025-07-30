"use client";
import { SignOutButton, UserButton, useClerk, useUser } from "@clerk/nextjs";
import Link from "next/link";

const Navbar = () => {
  const { isSignedIn } = useUser();

  return (
    <nav className="border-b h-[8vh] flex items-center">
      <div className="container flex items-center justify-between w-full">
        <Link href="/">
          <h1 className="font-bold text-3xl">Logo</h1>
        </Link>

        <div className="flex items-center gap-x-5">
          {isSignedIn ? (
            <>
              {/* ✅ use asChild to avoid button nesting */}
              <SignOutButton >
                <button className="w-[100px] bg-gray-200 p-2 rounded-md text-center">
                  Sign Out
                </button>
              </SignOutButton>
              <UserButton />
            </>
          ) : (
            <>
              <Link href="/sign-in">
                <button className="w-[100px] bg-gray-200 p-2 rounded-md text-center">
                  Sign in
                </button>
              </Link>
              <Link href="/sign-up">
                <button className="w-[100px] bg-gray-200 p-2 rounded-md text-center">
                  Sign Up
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
