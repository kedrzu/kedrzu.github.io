module.exports = {
    plugins: [
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-typescript',
        'gatsby-plugin-root-import',
        'gatsby-plugin-sass',
        {
            resolve: `gatsby-plugin-sass-resources`,
            options: {
                resources: ['./src/styles/common.scss'],
            },
        },
        'gatsby-plugin-output',
    ],
};
