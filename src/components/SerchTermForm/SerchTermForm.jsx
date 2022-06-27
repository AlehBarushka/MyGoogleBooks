import React from 'react';
import { useNavigate } from 'react-router-dom';

import {
  Col,
  Row,
  Form,
  FormControl,
  FormSelect,
  FormGroup,
  FormLabel,
  InputGroup,
  Button,
} from 'react-bootstrap';

const SerchTermForm = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate('/books/list');
  };

  return (
    <Form>
      <FormGroup className='mt-2'>
        <Row className='justify-content-center '>
          <Col md={4}>
            <InputGroup>
              <FormControl placeholder='Search...' />
              <Button size='sm' onClick={handleSubmit} variant='secondary' id='submit-button'>
                Search
              </Button>
            </InputGroup>
          </Col>
        </Row>
      </FormGroup>
      <FormGroup className='mt-2 '>
        <Row className='justify-content-center'>
          <Col className='me-2' xs md={2}>
            <FormLabel className='text-white'>Categories:</FormLabel>
            <FormSelect size='sm'>
              <option value='All'>All</option>
              <option value='art'>Art</option>
              <option value='biography'>Biography</option>
              <option value='computers'>Computers</option>
              <option value='history'>History</option>
              <option value='medical'>Medical</option>
              <option value='poetry'>Poetry</option>
            </FormSelect>
          </Col>
          <Col className='ms-2' xs md={2}>
            <FormLabel className='text-white'>Sorting By:</FormLabel>
            <FormSelect size='sm'>
              <option value='Relevance'>Relevance</option>
              <option value='Newest'>Newest</option>
            </FormSelect>
          </Col>
        </Row>
      </FormGroup>
    </Form>
  );
};

export default SerchTermForm;
