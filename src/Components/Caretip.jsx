import React from 'react'
import careTipImg from '../assets/caretip.webp'
const Caretip = () => {
  return (
    <section className='container p-5'>






      <div className="trip_planner mx-3 mx-md-5 p-md-5">
        <div className="container">
          <div className="row ps-3 ps-md-5 shadow rounded" id="trip_plan" style={{ backgroundColor: 'rgb(250, 230, 194)' }}>
            <div className="col-md-6 mt-3 mt-md-0">
              <img className="image_grp img-fluid" src={careTipImg} alt="" />
            </div>
            <div className="col-md-6" >
              <h3 className='mt-3'>Care tips</h3>
              <p>1. After recieveing the plants open the box 📦 as soon as possible .</p>
              <p>2. Air dry the plants for 2-3 hours on fresh air .</p>
              <p>3. Plant in well drained soil . ( 30%sand + 30% soil + 20% vermicompost + 20% perlite ) .</p>
              <p>4. Water plants after 2-3 days and don't give direct sunlight to newly planted succulents for at least 10 days .</p>
              <p className=''><span className='fw-bold'>Note:</span> Always water succulents when top layer of soil feels dry in roots of plant rather than leaves .</p>
            </div>

          </div>
        </div>
      </div>

    </section>
  )
}

export default Caretip