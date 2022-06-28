import React from 'react';

import Spinner from 'react-bootstrap/Spinner';
import { Row } from 'react-bootstrap';

const Loader = () => {
  return (
    <Row className='justify-content-center mt-5'>
      <Spinner animation='border' variant='secondary' />
    </Row>
  );
};

export default Loader;
