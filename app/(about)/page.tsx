import React from "react"
import Image from "next/image"

import { aboutConfig } from "@/config/about"
import { Projects } from "@/components/projects"
import { Timeline } from "@/components/Timeline"

const RootPage: React.FC = () => {
  return (
    <main className="container flex flex-col gap-y-[4rem] space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
      <section
        id="hero"
        className="flex flex-col-reverse justify-between gap-5 sm:flex-row sm:items-center"
      >
        <div className="rows-span-1 col-span-1 col-start-1 max-w-md sm:col-span-4">
          <h1 className="text-5xl font-bold">Aditya Chopra</h1>
          <h5 className="mt-2 text-xl text-accent-foreground">
            MTS@DE Shaw, India | prev. CSE@BITS Hyd
          </h5>

          <div className="text-muted-foreground mt-8">
            Working on distributed systems with python and typescript. Learning
            new things about dev, languages and frameworks everyday :)
          </div>
        </div>
        <div className="relative col-span-1 row-span-1 block sm:col-end-4">
          <Image
            alt="profile picture"
            src="https://avatars.githubusercontent.com/u/28647816"
            width={100}
            height={100}
            className="rounded-full"
          />
        </div>
      </section>

      {/* <section id="featured-blogs"></section> */}

      <section id="timeline">
        <h3 className="text-3xl font-semibold mb-4">What am I upto?</h3>
        <Timeline careerEvents={aboutConfig.careerEvents} />
      </section>

      <section id="featuerd-projects">
        <h3 className="text-3xl font-semibold mb-4">Featured Projects</h3>
        <Projects featuredProjects={aboutConfig.featuredProjects} />
      </section>
    </main>
  )
}

export default RootPage
