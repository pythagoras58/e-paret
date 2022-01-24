import React from 'react';

export const PageCarousel = () => {
  return (<div className="page-carousel">
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="/images/1.jpg" className="d-block w-100" alt="..." id="page-image"/>
        <div className="carousel-caption d-none d-md-block">
          <h5>System Administration</h5>
          <p>System administrative work at its best</p>
        </div>
      </div>
      <div className="carousel-item">
        <img src="/images/6.jpg" className="d-block w-100" alt="..." id="page-image"/>
        <div className="carousel-caption d-none d-md-block">
          <h5>Softare Solutions</h5>
          <p>Software solutions from development to maintenance.</p>
        </div>
      </div>
      <div className="carousel-item">
        <img src="/images/5.jpg" className="d-block w-100" alt="..." id="page-image"/>
        <div className="carousel-caption d-none d-md-block">
          <h5>Hardware Solutions</h5>
          <p>Laptop and other computing product repair</p>
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
        </div>);
};
