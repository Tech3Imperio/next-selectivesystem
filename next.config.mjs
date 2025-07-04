// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  // webpack: (config) => {
  //   config.module.rules.push({
  //     test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)$/,
  //     type: "asset/resource",
  //   });
  //   return config;
  // },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
  env: {
    MONGODB_URI: process.env.MONGODB_URI,
    GOOGLE_CLIENT_EMAIL: process.env.GOOGLE_CLIENT_EMAIL,
    GOOGLE_PRIVATE_KEY: process.env.GOOGLE_PRIVATE_KEY,
    GOOGLE_SHEET_ID: process.env.GOOGLE_SHEET_ID,
    MONGODB_URI_BLOGS: process.env.MONGODB_URI_BLOGS,
    // Add this line
  },
};
console.log("MONGODB_URI:", process.env.MONGODB_URI);
export default nextConfig;
// next.config.mjs
