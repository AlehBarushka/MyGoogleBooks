import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Row } from 'react-bootstrap';

import SerchTermForm from '../SerchTermForm';

const Header = () => {
  return (
    <Container fluid className='header shadow-lg'>
      <Row>
        <Link to={'/'} className='text-decoration-none text-reset'>
          <h1 className='text-center text-white fw-bold mt-3'>Search For Books</h1>
        </Link>
      </Row>
      <SerchTermForm />
    </Container>
  );
};

export default Header;
