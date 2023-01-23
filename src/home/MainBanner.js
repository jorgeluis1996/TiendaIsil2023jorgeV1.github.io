import React from 'react'
import './MainBanner.css';
import slide1 from './../assets/images/tienda1.jpg';
import slide2 from './../assets/images/tienda2.jpg';
import slide3 from './../assets/images/tienda3.jpg';
import slide4 from './../assets/images/tienda4.jpg';
import slide5 from './../assets/images/tienda5.jpg';

export default function MainBanner() {
    return (
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={slide1} className="d-block w-100" alt="..."/>
                        <div className="container banner">
                        <h1>TALENTED <br></br>SOLUTIONS</h1>
                        <span>FINANCIAL PLANNING</span>
                        <p>Lorem Ipsum is simply dummy text of the <br></br>printing and typesetting industry.</p>
                        <button className='btnBanner'>GET STARTED NOW</button>
                        </div>
                </div>
                <div className="carousel-item">
                    <img src={slide2} className="d-block w-100" alt="..."/>
                        <div className="container banner">
                        <h1>TALENTED <br></br>SOLUTIONS</h1>
                        <span>FINANCIAL PLANNING</span>
                        <p>Lorem Ipsum is simply dummy text of the <br></br>printing and typesetting industry.</p>
                        <button className='btnBanner'>GET STARTED NOW</button>
                        </div>
                </div>
                <div className="carousel-item">
                    <img src={slide3} className="d-block w-100" alt="..."/>
                        <div className="container banner">
                        <h1>TALENTED <br></br>SOLUTIONS</h1>
                        <span>FINANCIAL PLANNING</span>
                        <p>Lorem Ipsum is simply dummy text of the <br></br>printing and typesetting industry.</p>
                        <button className='btnBanner'>GET STARTED NOW</button>
                        </div>
                </div>
                <div className="carousel-item">
                    <img src={slide4} className="d-block w-100" alt="..."/>
                        <div className="container banner">
                        <h1>TALENTED <br></br>SOLUTIONS</h1>
                        <span>FINANCIAL PLANNING</span>
                        <p>Lorem Ipsum is simply dummy text of the <br></br>printing and typesetting industry.</p>
                        <button className='btnBanner'>GET STARTED NOW</button>
                        </div>
                </div>
                <div className="carousel-item">
                    <img src={slide5} className="d-block w-100" alt="..."/>
                        <div className="container banner">
                        <h1>TALENTED <br></br>SOLUTIONS</h1>
                        <span>FINANCIAL PLANNING</span>
                        <p>Lorem Ipsum is simply dummy text of the <br></br>printing and typesetting industry.</p>
                        <button className='btnBanner'>GET STARTED NOW</button>
                        </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}
