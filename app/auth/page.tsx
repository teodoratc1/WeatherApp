"use client";

import React, { useState } from "react";
import { registration, signIn } from "@/config/firebase/firebaseFunctions";
import Link from "next/link";

const Auth = () => {
  const handleCreateUser = async (email: string, password: string) => {
    await registration(email, password);
  };
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [isRegister, setIsRegister] = useState<boolean>(true);

  return (
    <section className="lg:mt-16 mt-4 pt-5 pb-5 w-fit mx-auto border rounded-md bg-blue-100">
      <div className="flex flex-col items-center justify-center max-w-[90%] text-[36px] font-[900] mx-auto">
        {isRegister ? "SIGN UP" : "LOGIN"}
        <div className="items-center justify-center grid grid-cols-1 gap-3">
          {isRegister && (
            <div className="w-[90%] mx-auto">
              <span className="pl-4 bg-white px-4 text-[16px] text-gray-500 font-bold border rounded-lg border-gray-300">
                Username
              </span>
              <input
                type="text"
                id="userName"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className=" p-4 pl-4 w-full md:h-14 h-12  border rounded-xl border-gray-300 focus-visible:outline-none text-gray-500 text-[16px]"
              />
            </div>
          )}
          <div className="w-[90%] mx-auto">
            <span className="pl-4 bg-white px-4 text-[16px] text-gray-500 font-bold border rounded-lg border-gray-300">
              Email
            </span>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-4 pl-4 w-full md:h-14 h-12 border rounded-xl border-gray-300 focus-visible:outline-none text-gray-500 text-[16px]"
            />
          </div>
          <div className="w-[90%] mx-auto">
            <span className="pl-4 bg-white px-4 text-[16px] text-gray-500 font-bold border rounded-lg border-gray-300">
              Password
            </span>
            <input
              type="text"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="p-4 pl-4 w-full md:h-14 h-12 border rounded-xl border-gray-300 focus-visible:outline-none text-gray-500 text-[16px]"
            />
          </div>
        </div>
        {isRegister ? (
          <Link
            href="\dashboard"
            onClick={() => handleCreateUser(email, password)}
            className="items-center justify-center md:px-5  px-3 text-white  font-bold rounded-xl bg-[#117bdf] mt-10 md:text-[30px] text-[28px]"
          >
            SIGN UP
          </Link>
        ) : (
          <Link
            href="\dashboard"
            onClick={() => signIn(email, password)}
            className="items-center justify-center md:px-5 px-3 text-white w-fit font-bold rounded-xl bg-[#117bdf] mt-10 md:text-[30px] text-[28px]"
          >
            LOGIN
          </Link>
        )}
        {isRegister ? (
          <div className="flex mt-6 gap-3 mb-10">
            <p className="md:text-[18px] text-[14px]">Ai deja un cont?</p>
            <button
              onClick={() => setIsRegister(!isRegister)}
              className="md:text-[18px] text-[14px] text-red-500 border-b-2 border-red-500 w-fit"
            >
              Intra in cont
            </button>
          </div>
        ) : (
          <div className="flex flex-col mt-6 gap-3 mb-10">
            <p className="md:text-[18px] text-[14px]">Nu ai un cont creat?</p>
            <button
              onClick={() => setIsRegister(!isRegister)}
              className="md:text-[18px] text-[14px] text-red-500 border-b-2 border-red-500 w-fit"
            >
              CREAZA UN CONT
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
export default Auth;
