import { createClient } from "contentful"
import Image from "next/image"

const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY 
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
        <div class="flex justify-center">
            <div class="rounded-lg shadow-lg bg-white max-w-sm">
                <Image class=" w-full h-48 md:h-auto object-cover md:w-96 rounded-t-lg md:rounded-none md:rounded-l-lg" src={'https:' + image.fields.file.url} alt="image"
                        width={image.fields.file.details.image.width}
                        height={image.fields.file.details.image.height} />
                <div class="p-6">
                    <h5 class="text-gray-900 text-xl font-medium mb-2">{tittle}</h5>
                    <p class="text-gray-700 text-base mb-4">
                        Some quick example text to build on the card title and make up the bulk of the card's
                        content.
                    </p>
                </div>
            </div>
        </div>
    )
}