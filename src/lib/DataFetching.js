import { notFound } from "next/navigation"

export async function getPosts() {
    let res = await fetch(`http://localhost:3000/api/posts`)
    let post = await res.json()
    if (!post) notFound()
    return post
  }
