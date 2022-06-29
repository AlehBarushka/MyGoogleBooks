import React from 'react';

import { Container } from 'react-bootstrap';

const HomePage = () => {
  return (
    <Container>
      <h3 className='fs-3 text-center text-secondary mt-5'> Welcome to my website.</h3>
      <p className='fs-4 text-center text-secondary'>
        This service works using the Google Books API. <br />
        The technology stack is React.js, Redux, Redux-Saga, Bootstrap.
      </p>
    </Container>
  );
};

export default HomePage;
