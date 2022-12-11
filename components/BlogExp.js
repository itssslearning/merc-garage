import Link from "next/link"
import Image from "next/image"

export default function BlogExp({blog}) {
    
    // const {tittle, code, model, engine, fuel, gallery, gearBox, image, isTopTen, year} = car.fields
    const {blogTittle, blogImage} = blog.fields
    
    return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4 pt-20 pb-10 lg:pt-40 lg:pb-20">
            <div className="flex justify-center">
                <div className="rounded-lg shadow-lg bg-white max-w-sm mb-5">
                    <a href="#" data-mdb-ripple="true" data-mdb-ripple-color="light">
                        <Image className="rounded-t-lg" src={'https:' + blogImage.fields.file.url} alt="img"
                            width={blogImage.fields.file.details.image.width}
                            height={blogImage.fields.file.details.image.height}/>
                    </a>
                    <div className="p-6">
                        <h5 className="text-gray-900 text-xl font-medium mb-2">{blogTittle}</h5>
                        <p className="text-gray-700 text-base mb-4">
                            Some quick example text to build on the card title and make up the bulk of the card'scontent.
                        </p>
                        <Link href={`/${blogTittle}`} className =" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Read</Link>
                    </div>
                </div>
            </div>

            {/* <style jsx>{`
                .not-found {
                background: #fff;
                padding: 30px;
                box-shadow: 1px 3px 5px rgba(0,0,0,0.1);
                transform: rotateZ(-1deg);
                }
                h1 {
                font-size: 3em;
                }
            `}</style> */}
        </div>
    )
}