import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { MAX_RESULTS } from '../../constants/api';

import { Container, Button } from 'react-bootstrap';

import Loader from '../Loader';
import CardsGrid from './CardsGrid';

const BooksList = () => {
  const { isLoading, total, books } = useSelector(state => state.volumeList);
  const navigate = useNavigate();

  //This effect is intended to redirect to the home page after reloadding the page with a list of books
  useEffect(() => {
    if (!isLoading && books?.length === 0) {
      navigate('/', { replace: true });
    }
  }, [books, isLoading, navigate]);

  return (
    <Container>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className='mt-3 text-center fw-bold'>Found {total} result</div>
          <CardsGrid books={books} />
          <div className='text-center'>
            {total > MAX_RESULTS && (
              <Button className='px-5 mt-3 mb-5' variant='outline-secondary'>
                Load more...
              </Button>
            )}
          </div>
        </>
      )}
    </Container>
  );
};

export default BooksList;
