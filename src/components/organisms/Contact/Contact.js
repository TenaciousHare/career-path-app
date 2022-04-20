import React from 'react';
import { Wrapper, ContactsWrapper, StyledExternalLink } from './Contact.styles';
import { Title } from 'components/atoms/Title/Title';

const Contact = () => {
  return (
    <Wrapper>
      <Title>Contact Me</Title>
      <ContactsWrapper>
        <StyledExternalLink href="https://www.facebook.com/pawel.zajaczkowski91/" target="_blank">
          <span className="icon">
            <i className="fa-brands fa-facebook-square"></i>
          </span>
          <span className="text">Facebook</span>
        </StyledExternalLink>
      </ContactsWrapper>
      <ContactsWrapper>
        <StyledExternalLink href="https://www.linkedin.com/in/pawel-zajaczkowski91/" target="_blank">
          <span className="icon">
            <i className="fa-brands fa-linkedin"></i>
          </span>
          <span className="text">Linkedin</span>
        </StyledExternalLink>
      </ContactsWrapper>
      <ContactsWrapper>
        <StyledExternalLink href="https://github.com/TenaciousHare" target="_blank">
          <span className="icon">
            <i className="fa-brands fa-github-square"></i>
          </span>
          <span className="text">GitHub</span>
        </StyledExternalLink>
      </ContactsWrapper>
      <ContactsWrapper>
        <StyledExternalLink href="mailto:pawel.zajaczkowski91@gmail.com">
          <span className="icon">
            <i className="fa-solid fa-envelope"></i>
          </span>
          <span className="text">Mail</span>
        </StyledExternalLink>
      </ContactsWrapper>
    </Wrapper>
  );
};

export default Contact;
