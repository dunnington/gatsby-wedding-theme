require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Super Awesome Wedding Site`,
    description: `We're gettin hitched!`,
  },
  plugins: [
    {
      resolve: `@dunnington/gatsby-theme-wedding`,
      options: {
        contentPath: "occasion", // Tell the theme where your data is.
        basePath: "/", // Tell the theme which URL to render the theme at.
      },
    },
  ],
}
