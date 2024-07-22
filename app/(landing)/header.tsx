import { Button } from "@/components/ui/button"
import { ClerkLoaded, ClerkLoading, SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs"
import { Loader } from "lucide-react"
import Image from "next/image"

//using named export instead of default export because it is a component, not a page
export const Header = () => {
    return (
      <header className="h-20 w-full border-b-2 border-slate-200 px-4">
        <div className="lg:max-w-screen-lg mx-auto flex items-center justify-between h-full">
          {/* <div className="flex items-center justify-between pl-2 font-bold text-white uppercase"> */}
          <div className="pt-8 pl-4 pb-7 flex items-center gap-x-2 ">
            <Image
              src={"/popcorn.svg"}
              alt="Popcorn Logo"
              height={42}
              width={42}
            />
            <h1 className="text-2xl font-extrabold text-slate-700 tracking-wide">Buff</h1>
          </div>
          <ClerkLoading>
            <Loader
            className="h-5 w-5 text-muted-foreground animate-spin"/>
          </ClerkLoading>
          <ClerkLoaded>
            <SignedIn>
            <UserButton>

            </UserButton>
            </SignedIn>
            <SignedOut>
            <SignInButton mode="modal">
                <Button size="lg" variant="signIn">
                    Sign in
                </Button>
            </SignInButton>
            </SignedOut>
          </ClerkLoaded>
        </div>
      </header>
    )

}