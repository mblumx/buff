import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="p-4 space-y-4 flex flex-col max-w-[200px]">
      <Button variant="default">Hello</Button>
      <Button variant="destructive">Hello</Button>
      <Button variant="outline">Hello</Button>
      <Button variant="secondary">Hello</Button>
      <Button variant="ghost">Hello</Button>
      <Button variant="link">Hello</Button>
      <Button variant="primary">Hello</Button>
    </div>
  )
}
