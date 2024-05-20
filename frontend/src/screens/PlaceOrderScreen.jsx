import React from 'react'
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Row, Col, ListGroup, Image, Card } from 'react-bootstrap';
import CheckoutSteps from '../components/CheckoutSteps';

const PlaceOrderScreen = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    if(!cart.shippingAddress.address){
        navigate('/shipping');
    }else if(!cart.savePaymentMethod){
        navigate('/payment');
    }
  }, [cart.shippingAddress.address, cart.savePaymentMethod, navigate]);


  return (
    <>  
       <CheckoutSteps step1 step2 step3 step4 />
       <Row>
          <Col md={8}>Column
            {/* <ListGroup variant='flush'>
                <ListGroup.Item>
                    <h2>Shipping</h2>
                    <p>
                        <strong>Address: </strong>
                    </p>
                </ListGroup.Item>
            </ListGroup> */}
          </Col>
          <Col md={4}>
            Column
          </Col>
       </Row>
    </>
  )
};

export default PlaceOrderScreen