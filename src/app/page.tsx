import Image from "next/image";
import logo from "../assets/logo.svg";

export default function Home() {
  return (
    <main className="max-w-[1240px] mx-auto px-5 py-8 md:py-0">
      <div className="h-dvh flex justify-center gap-16 flex-col md:flex-row ">
        <div className="flex flex-col gap-8 items-center md:items-start">
          <Image src={logo} alt="logo" width={108.5} height={30} />

          <h1 className="text-4xl text-center leading-none font-heading font-medium flex flex-col md:text-7xl md:text-left ">
            <span className="text-blue">CodeCraft</span> Summit{" "}
            {new Date().getFullYear()}
          </h1>
        </div>
      </div>
    </main>
  );
}
