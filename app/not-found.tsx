import React from "react"
import { NextPage } from "next"
import Link from "next/link"

import { Icons } from "@/components/icons"

type Props = {}

const NotFoundPage: NextPage = (props: Props) => {
  return (
    <main className="container flex min-h-screen flex-col items-center justify-center">
      <h4 className="text-2xl font-semibold">Page not found :(</h4>
      <span className="flex gap-1">
        Mind I point you back
        <Link
          href="/"
          className="flex items-center font-medium underline transition-colors hover:text-foreground/80"
        >
          <span>home</span>
          <Icons.arrowRight className="h-4 w-4" />
        </Link>
      </span>
    </main>
  )
}

export default NotFoundPage
