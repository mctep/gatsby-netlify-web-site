import React from 'react';
import {graphql, Link, PageProps} from 'gatsby';
import styled from 'styled-components';
import {Header, Layout} from '../components/layout';

const Section = styled.section`
    padding: 0 34px;
`;

const PostLink = styled(Link)`
    display: flex;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    position: relative;
    height: 430px;
    margin-bottom: 30px;
    background-position: bottom center;
`;

const PostCard = styled.div`
    position: absolute;
    background: #fff;
    padding: 30px;
    bottom: 0px;
    right: 0px;
    max-width: calc(100% - 60px);
    width: 50%;
    color: #0054a6;
    font-size: 24px;
`;

interface Post {
    path: string;
    shortTitle: string;
    preview: string;
}

export default function IndexRoute(props: PageProps<any>) {
    const posts: Post[] = props.data.allMarkdownRemark.edges.map(({node}: any) => node.frontmatter);
    console.log(posts);

    return (
        <Layout>
            <Header />
            <Section>
                <h1>Highlights</h1>
                {posts.map((post) => (
                    <div key={post.path}>
                        <PostLink
                            to={`/posts/${post.path}`}
                            style={{
                                backgroundImage: `url(${post.preview})`,
                            }}
                        >
                            <PostCard>{post.shortTitle}</PostCard>
                        </PostLink>
                    </div>
                ))}
            </Section>
        </Layout>
    );
}

export const query = graphql`
    query MyQuery {
        allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/posts/"}}) {
            edges {
                node {
                    frontmatter {
                        shortTitle
                        path
                        preview
                    }
                }
            }
        }
    }
`;
