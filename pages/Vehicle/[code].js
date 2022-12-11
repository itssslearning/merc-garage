import { createClient } from "contentful"
import { Card } from "flowbite-react"
import { ListGroup } from "flowbite-react"

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
    const {code, engine, fuel, gearBox, image, tittle, gallery} = car.fields

    console.log({gallery})
    
    return (
        <div className="max-w ml-5 p-3">
            <Card
                horizontal={false}
                imgSrc={'https:' + image.fields.file.url}>

                <div className="gallery-wrapper">

                    {
                        gallery && gallery.map(item => (<img key={`img-${item.sys.id}`} srcSet={'https:' + item.fields.file.url}/>))
                    }

                </div>

                <div className="desc">
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {tittle}
                    </h5>
                    <div className="w-52">
                        <ListGroup>
                            <ListGroup.Item>
                                Vehicle Code: {code}
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Engine: {engine}
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Fuel: {fuel}
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Gearbox: {gearBox}
                            </ListGroup.Item>
                        </ListGroup>
                    </div>
                </div>
            </Card>
        </div>
    )
}






