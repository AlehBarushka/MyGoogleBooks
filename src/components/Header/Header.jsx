import React from 'react';

import { Container, Row } from 'react-bootstrap';
import styles from './Header.module.css';

import SerchTermForm from '../SerchTermForm';

const Header = () => {
  return (
    <Container fluid className={`${styles.header} shadow-lg`}>
      <Row>
        <h1 className='text-center text-white fw-bold mt-3'>Search For Books</h1>
      </Row>
      <SerchTermForm />
    </Container>
  );
};

export default Header;
