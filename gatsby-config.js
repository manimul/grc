const resolveConfig = require('tailwindcss/resolveConfig');
const tailwindConfig = require('./tailwind.config.js');
const path = require(`path`);
const fullConfig = resolveConfig(tailwindConfig);

module.exports = {
  siteMetadata: {
    title: `Global River Center`,
    description: `We are building better futures for young people in non-urban Africa. Our River Center concept combines in-demand services in a sustainable commercial business model. We want to improve the quality of life in non-urban African communities by offering a viable alternative to city migration.`,
    author: `@manimul`,
  },
  plugins: [
    `gatsby-plugin-eslint`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-smoothscroll`,

    {
      resolve: `gatsby-source-wordpress`,
      options: {
        // Available options and their defaults:
        url: `http://globalrivercenter.kinsta.cloud/graphql`,
      },
    },

    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        // Available options and their defaults:
        base64Width: 20,
        forceBase64Format: ``, // valid formats: png,jpg,webp
        useMozJpeg: process.env.GATSBY_JPEG_ENCODER === `MOZJPEG`,
        stripMetadata: true,
        defaultQuality: 50,
      },
    },
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: 'YOUR_GOOGLE_ANALYTICS_TRACKING_ID',
          // Setting this parameter is optional
          anonymize: true,
        },
        // Defines the environments where the tracking should be available  - default is ["production"]
        environments: ['production', 'development'],
      },
    },

    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /images\/.*\.svg/,
        },
      },
    },

    {
      resolve: 'gatsby-plugin-anchor-links',
      options: {
        offset: -100,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-tailwind`,
        short_name: `starter`,
        start_url: `/`,
        background_color: fullConfig.theme.colors.white,
        theme_color: fullConfig.theme.colors.teal['400'],
        display: `minimal-ui`,
        icon: `src/images/grc-icon.png`,
      },
    },
    {
      resolve: 'gatsby-background-image-es5',
      options: {
        // add your own characters to escape, replacing the default ':/'
        specialChars: '/:',
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require(`tailwindcss`)(tailwindConfig),
          require(`autoprefixer`),
          ...(process.env.NODE_ENV === `production`
            ? [require(`cssnano`)]
            : []),
        ],
      },
    },
    `gatsby-plugin-offline`,
  ],
};
