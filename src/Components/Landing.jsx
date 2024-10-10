import React from 'react'
import background from '../assets/background.jpg'



const Landing = () => {
    return (
        <>
            <section className='landing d-flex justify-content-center align-items-center' style={{backgroundImage:`url(${background})`, width:"100%" }}>
                <h2 className='text fw-bold fs-1'>Refresh Your Home, Start Planting!</h2>
            </section>
        </>
    )
}

export default Landing

