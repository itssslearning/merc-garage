import { createClient } from "contentful"
import Image from "next/image"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"



const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
})

export const getStaticPaths = async () => {
    const res = await client.getEntries({
        content_type:'car'
    })

    const paths = res.items.map(item => {
        return {
            params: {blogTittle: item.fields.blogTittle}
        }
    })

    return {
    // fallback=flase--->404 page
        paths,
        fallback: true 
    }
}

// Gets the data
export async function getStaticProps({params}) {
    const {items} = await client.getEntries({
        content_type: 'car',
        'fields.blogTittle': params.blogTittle
    })

    if (!items.length) {
        return {
            redirect: {
            destination: '/',
            permanent: false
        }
        }
    }

    return {
        props: {
        recipe: items[0]
        },
        revalidate:1
    }
}


export default function BlogDetails({car}) {

    
    const {blogTittle, blogImage, news} = car.fields

    return (
        <div>
        <div className="banner">
            <Image src={`https:${blogImage.fields.file.url}`}
                    width={blogImage.fields.file.details.image.width}
                    height={blogImage.fields.file.details.image.height}
                    alt='image' className="foto"
            />
            <h2>{tittle}</h2>
        </div>

        <div className="info">
            <p>{blogTittle}</p>
        </div>

        <div className="method">
            <div>
            {documentToReactComponents(news)}
            </div>
        </div>

        <style jsx>
            {`
            h2,h3 {
                text-transform: uppercase;
            }
            .banner h2 {
                margin: 0;
                background: #fff;
                display: inline-block;
                padding: 20px;
                position: relative;
                top: -60px;
                left: -10px;
                transform: rotateZ(-1deg);
                box-shadow: 1px 3px 5px rgba(0,0,0,0.1);
            }
            .info p {
                margin: 0;
            }
            .info span::after {
                content: ", ";
            }
            .info span:last-child::after {
                content: ".";
            }
            `}
        </style>
        </div>
    )
}