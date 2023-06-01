import { notFound } from "next/navigation"
import { allPosts } from "contentlayer/generated"

import { Mdx } from "@/components/mdx-components"

import "@/styles/mdx.css"
import "katex/dist/katex.min.css"

import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import { env } from "@/env.mjs"
import { siteConfig } from "@/config/site"
import { absoluteUrl, cn, formatDate } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"

type PostPageProps = {
  params: {
    slug: string[]
  }
}

async function getPostFromParams(params) {
  const slug = params?.slug?.join("/")
  const post = allPosts.find((post) => post.slugAsParams === slug)

  if (!post) {
    null
  }

  return post
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const post = await getPostFromParams(params)

  if (!post) {
    return {}
  }

  // const url = env.NEXT_PUBLIC_APP_URL

  // const ogUrl = new URL(`${url}/api/og`)
  // ogUrl.searchParams.set("heading", post.title)
  // ogUrl.searchParams.set("type", "Blog Post")
  // ogUrl.searchParams.set("mode", "dark")

  return {
    title: post.title,
    description: post.summary,
    authors: [
      {
        name: "Aditya Chopra",
        url: "https://adeecc.vercel.app",
      },
    ],
    openGraph: {
      title: post.title,
      description: post.summary,
      type: "article",
      url: absoluteUrl(post.slug),
      // images: [
      //   {
      //     url: ogUrl.toString(),
      //     width: 1200,
      //     height: 630,
      //     alt: post.title,
      //   },
      // ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.summary,
      // images: [ogUrl.toString()],
    },
  }
}

const PostPage = async ({ params }: PostPageProps) => {
  const post = await getPostFromParams(params)
  if (!post) {
    notFound()
  }

  return (
    <article className="container relative py-6 lg:py-10">
      <Link
        href="/blog"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute left-[-200px] top-14 hidden xl:inline-flex"
        )}
      >
        <Icons.chevronLeft className="mr-2 h-4 w-4" />
        See all posts
      </Link>
      <div>
        <div className="flex justify-between">
          {post.published && (
            <time
              dateTime={post.published}
              className="block text-sm text-muted-foreground"
            >
              Published on {formatDate(post.published)}
            </time>
          )}

          {post.tags && (
            <div className="flex gap-1 text-xs text-muted-foreground">
              {post.tags.map((tag) => (
                <span className="underline">{tag}</span>
              ))}
            </div>
          )}
        </div>
        <h1 className="my-2 inline-block font-heading text-4xl leading-tight lg:text-5xl">
          {post.title}
        </h1>
        <div className="flex flex-col justify-between sm:flex-row-reverse">
          <div className="mt-4 flex space-x-4"></div>
          <Link
            href={siteConfig.links.twitter}
            className="flex items-center space-x-2 text-sm"
          >
            <Image
              src="https://avatars.githubusercontent.com/u/28647816"
              alt="Aditya Chopra"
              width={42}
              height={42}
              className="rounded-full bg-white"
            />
            <div className="flex-1 text-left leading-tight">
              <p className="font-medium">Aditya Chopra</p>
              <p className="text-[12px] text-muted-foreground">@adeecc11</p>
            </div>
          </Link>
        </div>
      </div>
      {post.image && (
        <Image
          src={post.image}
          alt={post.title}
          width={720}
          height={405}
          className="my-8 rounded-md border bg-muted transition-colors"
          priority
        />
      )}
      <section id="content" className="mt-12">
        <Mdx code={post.body.code} />
      </section>
      <hr className="mt-12" />
      <div className="flex justify-center py-6 lg:py-10">
        <Link href="/blog" className={cn(buttonVariants({ variant: "ghost" }))}>
          <Icons.chevronLeft className="mr-2 h-4 w-4" />
          See all posts
        </Link>
      </div>
    </article>
  )
}

export default PostPage
