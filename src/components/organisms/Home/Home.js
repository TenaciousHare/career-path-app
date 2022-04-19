import React from 'react';
import { Title } from 'components/atoms/Title/Title';
import { Wrapper, Banner, StyledLogo, Paragraph } from './Home.styles';

const Home = () => {
  return (
    <Wrapper>
      <Banner>
        <StyledLogo />
        <Title>Career Path App</Title>
      </Banner>
      <Paragraph>
        The purpose of this app is to test my React programming skills. While solving the tasks, I tried to use my experience gained while creating
        other projects. I tried to perform them knowing that I am creating a more complicated system than what was indicated in the task. I used
        technologies that, in my opinion, should be used in larger projects.
      </Paragraph>
    </Wrapper>
  );
};

export default Home;
