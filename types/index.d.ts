import React from "react"
import type { Icon } from "lucide-react"

import { Icons } from "@/components/icons"

export type NavItem = {
  title: React.ReactNode
  href: string
  disabled?: boolean
}

export type MainNavItem = NavItem
export type SocialNavItem = NavItem

export type Project = {
  id: number
  title: string
  desc: string
  img: string
  stack: string[]
  link: string
  ext?: string
}

export type FeaturedProject = Project

export type CareerEvent = {
  id: number
  time: string
  loc: string
  position: string
  org: string
  details: string[]
}

export type SiteConfig = {
  name: string
  description: string
  url: string
  links: {
    twitter: string
    github: string
  }
}

export type AboutConfig = {
  mainNav: MainNavItem[]
  featuredProjects: FeaturedProject[]
  careerEvents: CareerEvent[]
  socials: SocialNavItem[]
}
