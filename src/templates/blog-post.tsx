import React from 'react';
import styled from 'styled-components';
import {graphql, PageProps} from 'gatsby';
import {Header, Layout} from '../components/layout';

const Section = styled.section`
    padding: 34px;
`;

const PostDate = styled.div`
    color: #727272;
    font-size: 14px;
`;

export default function BlogPost(props: PageProps<any>) {
    const post = props.data.markdownRemark;
    return (
        <Layout>
            <Header />
            <Section>
                <PostDate>
                    {new Intl.DateTimeFormat('en-GB').format(new Date(post.frontmatter.datetime))}
                </PostDate>
                <h1>{post.frontmatter.title}</h1>
                <div dangerouslySetInnerHTML={{__html: post.html}} />
            </Section>
        </Layout>
    );
}

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: {slug: {eq: $slug}}) {
            html
            frontmatter {
                datetime
                title
            }
        }
    }
`;
