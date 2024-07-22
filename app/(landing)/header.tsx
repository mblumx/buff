import Image from "next/image"

//using named export instead of default export because it is a component, not a page
export const Header = () => {
    return (
      <header className="h-20 w-full border-b-2 border-slate-200 px-4">
        <div className="lg:max-w-screen-lg mx-auto flex items-center justify-between h-full bg-red-500">
          {/* <div className="flex items-center justify-between pl-2 font-bold text-white uppercase"> */}
          <div className="pt-8 pl-4 pb-7 flex items-center gap-x-2 ">
            <Image
              src={"/popcorn.svg"}
              alt="Popcorn Logo"
              height={35}
              width={35}
            />
            <h1 className="text-2xl font-extrabold text-white tracking-wide">Buff</h1>
          </div>
        </div>
      </header>
    )

}