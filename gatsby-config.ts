import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl: `https://www.theaspen.blog`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    'gatsby-remark-embed-video',
    'gatsby-plugin-image',
    'gatsby-remark-images',
    'gatsby-plugin-sharp',
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        // The unique name for each instance
        name: `posts`,
        // Path to the directory
        path: `${__dirname}/src/posts/`,
    }
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      // The unique name for each instance
      name: `images`,
      // Path to the directory
      path: `${__dirname}/src/images/`,
  }
},
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        {
          resolve: "gatsby-remark-embed-video",
          options: {
            width: 800,
            ratio: 1.77, // Optional: Defaults to 16/9 = 1.77
            height: 400, // Optional: Overrides optional.ratio
            related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
            noIframeBorder: true, //Optional: Disable insertion of <style> border: 0
            loadingStrategy: 'lazy', //Optional: Enable support for lazy-load offscreen iframes. Default is disabled.
            urlOverrides: [
              {
                id: "youtube",
                embedURL: (videoId: string) =>
                  `https://www.youtube-nocookie.com/embed/${videoId}`,
              },
            ], //Optional: Override URL of a service provider, e.g to enable youtube-nocookie support
            containerClass: "embedVideo-container", //Optional: Custom CSS class for iframe container, for multiple classes separate them by space
            iframeId: false, //Optional: if true, iframe's id will be set to what is provided after 'video:' (YouTube IFrame player API requires iframe id)
          },
        },
        {
          resolve: `gatsby-remark-images`,
          options: {
            // It's important to specify the maxWidth (in pixels) of
            // the content container as this plugin uses this as the
            // base for generating different widths of each image.
            maxWidth: 1200,
            quality: 100
          },
        },
        {
          resolve: `gatsby-remark-copy-linked-files`,
          options: {
            ignoreFileExtensions: [`png`, `jpg`, `jpeg`, `bmp`, `tiff`],
          },
        },
      ],
    },
  },

  ],
}

export default config
