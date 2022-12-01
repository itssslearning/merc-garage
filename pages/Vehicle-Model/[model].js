import { createClient } from "contentful";

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
            params: {momdel: item.fields.model}
        }
    })

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params}) {
    const data = await client.getEntries({
        content_type: "car",
        'fields.modeli.sys.contentType.sys.id': 'vehicleModel',
        'fields.modeli.fields.name[all]': 'E-Class',
        include: 10,
    });

    return {
        props: {car:items[0]}
    }
}