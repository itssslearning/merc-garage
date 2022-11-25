import Link from "next/link"
import Image from "next/image"

export default function VehicleCard({car}) {
    
    // const {tittle, code, model, engine, fuel, gallery, gearBox, image, isTopTen, year} = car.fields
    const {tittle, code, image} = car.fields
    
    return (
        <div className="flex justify-center">
            <div className="rounded-lg shadow-lg bg-white max-w-sm">
                <a href="#" data-mdb-ripple="true" data-mdb-ripple-color="light">
                    <Image className="rounded-t-lg" src={'https:' + image.fields.file.url} alt="img"
                        width={image.fields.file.details.image.width}
                        height={image.fields.file.details.image.height}/>
                </a>
                <div className="p-6">
                    <h5 className="text-gray-900 text-xl font-medium mb-2">{tittle}</h5>
                    <p className="text-gray-700 text-base mb-4">
                        Some quick example text to build on the card title and make up the bulk of the card'scontent.
                    </p>
                    <Link href={`Vehicle/${code}`} className =" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">View Car</Link>
                </div>
            </div>
        </div>
    )
}
