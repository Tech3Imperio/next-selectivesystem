module.exports = {
  siteUrl: "https://www.selectivesystems.in/", // Replace with your actual domain
  generateRobotsTxt: true, // Automatically generate robots.txt
  sitemapSize: 7000, // Number of URLs per sitemap file
  changefreq: "daily", // Frequency of changes
  priority: 0.7, // Default priority for URLs
  additionalPaths: async (config) => {
    // Add dynamic URLs here (if any)
    const dynamicPaths = [
      "/about",
      "/products/aluminium-windows",
      "/products/aluminium-windows/fixed-aluminium-window-01",
      "/products/aluminium-windows/awning-aluminium-window01",
      "/products/aluminium-windows/sliding-aluminium-window1",
      "/products/aluminium-windows/casement-aluminium-window",
      "/products/aluminium-windows/glass-corner-alum-windows",
      "/products/door-seals",
      "/products/door-seals/threshold-floor",
      "/products/door-seals/bracketMounting",
      "/products/door-seals/Sliding-Windows",
      "/products/door-seals/Door-drop-seals",
      "/products/door-seals/Drop-down-seals",
      "/products/door-seals/Automatic-doors",
      "/products/glass-railings",
      "/products/glass-railings/frameless-glass-railing",
      "/products/glass-railings/top-mounted-glass-raili",
      "/products/glass-railings/frameds-glass-railingss",
      "/products/invisiblegrill",
      "/products/office-partitions",
      "/products/bathroom-partitions",
      "/products/queue-manager",
      "/contact",
    ];

    return dynamicPaths.map((path) => ({
      loc: `https://www.selectivesystems.in${path}`,
      lastmod: new Date().toISOString(), // Last modified date
    }));
  },
  //   exclude: ["/exclude-this-page"], // Example: excluding certain pages
};
