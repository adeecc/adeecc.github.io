import React from "react"
import { FeaturedProject } from "@/types"

import { Icons } from "./icons"

interface ProjectCardProps {
  projectDeets: FeaturedProject
}

const ProjectCard: React.FC<ProjectCardProps> = ({ projectDeets }) => {
  return (
    <div className="col-span-1">
      <a
        href={projectDeets.link}
        className="flex min-h-[12em] origin-center flex-col justify-between gap-8 rounded-lg border border-muted-foreground p-4 transition-transform hover:scale-[1.05] hover:border-2"
      >
        <div className="text-sm">{projectDeets.desc}</div>
        <span className="font-semibold text-accent md:text-2xl">
          {projectDeets.title}
        </span>
      </a>
    </div>
  )
}

type ProjectsProps = {
  featuredProjects: FeaturedProject[]
}

export const Projects: React.FC<ProjectsProps> = ({ featuredProjects }) => {
  return (
    <div className="flex flex-col gap-y-4">
      <div className="grid grid-cols-3 items-stretch gap-5">
        {featuredProjects.map((fp) => (
          <ProjectCard key={fp.id} projectDeets={fp} />
        ))}
      </div>
      <a
        href="https://github.com/adeecc/"
        className="text-primary-200 hover:text-primary-100 flex items-center gap-x-1 transition-colors"
      >
        View all Projects
        <span className="">
          <Icons.arrowRight className="h-4 w-4" />
        </span>
      </a>
    </div>
  )
}
