import React from 'react';
import { Link } from 'react-router-dom';

import { Row, Col, Card } from 'react-bootstrap';

import noCover from '../../../assets/no_cover_thumb.gif';

const CardsGrid = ({ books }) => {
  return (
    <Row xs={1} md={2} lg={3} xl={4} className='g-4 mt-3'>
      {books?.length > 0 &&
        books.map(el => {
          const authors = el.volumeInfo.authors?.join(', ');
          const img = el.volumeInfo.imageLinks?.thumbnail;
          const title = el.volumeInfo.title;
          const firstCategory = el.volumeInfo.categories?.[0];

          return (
            <Col key={el.id}>
              <Card bg='light'>
                <div className='card-img-contaier d-flex justify-content-center p-5'>
                  <Link to={`/books/${el.id}`} className='text-decoration-none text-reset'>
                    <Card.Img className='shadow' src={img || noCover} />
                  </Link>
                </div>
                <Card.Body>
                  <Card.Subtitle className='fw-light text-decoration-underline my-2'>
                    {firstCategory}
                  </Card.Subtitle>
                  <Card.Title>{title}</Card.Title>
                  <Card.Text className='fw-light'>{authors}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
    </Row>
  );
};

export default CardsGrid;
