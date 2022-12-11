import {Card} from "flowbite-react";
import {createClient} from "contentful";

export async function getServerSideProps(context) {
    console.log({context})

    const {model, year} = context.query;

    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
    })

    const res = await client.getEntries({
        content_type: 'car',
        "fields.modeli.sys.contentType.sys.id": "vehicleModel",
        "fields.modeli.fields.name": model,
        "fields.year": year
    })


    return {
        props: {
            vehicles: res.items
        }
    }
}


export default function Search({vehicles}) {
    console.log({vehicles})
    return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4 pt-20 pb-10 lg:pt-40 lg:pb-20">
            <div className="max-w-sm">

                {
                    (vehicles && vehicles.length) ? vehicles.map(vehicle => (
                            <Card imgSrc="" key={vehicle.sys.id}>
                                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    {vehicle.fields.tittle}
                                </h5>
                            </Card>
                        ))
                        : <div>No Data</div>
                }

            </div>
        </div>
    )
}