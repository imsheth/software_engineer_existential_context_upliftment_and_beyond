module.exports = {
  pathPrefix: `/software_engineer_existential_context_upliftment_and_beyond`,
  siteMetadata: {
    name: `Ishan Sheth`,
    date: `December 3, 2020`,
    title: `imsheth - Ishan Sheth`,
    description: `My thoughts on longevity as a software engineer`,
    itemName: `Software engineer : existential context, upliftment and beyond`,
    itemDate: `December 3, 2020`,
    siteUrl: `https://imsheth.com`,
    itemUrl: `https://imsheth.com/software_engineer_existential_context_upliftment_and_beyond/`,
    facebook: `https://www.facebook.com/imsheth`,
    twitter: `https://twitter.com/theimsheth`,
    coverImage: `https://raw.githubusercontent.com/imsheth/software_engineer_existential_context_upliftment_and_beyond/dev/software_engineer_existential_context_upliftment_and_beyond/src/assets/imsheth-banner.png`,
    favIcon: `https://raw.githubusercontent.com/imsheth/software_engineer_existential_context_upliftment_and_beyond/dev/software_engineer_existential_context_upliftment_and_beyond/src/assets/favicon-32x32.png`,
    icons: {
      i48: `https://raw.githubusercontent.com/imsheth/software_engineer_existential_context_upliftment_and_beyond/dev/software_engineer_existential_context_upliftment_and_beyond/src/assets/icons/icon-48x48.png`,
      i72: `https://raw.githubusercontent.com/imsheth/software_engineer_existential_context_upliftment_and_beyond/dev/software_engineer_existential_context_upliftment_and_beyond/src/assets/icons/icon-72x72.png`,
      i96: `https://raw.githubusercontent.com/imsheth/software_engineer_existential_context_upliftment_and_beyond/dev/software_engineer_existential_context_upliftment_and_beyond/src/assets/icons/icon-96x96.png`,
      i144: `https://raw.githubusercontent.com/imsheth/software_engineer_existential_context_upliftment_and_beyond/dev/software_engineer_existential_context_upliftment_and_beyond/src/assets/icons/icon-144x144.png`,
      i192: `https://raw.githubusercontent.com/imsheth/software_engineer_existential_context_upliftment_and_beyond/dev/software_engineer_existential_context_upliftment_and_beyond/src/assets/icons/icon-192x192.png`,
      i256: `https://raw.githubusercontent.com/imsheth/software_engineer_existential_context_upliftment_and_beyond/dev/software_engineer_existential_context_upliftment_and_beyond/src/assets/icons/icon-256x256.png`,
      i384: `https://raw.githubusercontent.com/imsheth/software_engineer_existential_context_upliftment_and_beyond/dev/software_engineer_existential_context_upliftment_and_beyond/src/assets/icons/icon-384x384.png`,
      i512: `https://raw.githubusercontent.com/imsheth/software_engineer_existential_context_upliftment_and_beyond/dev/software_engineer_existential_context_upliftment_and_beyond/src/assets/icons/icon-512x512.png`,
    }
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
