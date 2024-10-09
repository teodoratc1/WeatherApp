"use client";
import Link from "next/link";
import { useAuth } from "./AuthProvider";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { useDebouncedCallback } from "use-debounce";

export default function Header() {
  const { currentUser } = useAuth();
  const pathname = usePathname();
  const isDashboard = pathname === "/dashboard";
  const isCapitala = pathname === "/dashboard/capitala";
  const isProfile = pathname === "/dashboard/profile";
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term) => {
    console.log(`Searching... ${term}`);

    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <>
      {!isDashboard ? null : (
        <header className="sticky top-0 w-full flex border-b-2 bg-blue-200 z-10">
          <nav className="w-full px-3 flex items-center justify-between">
            <div className="text-[18px] lg:text-[20px] font-semibold items-center justify-start flex">
              <img src="/cloudyday.svg" />
              <Link href="/dashboard">MeteoRO</Link>
              <img src="/cloudynight.svg" />
            </div>
            <div className="flex items-center mr-auto ml-5 lg:ml-10 gap-10">
              <div className="hidden lg:flex">
                <Link
                  href="/dashboard"
                  className="flex border-b-white hover:border-b-2 transition-0.3s font-semibold gap-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                  </svg>
                  ACASA
                </Link>
              </div>
              <Menu>
                <MenuButton>
                  <div className="flex border-b-white hover:border-b-2 transition-0.3s lg:font-semibold gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                      />
                    </svg>
                    CAUTA
                  </div>
                </MenuButton>

                <MenuItems
                  anchor="bottom"
                  className="bg-slate-200 mt-6 flex flex-col items-center justify-center rounded-md gap-1"
                >
                  <MenuItem>
                    <div>
                      <input
                        onClick={(e) => {
                          e.preventDefault();
                        }}
                        onChange={(e) => {
                          handleSearch(e.target.value);
                        }}
                        defaultValue={searchParams.get("query")?.toString()}
                        type="search"
                        className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none"
                        id="exampleSearch"
                        placeholder="Cauta Orasul"
                      />
                    </div>
                  </MenuItem>
                </MenuItems>
              </Menu>

              <div className="hidden lg:flex">
                <Link
                  href="/dashboard/capitala"
                  className="flex border-b-white hover:border-b-2 transition-0.3s font-semibold gap-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                    />
                  </svg>
                  CAPITALA
                </Link>
              </div>
              <div className="hidden lg:flex">
                <Link
                  href="/dashboard/profile"
                  className="flex border-b-white hover:border-b-2 transition-0.3s font-semibold gap-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                    />
                  </svg>
                  PROFIL
                </Link>
              </div>
            </div>

            <Menu>
              <MenuButton>
                <div className="grid h-10 w-10 place-items-center rounded-full bg-white capitalize">
                  {currentUser.name?.at(0)}
                </div>
              </MenuButton>
              <MenuItems
                anchor="bottom end"
                className="bg-slate-200 rounded-lg shadow-lg p-5 mt-4 flex flex-col justify-center gap-4 !max-w-[200px]"
              >
                <MenuItem>
                  <h2 className="border-b text-wrap border-black">
                    Buna, {currentUser.name}
                  </h2>
                </MenuItem>
                <MenuItem>
                  <a className="" href="/dashboard/profile">
                    Editare Profil
                  </a>
                </MenuItem>
                <MenuItem>
                  <a className="flex gap-1 items-center" href="/">
                    Logout
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-5 rotate-180"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
                      />
                    </svg>
                  </a>
                </MenuItem>
              </MenuItems>
            </Menu>
          </nav>
        </header>
      )}
      {!isCapitala ? null : (
        <header className=" sticky top-0 w-full flex border-b-2 bg-blue-200 z-10">
          <nav className="w-full px-3 flex items-center justify-between">
            <div className=" text-[18px] lg:text-[20px] font-semibold items-center justify-start flex">
              <img src="/cloudyday.svg" />
              <Link href="/dashboard/capitala">MeteoRO</Link>
              <img src="/cloudynight.svg" />
            </div>
            <div className="hidden lg:flex items-center mr-auto ml-10 gap-10">
              <div>
                <Link
                  href="/dashboard"
                  className="flex border-b-white hover:border-b-2 transition-0.3s font-semibold gap-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                  </svg>
                  ACASA
                </Link>
              </div>
              <div>
                <Link
                  href="/dashboard/capitala"
                  className="flex border-b-white hover:border-b-2 transition-0.3s font-semibold gap-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                    />
                  </svg>
                  CAPITALA
                </Link>
              </div>
              <div>
                <Link
                  href="/dashboard/profile"
                  className="flex border-b-white hover:border-b-2 transition-0.3s font-semibold gap-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                    />
                  </svg>
                  PROFIL
                </Link>
              </div>
            </div>

            <Menu>
              <MenuButton>
                <div className="grid h-10 w-10 place-items-center rounded-full bg-white capitalize">
                  {currentUser.name?.at(0)}
                </div>
              </MenuButton>

              <MenuItems
                anchor="bottom"
                className="bg-slate-200 mt-4 flex flex-col items-center justify-center xl:w-[15%] lg:w-[20%] md:w-[25%] w-[40%] h-[15%] rounded-md gap-1"
              >
                <MenuItem>
                  <h2 className="border-b border-black">
                    Buna, {currentUser.name}
                  </h2>
                </MenuItem>
                <MenuItem>
                  <a className="" href="/dashboard/profile">
                    Editare Profil
                  </a>
                </MenuItem>
                <MenuItem>
                  <a className="flex gap-1 items-center" href="/">
                    Logout
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-5 rotate-180"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
                      />
                    </svg>
                  </a>
                </MenuItem>
              </MenuItems>
            </Menu>
          </nav>
        </header>
      )}
      {!isProfile ? null : (
        <header className=" sticky top-0 w-full flex border-b-2 bg-blue-200 z-10">
          <nav className="w-full px-3 flex items-center justify-between">
            <div className=" text-[18px] lg:text-[20px] font-semibold items-center justify-start flex">
              <img src="/cloudyday.svg" />
              <Link href="/dashboard/profile">MeteoRO</Link>
              <img src="/cloudynight.svg" />
            </div>
            <div className="hidden lg:flex items-center mr-auto ml-10 gap-10">
              <div>
                <Link
                  href="/dashboard"
                  className="flex border-b-white hover:border-b-2 transition-0.3s font-semibold gap-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                  </svg>
                  ACASA
                </Link>
              </div>
              <div>
                <Link
                  href="/dashboard/capitala"
                  className="flex border-b-white hover:border-b-2 transition-0.3s font-semibold gap-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                    />
                  </svg>
                  CAPITALA
                </Link>
              </div>
              <div>
                <Link
                  href="/dashboard/profile"
                  className="flex border-b-white hover:border-b-2 transition-0.3s font-semibold gap-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                    />
                  </svg>
                  PROFIL
                </Link>
              </div>
            </div>

            <Menu>
              <MenuButton>
                <div className="grid h-10 w-10 place-items-center rounded-full bg-white capitalize">
                  {currentUser.name?.at(0)}
                </div>
              </MenuButton>

              <MenuItems
                anchor="bottom"
                className="bg-slate-200 mt-4 flex flex-col items-center justify-center xl:w-[15%] lg:w-[20%] md:w-[25%] w-[40%] h-[15%] rounded-md gap-1"
              >
                <MenuItem>
                  <h2 className="border-b border-black">
                    Buna, {currentUser.name}
                  </h2>
                </MenuItem>
                <MenuItem>
                  <a className="" href="/dashboard/profile">
                    Editare Profil
                  </a>
                </MenuItem>
                <MenuItem>
                  <a className="flex gap-1 items-center" href="/">
                    Logout
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-5 rotate-180"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
                      />
                    </svg>
                  </a>
                </MenuItem>
              </MenuItems>
            </Menu>
          </nav>
        </header>
      )}
    </>
  );
}
