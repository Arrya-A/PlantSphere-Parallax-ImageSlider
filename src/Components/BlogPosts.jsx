import React from 'react'
import { Card } from 'react-bootstrap'
import blogImg1 from '../assets/blog1.jpg'
import blogImg2 from '../assets/blog2.jpg'
import blogImg3 from '../assets/blog3.jpg'
import blogImg4 from '../assets/blog4.jpg'
import backgroundBlogPost from '../assets/background2.jpg'

const BlogPosts = () => {
  return (
    <>
      <section className='blogpost pb-5' style={{ backgroundImage: `url(${backgroundBlogPost})`, width: "100%" }}  >
        <h2 className='text-center p-5'>Blog Posts</h2>
        <div className='container'>
          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-3">
              <Card style={{ height: '500px' }}>
                <Card.Img variant="top" src={blogImg1} height={'200px'} />
                <Card.Body>
                  <Card.Text className='fw-bold mb-1'>Why PlantSphere is the Best Place to buy Succulents</Card.Text>
                  <Card.Text style={{ textAlign: 'justify' }}>PlantSphere presents array of succulent species, ranging from the classic Echeverias and Haworthias to the more exotic varieties like Lithops and Crassulas. We caters to all preferences and levels of expertise.</Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-3">
              <Card style={{ height: '500px' }}>
                <Card.Img variant="top" src={blogImg2} height={'200px'} />
                <Card.Body>
                  <Card.Text className='fw-bold mb-1'>Benefits of Having Plants at Home</Card.Text>
                  <Card.Text style={{ textAlign: 'justify' }}>Having plants at home not only enhances your decor but also improves air quality by filtering toxins and releasing oxygen. Additionally, studies show that indoor plants can boost your mood, reduce stress, and make your living space feel more vibrant.</Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-3">
              <Card style={{ height: '500px' }}>
                <Card.Img variant="top" src={blogImg3} height={'200px'} />
                <Card.Body>
                  <Card.Text className='fw-bold mb-1'>How to Keep Your Plants Thriving Year-Round</Card.Text>
                  <Card.Text style={{ textAlign: 'justify' }}>To keep your plants thriving year-round, adjust their care based on seasonal changes by monitoring watering, light, and humidity levels. Regularly check for pests and diseases, and don’t forget to fertilize during the growing season to provide essential nutrients.</Card.Text>
                </Card.Body>
              </Card>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-3">
              <Card style={{ height: '500px' }}>
                <Card.Img variant="top" src={blogImg4} height={'200px'} />
                <Card.Body>
                  <Card.Text className='fw-bold mb-1'>Why gardening is good for your mental health</Card.Text>
                  <Card.Text style={{ textAlign: 'justify' }}>Gardening is beneficial for mental health as it provides a calming, immersive activity that reduces stress and anxiety through connection with nature. Engaging in gardening also promotes physical activity, boosts mood through the release of endorphins, and fosters a sense of accomplishment.</Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default BlogPosts