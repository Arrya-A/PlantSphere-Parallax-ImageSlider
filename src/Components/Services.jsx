import React from 'react'
import { Card } from 'react-bootstrap'

const Services = () => {
  return (
    <>
      <section className='services p-5' style={{ backgroundColor: 'rgb(33 79 56)' }}>
        <h2 className='text-center text-light pb-5'>Our Services</h2>
        <div className='container'>
          <div className="row ">
            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-3 ">
              <Card>
                <Card.Body>
                  <i className="fa-solid fa-truck-fast fs-1 mb-4"></i>
                  <Card.Title className='fw-bold mb-4'>Secure Shipping</Card.Title>
                  <Card.Text>Diligent care taken to deliver healthy plants</Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-3">
              <Card>
                <Card.Body>
                  <i className="fa-solid fa-star fs-1 mb-4"></i>
                  <Card.Title className='fw-bold mb-4'>Quality Products</Card.Title>
                  <Card.Text>We ensure the product quality that is our main goal</Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-3">
              <Card>
                <Card.Body>
                  <i className="fa-solid fa-repeat fs-1 mb-4"></i>
                  <Card.Title className='fw-bold mb-4'>7-10 Days Return</Card.Title>
                  <Card.Text>Return product within 7-10 days for any product you buy</Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-3">
              <Card>
                <Card.Body>
                  <i className="fa-solid fa-headset fs-1 mb-4"></i>
                  <Card.Title className='fw-bold mb-4'>Online Support</Card.Title>
                  <Card.Text>We ensure the product quality that you can trust easily</Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Services