module.exports = {
    plugins: [
        'gatsby-plugin-typescript',
        'gatsby-plugin-netlify-cms',
        'gatsby-plugin-styled-components',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'content',
                path: `${__dirname}/content/`,
            },
        },
        'gatsby-transformer-remark',
        'gatsby-plugin-mdx',
    ],
};
