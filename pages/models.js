import { createClient } from "contentful"
import ModelsView from '../components/ModelsView'

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
    return (
        <div className="main">
            {vehicles.map(car => (
                <ModelsView key={car.sys.id} car= {car}/>
            ))}
        </div>
    )
}