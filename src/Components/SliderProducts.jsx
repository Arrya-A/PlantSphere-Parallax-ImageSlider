import React from 'react';
import Slider from 'react-slick';
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import img4 from '../assets/img4.png';
import img5 from '../assets/img5.png';
import img6 from '../assets/img6.png';


const SliderProducts = () => {
    const images = [img1, img2, img3, img4, img5, img6];
    const headings = [
        'Succulents',
        'Cactus',
        'Pots & Planters',
        'Miniatures',
        'Gardening essentials',
        'Seeds',
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            { breakpoint: 1200, settings: { slidesToShow: 4, slidesToScroll: 1 } },
            { breakpoint: 992, settings: { slidesToShow: 3, slidesToScroll: 1 } },
            { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1 } },
            { breakpoint: 576, settings: { slidesToShow: 1, slidesToScroll: 1 } },
        ],
    };

    return (
        <section className='py-5' >
            <h2 className='text-center mb-5'>Shop Our Green Delights</h2>
            <Slider {...settings}>
                {images.map((img, index) => (
                    <div key={index} className='d-flex flex-column align-items-center' >
                        <img
                            src={img}
                            alt={`Slide ${index + 1}`}
                            className='rounded-5'
                            style={{ height: '200px', width: '200px', objectFit: 'cover' }}
                        />
                        <h2 className="card-heading ">{headings[index]}</h2>
                    </div>
                ))}
            </Slider>
        </section>
    )
}

export default SliderProducts