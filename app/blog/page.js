import {getAllPostSlugs, getSortedPostsData} from "@/js/posts"
import Link from 'next/link'

export default function Page({params}) {
  const posts = getAllPostSlugs();
  const allPostsData = getSortedPostsData();
  // console.log("hello world");
  // console.log(JSON.stringify(allPostsData));

  return (
    <div>
      Index of Posts:
      <ul>{posts.map((post) =>
        <li key={post.title}> <Link href={`/blog/${post.params.slug}`}>{post.params.slug} </Link></li>
      )}</ul>
      <ul>
        {allPostsData.map(({slug, date, title}) => (
          <li className="py-4" key={slug}>
            {title}
            <br />
            {slug}
            <br />
            {date}
          </li>
        ))}
      </ul>
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

