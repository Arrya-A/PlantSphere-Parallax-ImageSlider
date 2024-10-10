import React from 'react'

const Footer = () => {
  return (
    <><div className='row w-100 p-5'>
    <div className="col-md-4">
      <h4 className='text-success mb-4'>PlantSphere</h4>
      <p style={{textAlign:'justify'}}>PlantSphere, where lush greenery meets expert care. Discover a world of vibrant plants and top-notch services designed to bring nature closer to your home!"</p>
    </div>
    <div className="col-md-2 d-md-flex justify-content-center">
    <div>
      <h4 className='mb-4 text-success'>Quick Links</h4>
     
        <p>Home</p>
        <p>About Us</p>
        <p>Contact Us</p>
     </div>
    </div>
    <div className="col-md-1"></div>
    <div className="col-md-2">
    <h4 className='mb-4 text-success'>Guides</h4>
     <div>
        <p>FAQs</p>
        <p>Track Your Order</p>
        <p>Privacy Policy</p>
     </div>
    </div>
    <div className="col md-3 d-md-flex justify-content-center">
      <div>
        <h4 className='text-success'>Contact Us</h4>
        <div className='d-flex mt-4'>
          <input type="text" className='form-control' placeholder='Email Id' />
          <button className='btn btn-outline-success ms-4'>Subscribe</button>
        </div>
        <div className='d-flex justify-content-between mt-4'>
        <i className="fa-brands fa-instagram fs-2 text-success"></i>
        <i className="fa-brands fa-facebook fs-2 text-success"></i>        
        <i className="fa-brands fa-whatsapp fs-2 text-success"></i>      
        <i className="fa-brands fa-youtube fs-2 text-success"></i>  
        </div>
      </div>
      
    </div>
  </div>
</>
  )
}

export default Footer