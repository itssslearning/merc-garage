import { createClient } from "contentful"
import Image from "next/image"

const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
})


export const getStaticPaths = async () => {
    const res = await client.getEntries({
        content_type: 'car'
    })

    const paths = res.items.map(item => {
        return {
            params: {code: item.fields.code}
        }
    })

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params}) {
    const {items} = await client.getEntries({
        content_type: 'car',
        'fields.code': params.code
    })

    return {
        props: {car: items[0]}
    }
} 


export default function VehicleDetails({car}) {
    // const {code, engine, fuel, gearBox, image, tittle} = car.fields
    const {image, tittle} = car.fields
    
    return (
        <div className="flex justify-center pt-3 pb-3">
            <div className="rounded-lg shadow-lg bg-white max-w-sm">
                <Image className=" w-full h-48 md:h-auto object-cover md:w-96 rounded-t-lg md:rounded-none md:rounded-l-lg" src={'https:' + image.fields.file.url} alt="image"
                        width={image.fields.file.details.image.width}
                        height={image.fields.file.details.image.height} />
                <div className="p-6">
                    <h5 className="text-gray-900 text-xl font-medium mb-2">{tittle}</h5>
                    <p className="text-gray-700 text-base mb-4">
                        Some quick example text to build on the card title and make up the bulk of the card's
                        content.
                    </p>
                </div>
            </div>
        </div>
    )
}