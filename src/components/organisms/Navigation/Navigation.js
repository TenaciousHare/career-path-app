import React from 'react';
import { Indicator, StyledLink, NavWrapper, LinkWrapper } from 'components/organisms/Navigation/Navigation.styles';

const Navigation = () => {
  return (
    <NavWrapper>
      <LinkWrapper>
        <StyledLink to="/career-path-app">
          <span className="icon">
            <i className="fa-solid fa-house" />
          </span>
          <span className="text">Home</span>
        </StyledLink>

        <StyledLink to="/career-path-app/add-preference">
          <span className="icon">
            <i className="fa-solid fa-file-circle-plus" />
          </span>
          <span className="text">Add preference</span>
        </StyledLink>

        <StyledLink to="/career-path-app/show-preferences">
          <span className="icon">
            <i className="fa-solid fa-file-circle-check" />
          </span>
          <span className="text">Show preferences</span>
        </StyledLink>

        <StyledLink to="/career-path-app/contact">
          <span className="icon">
            <i className="fa-solid fa-address-book" />
          </span>
          <span className="text">Contact</span>
        </StyledLink>

        <Indicator className="indicator"></Indicator>
      </LinkWrapper>
    </NavWrapper>
  );
};

export default Navigation;
