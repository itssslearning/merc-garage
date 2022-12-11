import { createClient } from "contentful"
import Image from "next/image"
import { Card } from "flowbite-react"
import Link from "next/link"
import { Button } from "flowbite-react"

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
            params: {model: item.fields.modeli.fields.name}
        }
    })

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params}) {
    // console.log('name ',params.model)
    const {items} = await client.getEntries({
        content_type: 'car',
        'fields.modeli.sys.contentType.sys.id': 'vehicleModel',
        'fields.modeli.fields.name': params.model
    })

    return {
        props: {cars: items}
    }
} 


export default function ModelVehicles({cars}) {
    // const {code, engine, fuel, gearBox, image, tittle} = car.fields

    return (

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4 pt-20 pb-10 lg:pt-40 lg:pb-20" >
            {
                cars && cars.map(car => (
                    <Card  key={`car-${car.sys.id}`} imgSrc={'https:' + car.fields.image.fields.file.url}>
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{car.fields.tittle}</h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                        </p>
                        <Link href={`/vehicle/${car.fields.code}`}>
                            <Button color="failure">View</Button>
                        </Link>
                    </Card>
                ))
            }

        </div> 
    )
}