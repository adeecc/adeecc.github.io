import Image from "next/image"
import Link from "next/link"
import { allPosts } from "contentlayer/generated"
import { compareDesc } from "date-fns"

import { formatDate } from "@/lib/utils"

export const metadata = {
  title: "Blog",
}

const BlogPage = () => {
  const posts = allPosts
    .map((post) => ({ ...post, published: new Date(post.published) }))
    .filter((post) => post.published <= new Date())
    .sort((a, b) => compareDesc(a.published, b.published))

  return (
    <div className="container py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-heading text-4xl tracking-tight text-foreground lg:text-5xl">
            Blog
          </h1>
          <p className="text-xl text-muted-foreground">
            Dev blog with a sprinkle of ML, AI & Programming Language slander :)
          </p>
        </div>
      </div>
      <hr className="my-8" />
      {posts?.length ? (
        <div className="grid gap-10 sm:grid-cols-2">
          {posts.map((post, index) => (
            <article
              key={post._id}
              className="group relative flex flex-col space-y-2"
            >
              {post.image && (
                <Image
                  src={post.image}
                  alt={post.title}
                  width={804}
                  height={452}
                  className="rounded-md border bg-muted transition-colors"
                  priority={index <= 1}
                />
              )}
              <h2 className="text-2xl font-semibold text-accent-foreground">{post.title}</h2>
              {post.summary && (
                <p className="text-muted-foreground">{post.summary}</p>
              )}
              {post.published && (
                <p className="text-sm text-muted-foreground">
                  {formatDate(post.published)}
                </p>
              )}
              <div className="flex gap-x-2 text-sm">
                {post.tags &&
                  post.tags.length > 0 &&
                  post.tags.map((tag) => (
                    <span className="underline">{tag}</span>
                  ))}
              </div>
              <Link href={post.slug} className="absolute inset-0">
                <span className="sr-only">View Article</span>
              </Link>
            </article>
          ))}
        </div>
      ) : (
        <p>No posts published.</p>
      )}
    </div>
  )
}

export default BlogPage
