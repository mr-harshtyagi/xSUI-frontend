"use client";
import { Typography } from "@material-tailwind/react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-white p-8">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between">
        <Image
          height={32}
          width={32}
          className="h-8 sm:ml-4 w-auto scale-[3.5]"
          src="next.svg"
          alt="logo"
        />
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <a
              href="https://discord.com/"
              color="blue-gray"
              className="hover:cursor-pointer hover:underline font-bold transition-colors hover:text-blue-500 focus:text-blue-500 "
            >
              Discord
            </a>
          </li>
          <li>
            <a
              href="https://discord.com/"
              color="blue-gray"
              className="hover:cursor-pointer hover:underline font-bold transition-colors hover:text-blue-500 focus:text-blue-500 "
            >
              Telegram
            </a>
          </li>
          <li>
            <a
              href="https://discord.com/"
              color="blue-gray"
              className="hover:cursor-pointer hover:underline font-bold transition-colors hover:text-blue-500 focus:text-blue-500 "
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              href="https://discord.com/"
              color="blue-gray"
              className="hover:cursor-pointer hover:underline font-bold transition-colors hover:text-blue-500 focus:text-blue-500 "
            >
              Medium
            </a>
          </li>
        </ul>
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <Typography color="blue-gray" className="text-center font-normal">
        &copy; 2023 by Ascendancy Finance
      </Typography>
    </footer>
  );
}
