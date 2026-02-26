/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://kandorlogistics.us', // replace with your actual domain
  generateRobotsTxt: true, // (optional) generate robots.txt
  sitemapSize: 7000,
  changefreq: 'daily',
  priority: 0.7,
  exclude: ['/404'], // exclude 404 or other unwanted routes
}
