/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `GitBit - Microsoft 365 Security Administration (Exam MS-500)`,
    description: `Prepare for the Microsoft MS-500 exam`,
    author: `@gruberjl`
  },
  pathPrefix: "/WebSite",
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GitBit`,
        short_name: `GitBit`,
        description: `Prepare for the Microsoft MS-500 exam`,
        lang: `en`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `standalone`,
        icon: `src/images/android-chrome-512x512.png`,
        icon_options: {
          purpose: `any maskable`,
        },
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
  ]
}
