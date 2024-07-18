

import { Header } from "../(landing)/header"

type Props = {
  children: React.ReactNode
}

//Note to self: Layout file ensures that it doesn't itself re-render when its children re-render.
const LandingLayout = ({ children }: Props) => {
  return (  
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center">
      
        {children}
    
      </main>
      {/* TODO: Not currently using a footer. Add here if necessary in future. */}
      {/*<Footer/>*/}
    </div>
  )
}

export default LandingLayout
