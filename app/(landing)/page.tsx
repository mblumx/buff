import { Button } from "@/components/ui/button"
import { ClerkLoaded,SignedIn, ClerkLoading, SignedOut, SignUpButton } from "@clerk/nextjs"
import { Loader } from "lucide-react"
import Image from "next/image"

export default function Home() {
  return (
    <div className="max-w-[988px] mx-auto flex-1 w-full flex flex-col lg:flex-row items-center justify-center p-4 gap-2">
      <div className="relative w-[240px] h-[240px] mb-8 lg:mb-0 lg:w-[422px] lg:h-[422px] ">
        <Image className="rounded-xl" src="/hero.png" fill alt="Hero" />
      </div>
      <div className="flex flex-col items-center gap-y-8">
        <h1 className="text-xl lg:text-2xl font-bold text-neutral-700 max-w-[480px] text-center">
          Log films you&apos;ve watched.
          <br />
          Find new favorites.
          <br />
          Share with friends.
        </h1>
        <div>
          <ClerkLoading>
            <Loader className="h-5 w-5 text-muted-foreground animate-spin"/>
          </ClerkLoading>
          <ClerkLoaded>
              <SignedOut>
            <SignUpButton>
                  <Button size="lg">
              Get Started
            </Button>
              </SignUpButton>
        
              </SignedOut>
              <SignedIn>

              </SignedIn>
          </ClerkLoaded>
        </div>
      </div>
    </div>
  )
}
