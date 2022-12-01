import { createClient } from "contentful";
// import BlogExp from "../components/BlogExp"
import IndexBlog from "../components/IndexBlog"



export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
  })

  const res = await client.getEntries({content_type: 'car'})

  return {
    props: {
      vehicles: res.items
    }
  }
}

export default function Vehicles({vehicles}) {
  console.log(vehicles);
  return (
    <div className="main">
      {vehicles.map(car => (
          <IndexBlog key={car.sys.id} car= {car}/>
      ))}
    </div>
  )
}