// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    MONGODB_URI: process.env.MONGODB_URI,
    // Add this line
  },
};
console.log("MONGODB_URI:", process.env.MONGODB_URI);
export default nextConfig;
