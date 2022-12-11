import { createClient } from "contentful";
import { Carousel } from "flowbite-react";
import VehicleCard from "../components/VehicleCard";
import {useState} from "react";

// creates years
function createYears(startYear) {
    const currentYear = new Date().getFullYear(), years = [];
    startYear = startYear || 1980;
    while ( startYear <= currentYear ) {
        years.push(startYear++);
    }
    return years;
}

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
  })

  const res = await client.getEntries({content_type: 'car'})
  const res2 = await client.getEntries({content_type: 'blog'})
    const res3 = await client.getEntries({content_type: 'vehicleModel'})

  return {
    props: {
      vehicles: res.items,
        blog: res2.items,
        models: res3.items
    }
  }
}

export default function Vehicles({vehicles, blog, models}) {
  console.log({vehicles}, {blog});

  const [year, setYear] = useState(new Date().getFullYear())

  return (
    <div className="main box-sizing:border-box ">
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel slideInterval={5000} indicators={false}>
            {
                blog && blog.map(vehicle => (<img key={vehicle.sys.id}
                    src={vehicle.fields.blogImage.fields.file.url}
                    alt="..."
                />))
            }
        </Carousel>
      </div>


      <form className="flex items-center pt-3" action="/search">
          <label htmlFor="simple-search" className="sr-only">Search</label>
          <div className="relative w-full">
              {/*<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">*/}
              {/*    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>*/}
              {/*</div>*/}

              <div className={"flex"}>
                  {/*<input type="text" id="simple-search" name="search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required/>*/}


                  <select id="model"
                          name="model"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                      {
                         models && models.map(model => (<option key={`model-${model.fields.name}`}>{model.fields.name}</option> ))
                      }

                  </select>

                  <select id="year"
                          value={year}
                          onChange={(e) => setYear(e.target.value)}
                          name="year"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                      {
                          createYears(1920).map(year => (<option key={`year-${year}`}>{year}</option> ))
                      }

                  </select>
              </div>



          </div>
          <button type="submit" className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              <span className="sr-only">Search</span>
          </button>
      </form>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4 pt-20 pb-10 lg:pt-40 lg:pb-20" >

      {vehicles.map(car => (
        <VehicleCard key={car.sys.id} car={car}/>
      ))}
      </div>



    </div>
  )
}

{/* // vehicles.forEach(car => { 

//  }) 

// {vehicles.map(car => (
//   <VehicleCard key={car.sys.id} car= {car}/>
// ))} */}