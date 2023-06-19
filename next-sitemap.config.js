/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://example.com",
  generateRobotsTxt: true, // (optional)
  generateIndexSitemap: false, // It's a small website I do not need indexed sitemap
  // ...other options
};
// June 2023: I decide to use next-sitemap to build a sitemap
// https://github.com/iamvishnusankar/next-sitemap
