"use client"

import React from "react"
import Link from "next/link"
import { useSelectedLayoutSegment } from "next/navigation"

import { aboutConfig } from "@/config/about"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

import { ModeToggle } from "./mode-toggle"

type SiteFooterProps = React.HTMLAttributes<HTMLElement>

export const SiteFooter: React.FC<SiteFooterProps> = ({ className }) => {
  const segment = useSelectedLayoutSegment()

  return (
    <footer
      className={cn(
        "border-primary-300 container mt-24 grid grid-cols-1 gap-6 border-t-[1px] px-5 py-10 md:grid-cols-2",
        className
      )}
    >
      {/* Nav */}
      <nav className="col-span-1 flex flex-col items-center gap-y-2 md:items-start">
        {aboutConfig.mainNav.map((item, index) => (
          <Link
            key={index}
            href={item.disabled ? "#" : item.href}
            className={cn(
              "flex items-center text-lg font-medium transition-colors hover:text-foreground/80",
              item.href.startsWith(`/${segment}`)
                ? "text-foreground"
                : "text-foreground/60",
              item.disabled && "cursor-not-allowed opacity-80"
            )}
          >
            {item.title}
          </Link>
        ))}
      </nav>
      {/* Socials */}
      <div className="col-span-1 flex justify-center gap-x-4 md:items-start">
        {aboutConfig.socials.map((value) => (
          <a
            key={value.href}
            href={value.href}
            className="text-primary-200 hover:text-primary-100"
          >
            {value.title}
          </a>
        ))}
      </div>
      <div className="col-span-full">
        <p className="text-center text-sm leading-loose md:text-left">
          Built by{" "}
          <a
            href={siteConfig.links.twitter}
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            adeecc
          </a>
          . Hosted on{" "}
          <a
            href="https://vercel.com"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            Vercel
          </a>
          . The source code is available on{" "}
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </footer>
  )
}
