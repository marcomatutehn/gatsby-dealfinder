const fetch = require(`node-fetch`);
const { createHttpLink } = require(`apollo-link-http`);

module.exports = {
  plugins: [
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "HASURA",
        fieldName: "hasura",
        createLink: () => {
          return createHttpLink({
            uri: process.env.GATSBY_HASURA_GRAPHQL_URL,
            headers: {},
            fetch
          });
        },
        refetchInterval: 10 // Refresh every 60 seconds for new data
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Deal Finder`,
        short_name: `DealFinder`,
        start_url: `/`,
        background_color: `#FFF`,
        theme_color: `#FAE042`,
        display: `standalone`,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        appendScript: require.resolve(`./src/utils/sw.js`),
      },
    },
    `gatsby-plugin-styled-components`,
  ]
};
