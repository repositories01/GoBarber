import React from 'react';

import { Container } from './styles';
import constructionGif from '../../assets/construction.gif';

const Dashboard: React.FC = () => {
  return (
    <>
      <Container>
        <img src={constructionGif} alt=""/>
      </Container>
    </>
  );
};

export default Dashboard;
