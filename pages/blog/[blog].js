import { createClient } from "contentful"
import {documentToReactComponents} from "@contentful/rich-text-react-renderer";
import Image from "next/image"

const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
})

export const getStaticPaths = async () => {
    const res = await client.getEntries({
        content_type: 'blog'
    })

    const paths = res.items.map(item => {
        return {
            params: {blog: item.fields.tittle}
        }
    })

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params}) {
    const {items} = await client.getEntries({
        content_type: 'blog',
        'fields.blog': params.tittle
    })

    return {
        props: {blog: items[0]}
    }
}



export default function BlogDetails({blog}) {

    
    const {tittle, blogImage, blogContent} = blog.fields

    return (
        <div>
            <div className="banner">
                <Image src={`https:${blogImage.fields.file.url}`}
                        width={blogImage.fields.file.details.image.width}
                        height={blogImage.fields.file.details.image.height}
                        alt='image' className="foto"
                />
            </div>

            <div className="info">
                <p>{tittle}</p>
            </div>

            <div className="method">
                <div>
                {documentToReactComponents(blogContent)}
                </div>
            </div>
        </div>
    )
}