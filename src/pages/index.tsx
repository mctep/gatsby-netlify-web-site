import React from 'react';
import {PageProps} from 'gatsby';
import {Header, Layout} from '../components/layout';

export default function IndexRoute(props: PageProps) {
    return (
        <Layout>
            <Header />
            <h1>Path:</h1>
            <p>{props.path}</p>
        </Layout>
    );
}
