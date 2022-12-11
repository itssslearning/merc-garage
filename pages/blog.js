import { createClient } from "contentful";
// import BlogExp from "../components/BlogExp"
import IndexBlog from "../components/IndexBlog"



export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
  })

  const res = await client.getEntries({content_type: 'blog'})

  return {
    props: {
      blogs: res.items
    }
  }
}

export default function Vehicles({blogs}) {
  console.log(blogs);
  return (
    <div className="main">
      {blogs.map(blog => (
          <IndexBlog key={blog.sys.id} blog= {blog}/>
      ))}
    </div>
  )
}