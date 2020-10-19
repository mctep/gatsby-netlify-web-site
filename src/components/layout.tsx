import React from 'react';
import styled, {StyledComponentPropsWithRef} from 'styled-components';
import {Link} from 'gatsby';

import './global.css';

export const Layout = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    min-width: 600px;
    margin: 0 auto;
`;

const HeaderBlock = styled.header`
    flex-grow: 0;
    flex-shrink: 0;
    display: flex;
    color: #fff;
    background-color: #0062a0;
    background-image: linear-gradient(#0062a0 0%, #00759b 34%, #00a08e 100%);
    min-height: 440px;
`;

export const Content = styled.div`
    flex-grow: 1;
    flex-shrink: 1;
`;

const Logo = styled(Link)`
    width: 220px;
    height: 80px;
    padding: 30px;
    box-sizing: border-box;
    background-image: url('/assets/genestack_logo.png');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center center;
    background-origin: content-box;
    display: inline-block;
`;

export function Header(props: StyledComponentPropsWithRef<typeof HeaderBlock>) {
    return (
        <HeaderBlock {...props}>
            <Logo to="/" />
            {props.children}
        </HeaderBlock>
    );
}
