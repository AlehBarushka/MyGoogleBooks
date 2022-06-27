import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Container, Col, Button, Row, Image, Card } from 'react-bootstrap';
import bookImg from '../../assets/book-sample.jpg';

const BookItem = () => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate('/books/list');
  };

  return (
    <Container>
      <Row xs={1} md={2} className='mt-5'>
        <Col className='p-2 d-flex justify-content-center img-block'>
          <Image className='shadow' src={bookImg} />
        </Col>
        <Col className='pt-2 px-5'>
          <div className='fw-light mb-3'>Books category</div>
          <h3 className='mb-2'>Books title</h3>
          <div className='fw-lighter text-decoration-underline mb-2'>Books Authors</div>
          <Card border='secondary' className='p-2'>
            <Card.Text className='fw-light'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius recusandae, rerum,
              laudantium voluptatum vero officia accusamus omnis quisquam exercitationem ratione
              quibusdam repellat qui distinctio ea est vel mollitia. Blanditiis, explicabo.
            </Card.Text>
          </Card>
        </Col>
      </Row>
      <div className='text-center'>
        <Button onClick={handleOnClick} className='px-3 mt-3 mb-5' variant='secondary'>
          Back
        </Button>
      </div>
    </Container>
  );
};

export default BookItem;
