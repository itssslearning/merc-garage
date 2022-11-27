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
    const {items} = await client.getEntries({
        content_type: 'car',
        'fields.model': params.model
    })

    return {
        props: {car:items[0]}
    }
}