module.exports = {
  pathPrefix: `/software_engineer_existential_context_upliftment_and_beyond`,
  siteMetadata: {
    name: `Ishan Sheth`,
    date: `December 3, 2020`,
    title: `blog.imsheth.com`,
    description: `cognitive deductions. converged.`,
    itemName: `Software engineer : existential context, upliftment and beyond`,
    itemDate: `December 3, 2020`,
    siteUrl: `https://blog.imsheth.com`,
    itemUrl: `http://blog.imsheth.com/software_engineer_existential_context_upliftment_and_beyond/`,
    facebook: `https://www.facebook.com/imsheth`,
    twitter: `https://twitter.com/theimsheth`,
    coverImage: `https://media-exp1.licdn.com/dms/image/C5116AQHYdB8KE8-H1Q/profile-displaybackgroundimage-shrink_350_1400/0/1565523909675?e=1612396800&v=beta&t=JXNSIgS0-ek4uuozGMCNndsN4fgzQZIvhef_jYpFhbA`,
  },
  plugins: [
    `gatsby-plugin-layout`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `slides`,
        path: `${__dirname}/src/slides`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-copy-linked-files`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 1920,
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
};
