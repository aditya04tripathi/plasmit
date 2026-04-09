import { Button } from "@/components/ui/button"
import Link from "next/link"

const IndexPage = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-bold">Choose a version</h1>
      <Link href="/v1">
        <Button variant={"outline"}>
          <span className="">V1</span>
        </Button>
      </Link>
      <Link href="/v2">
        <Button variant={"outline"}>
          <span className="">V2</span>
        </Button>
      </Link>
    </div>
  )
}

export default IndexPage
