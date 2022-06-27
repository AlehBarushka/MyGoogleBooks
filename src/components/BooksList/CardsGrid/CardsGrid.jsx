import React from 'react';
import { Link } from 'react-router-dom';

import { Row, Col, Card } from 'react-bootstrap';

import bookSample from '../../../assets/book-sample.jpg';

const CardsGrid = () => {
  const booksSample = [
    { title: 'Sample', author: 'Jon Doe', category: 'Art' },
    { title: 'Sample', author: 'Jon Doe', category: 'Art' },
    { title: 'Sample', author: 'Jon Doe', category: 'Art' },
    { title: 'Sample', author: 'Jon Doe', category: 'Art' },
    { title: 'Sample', author: 'Jon Doe', category: 'Art' },
  ];

  return (
    <Row xs={1} md={2} lg={3} xl={4} className='g-4 mt-3'>
      {booksSample.map((el, index) => {
        return (
          <Link to={'/books/id'} key={index} className='text-decoration-none text-reset'>
            <Col>
              <Card>
                <div className='p-5'>
                  <Card.Img className='shadow' src={bookSample} />
                </div>
                <Card.Body>
                  <Card.Subtitle className='fw-light text-decoration-underline mb-2'>
                    {el.category}
                  </Card.Subtitle>
                  <Card.Title>{el.title}</Card.Title>
                  <Card.Text className='fw-light'>{el.author}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Link>
        );
      })}
    </Row>
  );
};

export default CardsGrid;
