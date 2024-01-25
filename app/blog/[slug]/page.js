import {getAllPostSlugs, getPostData} from "@/js/posts"
import BlogPostLayout from "../layout"



export async function generateMetadata({params}) {
  const postData = await getPostData(params.slug)
  return {
    title: postData.title,
  }
}
export default async function Page({params}) {
  const postData = await getPostData(params.slug)
  return (
    <BlogPostLayout>
      <div className="relative flex w-full flex-col items-center justify-center py-6 dark:bg-slate-800">
        <div className="container">
          <h1 className="dark:text-white">{postData.title}</h1>
        </div>
        {/*
        <br />
        {postData.slug}
        <br />
        {postData.date}
        <br />
        */}
        <div className="prose dark:prose-invert">
          <div dangerouslySetInnerHTML={{__html: postData.contentHtml}} />
        </div>
      </div>
    </BlogPostLayout>
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

