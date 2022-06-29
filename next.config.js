/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
    images: {
      domain:["localhost:1337"],
      path:"",
      loader:"imgix"
  
    },

}

module.exports = nextConfig
