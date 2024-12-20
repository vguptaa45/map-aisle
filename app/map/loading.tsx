import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col">
      <Skeleton className="h-16 w-full" />
      <Skeleton className="h-14 m-4" />
      <Skeleton className="flex-1" />
      <div className="p-4">
        <Skeleton className="h-8 w-32 mb-4" />
        <div className="flex gap-4">
          <Skeleton className="h-32 w-64" />
          <Skeleton className="h-32 w-64" />
          <Skeleton className="h-32 w-64" />
        </div>
      </div>
      <Skeleton className="h-16 w-full" />
    </div>
  )
}

