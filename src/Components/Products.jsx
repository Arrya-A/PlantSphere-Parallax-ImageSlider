import React from 'react'
import { Button, Card } from 'react-bootstrap'
import p1 from '../assets/p1.png'
import p2 from '../assets/p2.png'
import p3 from '../assets/p3.png'
import p4 from '../assets/p4.png'
import p5 from '../assets/p5.png'
import p6 from '../assets/p6.png'
import p7 from '../assets/p7.png'
import p8 from '../assets/p8.png'
import background from '../assets/background.jpg'


const Products = () => {
  return (
    <>
      <section className='products pb-5' style={{ backgroundImage: `url(${background})`, width: "100%" }}>
        <h2 className='text-center p-5'>Our Best Sellers</h2>
        <div className='container'>
          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-3">
              <Card>
                <Card.Img variant="top" src={p1} />
                <Card.Body className='m-2'>
                  <Card.Text className='fw-bold mb-0'>Crassula Jade</Card.Text>
                  <Card.Text>Rs.119.00</Card.Text>
                  <Button variant="success">Shop Now</Button>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-3">
              <Card>
                <Card.Img variant="top" src={p2} />
                <Card.Body className='m-2'>
                  <Card.Text className='fw-bold mb-0'>Syngonium Wendlandii Velvet</Card.Text>
                  <Card.Text>Rs.95.00</Card.Text>
                  <Button variant="success">Shop Now</Button>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-3">
              <Card>
                <Card.Img variant="top" src={p3} />
                <Card.Body className='m-2'>
                  <Card.Text className='fw-bold mb-0'>Variegated String Of Pearls</Card.Text>
                  <Card.Text>Rs.199.00</Card.Text>
                  <Button variant="success">Shop Now</Button>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-3">
              <Card>
                <Card.Img variant="top" src={p4} />
                <Card.Body className='m-2'>
                  <Card.Text className='fw-bold mb-0'>Brazillian Lucky wood Plant</Card.Text>
                  <Card.Text>Rs.239.00</Card.Text>
                  <Button variant="success">Shop Now</Button>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-3">
              <Card>
                <Card.Img variant="top" src={p5} />
                <Card.Body className='m-2'>
                  <Card.Text className='fw-bold mb-0'>Echinopsis Chamaecereus</Card.Text>
                  <Card.Text>Rs.199.00</Card.Text>
                  <Button variant="success">Shop Now</Button>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-3">
              <Card>
                <Card.Img variant="top" src={p6} />
                <Card.Body className='m-2'>
                  <Card.Text className='fw-bold mb-0'>Syngonium Mickey</Card.Text>
                  <Card.Text>Rs.69.00</Card.Text>
                  <Button variant="success">Shop Now</Button>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-3">
              <Card>
                <Card.Img variant="top" src={p7} />
                <Card.Body className='m-2'>
                  <Card.Text className='fw-bold mb-0'>Philodendron</Card.Text>
                  <Card.Text>Rs.99.00</Card.Text>
                  <Button variant="success">Shop Now</Button>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-3">
              <Card>
                <Card.Img variant="top" src={p8} />
                <Card.Body className='m-2'>
                  <Card.Text className='fw-bold mb-0'>Yellow Variegated Camfire</Card.Text>
                  <Card.Text>Rs.199.00</Card.Text>
                  <Button variant="success">Shop Now</Button>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Products