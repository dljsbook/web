import * as React from 'react';
import styled from 'react-emotion';
import { transparentize } from 'polished';
import { Link } from 'gatsby';

import { heights, dimensions, colors } from '../styles/variables';
import Container from './Container';
import logo from './logo.png';

const StyledHeader = styled.header`
  height: ${heights.header}px;
  padding: 0 ${dimensions.containerPadding}rem;
  background-color: ${colors.brand};
  color: ${transparentize(0.5, colors.white)};
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
  z-index: 1;
`;

const HeaderInner = styled(Container)`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  max-width: 76%;
  margin: 0;
`;

const HomepageLink = styled(Link)`
  color: ${colors.white};
  font-size: 1.25rem;
  font-weight: 400;
  margin-right: 16px;
  padding: 0;
  display: flex;
  flex-direction: row;

  &:hover,
  &:focus {
    text-decoration: none;
  }

  img {
    max-height: 30px;
    display: block;
    margin-right: 10px;
  }
`;

// const StyledNavLink = styled(Link)`
//   color: rgba(255,255,255,.5);
//   padding: 0.5rem;
//   font-size: .9rem;
//   margin-top: 4px;

//   &:hover {
//     text-decoration: none;
//     color: rgba(255,255,255,.8);
//   }

//   &:last-child {
//     padding-right: 0;
//   }
// `;

// const Right = styled.div`
//   display: flex;
//   flex: 1;
//   justify-content: flex-end;
// `;

// const NavLink = (props: any) => (
//   <StyledNavLink activeStyle={{ color: 'rgba(255,255,255,.8)'}} {...props} />
// );

interface HeaderProps {
  title: string;
}

const ON = false;

const Header: React.SFC<HeaderProps> = ({ title }) => ON ? (
  <StyledHeader>
    <HeaderInner>
      <HomepageLink to="/">
        <img src={logo} />
        {title}
      </HomepageLink>
      <Right>
        <NavLink to="/introduction">Introduction</NavLink>
        <NavLink to="/data">Data</NavLink>
        <NavLink to="/training">Training</NavLink>
        <NavLink to="/models">Models</NavLink>
        <NavLink to="/resources">Resources</NavLink>
      </Right>
    </HeaderInner>
  </StyledHeader>
) : null;

export default Header;
