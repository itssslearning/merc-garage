import Link from "next/link"


export default function VehicleCard({car}) {
    
    // const {tittle, code, model, engine, fuel, gallery, gearBox, image, isTopTen, year} = car.fields
    const {model} = car.fields
    
    return (
        <div class="flex justify-center">
            <div class="bg-white rounded-lg border border-gray-200 w-96 text-gray-900">
                <Link href={`VModel/${model}`}  class="block px-6 py-2 border-b border-gray-200 w-full hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-0 focus:bg-gray-200 focus:text-gray-600 transition duration-500 cursor-pointer">
                    View the {model} catalogue.
                </Link>
            </div>
        </div>
    )
}