import React from 'react';
import styled, {StyledComponentPropsWithRef} from 'styled-components';
import {Link as _Link} from 'gatsby';

import './global.css';

export const Layout = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    min-width: 600px;
    margin: 0 auto;
`;

const Link = styled(_Link)``;

const HeaderBlock = styled.header`
    flex-grow: 0;
    flex-shrink: 0;
    color: #fff;
    background-color: #0062a0;
    background-image: linear-gradient(#0062a0 0%, #00759b 34%, #00a08e 100%);
    padding: 0 26px;

    ${Link} {
        color: #fff;
        text-decoration: none;
        font-size: 18px;
    }
`;

const HeaderContent = styled.div`
    font-size: 18px;
    line-height: 26px;
`;

const Nav = styled.nav`
    display: flex;
    align-items: baseline;
    flex-wrap: wrap;
`;

export const Content = styled.div`
    flex-grow: 1;
    flex-shrink: 1;
`;

const Logo = styled(Link)`
    width: 140px;
    height: 20px;
    margin: 30px 30px 30px 0;
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
            <Nav>
                <Logo to="/" />
                <Link to="/company">Company</Link>
            </Nav>
            <HeaderContent>{props.children}</HeaderContent>
        </HeaderBlock>
    );
}
