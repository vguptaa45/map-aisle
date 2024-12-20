import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center gap-8">
          <div className="flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="MapAisle Logo"
              width={32}
              height={32}
              className="rounded-lg"
            />
            <h1 className="text-2xl font-bold">MapAisle</h1>
          </div>
          <div className="w-full max-w-sm space-y-4 text-center">
            <h2 className="text-xl font-semibold">Select a Mall</h2>
            <div className="space-y-2">
              <Link href="/map?mall=palladium" className="w-full">
                <Button className="w-full" size="lg">
                  Phoenix Mall - Palladium
                </Button>
              </Link>
              <Link href="/map?mall=lucknow" className="w-full">
                <Button className="w-full" size="lg">
                  Phoenix Mall - Lucknow
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

