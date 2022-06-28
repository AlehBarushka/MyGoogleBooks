import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Container, Col, Button, Row, Image } from 'react-bootstrap';

import noCover from '../../assets/no_cover_thumb.gif';

const DetailsBookPage = () => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate('/books/list');
  };

  return (
    <Container>
      <Row xs={1} md={2} className='mt-5'>
        <Col className='p-3 d-flex justify-content-center img-container'>
          <Image className='shadow' src={noCover} />
        </Col>
        <Col className='pt-2 px-5'>
          <div className='fw-light mb-3'>Books category</div>
          <h3 className='mb-2'>Books title</h3>
          <div className='fw-lighter text-decoration-underline mb-2'>Books Authors</div>
          <p className='fw-light'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio natus labore
            excepturi velit, minima voluptas, placeat modi, ducimus veritatis a provident ut. Neque,
            accusantium enim? Officiis autem minus suscipit debitis?
          </p>
        </Col>
      </Row>
      <div className='text-center'>
        <Button onClick={handleOnClick} className='px-3 mt-5 mb-5' variant='secondary'>
          Back
        </Button>
      </div>
    </Container>
  );
};

export default DetailsBookPage;
