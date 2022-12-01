import Link from "next/link"
import Image from "next/image"
import { Card } from "flowbite-react"
import { Button } from "flowbite-react"

export default function VehicleCard({car}) {
    
    // const {tittle, code, model, engine, fuel, gallery, gearBox, image, isTopTen, year} = car.fields
    const {tittle, code, image} = car.fields
    
    return (
                <Card imgSrc={'https:' + image.fields.file.url}>
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {tittle}
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                    </p>
                    <Link href={`vehicle/${code}`}>
                        <Button color="failure">View</Button>
                    </Link>
                </Card>

            
    )
}

