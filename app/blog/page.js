import {getAllPostSlugs, getSortedPostsData} from "@/js/posts"
import Link from 'next/link'

export default function Page({params}) {
  const posts = getAllPostSlugs();
  const allPostsData = getSortedPostsData();

  return (
    <div>
      Index of Posts:
      <ul>{allPostsData.map(({slug, date, title}) =>
        <li key={title}> <Link href={`/blog/${slug}`}>{slug}: {date}</Link></li>
      )}</ul>
    </div >
  )
}

export async function generateStaticParams() {
  // Return a list of possible values for slug 
  const posts = getAllPostSlugs();
  // const posts = await fetch('https://.../blog').then((res) => res.json())

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

async function getPost({params}) {
  // Fetch neccessary data for the blog post using params.slug
  const res = await fetch('https://.../blog/${params.slug}')
  const post = await res.json();

  return post;
}

