module.exports = {
  siteUrl: "https://selectivesystems.in", // Replace with your actual domain
  generateRobotsTxt: true, // Automatically generate robots.txt
  sitemapSize: 7000, // Number of URLs per sitemap file
  changefreq: "daily", // Frequency of changes
  priority: 0.7, // Default priority for URLs
  additionalPaths: async (config) => {
    // Add dynamic URLs here (if any)
    const dynamicPaths = [
      "/about",
      "/products/aluminium-windows",
      "/products/aluminium-windows/fixed-aluminium",
      "/products/aluminium-windows/awningaluminium",
      "/products/aluminium-windows/sliding-windows",
      "/products/aluminium-windows/casement-wnidow",
      "/products/aluminium-windows/glass-corwindow",
      "/products/door-seals",
      "/products/door-seals/threshold-floor",
      "/products/door-seals/bracketMounting",
      "/products/door-seals/Sliding-Windows",
      "/products/door-seals/Door-drop-seals",
      "/products/door-seals/Drop-down-seals",
      "/products/door-seals/Automatic-doors",
      "/products/railings",
      "/products/invisiblegrill",
      "/products/office-partitions",
      "/products/bathroom-partitions",
      "/products/queue-manager",
      "/contact",
    ];

    return dynamicPaths.map((path) => ({
      loc: `https://selectivesystems.in${path}`,
      lastmod: new Date().toISOString(), // Last modified date
    }));
  },
  //   exclude: ["/exclude-this-page"], // Example: excluding certain pages
};
