import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs"

const SignInPage = () => {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <SignedOut>
            <SignInButton />
            
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </body>
      </html>
    </ClerkProvider>
  )
}

export default SignInPage
