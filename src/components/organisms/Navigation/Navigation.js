import React from 'react';
import { Indicator, StyledLink, NavWrapper, LinkWrapper } from 'components/organisms/Navigation/Navigation.styles';

const Navigation = () => {
  return (
    <NavWrapper>
      <LinkWrapper>
        <StyledLink to="/">
          <span className="icon">
            <i className="fa-solid fa-house" />
          </span>
          <span className="text">Home</span>
        </StyledLink>

        <StyledLink to="/add-preference">
          <span className="icon">
            <i className="fa-solid fa-file-circle-plus" />
          </span>
          <span className="text">Add preference</span>
        </StyledLink>

        <StyledLink to="/show-preferences">
          <span className="icon">
            <i className="fa-solid fa-file-circle-check" />
          </span>
          <span className="text">Show preferences</span>
        </StyledLink>

        <StyledLink to="/contact">
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
