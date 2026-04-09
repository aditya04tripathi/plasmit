import { Button } from "@/components/ui/button"
import Link from "next/link"

const IndexPage = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4 bg-foreground text-foreground">
      <h1 className="text-4xl font-bold text-background text-white">
        Choose a version
      </h1>
      <Link href="/v1">
        <Button className="border-white" variant={"outline"}>
          <span className="text-white">V1</span>
        </Button>
      </Link>
      <Link href="/v2">
        <Button className="border-white" variant={"outline"}>
          <span className="text-white">V2</span>
        </Button>
      </Link>
    </div>
  )
}

export default IndexPage
