import React from 'react';

import { Container, Button } from 'react-bootstrap';

import CardsGrid from './CardsGrid';

const BooksList = () => {
  return (
    <Container>
      <div className='mt-3 text-center fw-bold'>Found 0 result</div>
      <CardsGrid />
      <div className='text-center'>
        <Button className='px-5 mt-3 mb-5' variant='outline-secondary'>
          Load more...
        </Button>
      </div>
    </Container>
  );
};

export default BooksList;
