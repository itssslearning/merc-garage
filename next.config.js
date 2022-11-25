// /** @type {import('next').NextConfig} */
// module.exports = {
//   images: {
//     loader: 'custom',
//     domains:["images.ctfassets.net"]
//   },
// }

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
   domains:['images.ctfassets.net']
  }
 
 }
 
 module.exports = nextConfig
