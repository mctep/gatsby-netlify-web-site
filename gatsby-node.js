const {createFilePath} = require(`gatsby-source-filesystem`);
const path = require(`path`);

exports.onCreateNode = ({node, getNode, actions}) => {
    const {createNodeField} = actions;
    if (node.internal.type === `MarkdownRemark`) {
        const fileNode = getNode(node.parent);

        if (fileNode.relativePath.indexOf('posts/') === 0) {
            const slug = createFilePath({node, getNode});

            createNodeField({
                node,
                name: 'slug',
                value: slug,
            });
        }
    }
};

exports.createPages = async ({graphql, actions}) => {
    const {createPage} = actions;
    const result = await graphql(`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `);

    result.data.allMarkdownRemark.edges.forEach(({node}) => {
        if (!node.fields) {
            return;
        }

        createPage({
            path: node.fields.slug,
            component: path.resolve(`./src/templates/blog-post.tsx`),
            context: {
                slug: node.fields.slug,
            },
        });
    });
};
