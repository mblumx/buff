import { Loader } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-[988px] mx-auto flex-1 w-full flex flex-col lg:flex-row items-center justify-center p-4 gap-2">
      <div className="relative w-[240px] h-[240px] mb-8 lg:mb-0 lg:w-[422px] lg:h-[422px] ">
        <Image className="rounded-xl" src="/hero.png" fill alt="Hero" />
      </div>
    </div>
  )
}
