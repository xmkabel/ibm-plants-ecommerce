
import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';

const Index = () => {
  return (
    <>
      <NavBar />
      <div className="hero-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 text-center text-white">
              <h1 className="display-2 fw-bold mb-4">Paradise Plant Palace</h1>
              <p className="lead mb-4">
                Bring nature indoors with our carefully curated collection of beautiful house plants.
                Each plant is grown with love and delivered to your doorstep in perfect condition.
              </p>
              <Link to="/products" className="btn btn-lg btn-light px-5 py-3">
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container my-5">
        <div className="row">
          <div className="col-md-6 mb-4 mb-md-0">
            <h2 className="h3 mb-4">Our Story</h2>
            <p>
              Paradise Plant Palace started with a simple passion for plants. Our founder, a lifelong plant enthusiast, 
              wanted to share the joy and benefits of living with plants with as many people as possible.
            </p>
            <p>
              Today, we carefully source the healthiest plants from sustainable growers and deliver them to plant lovers 
              nationwide. Each plant comes with care instructions to help you create the perfect environment for your 
              green friend to thrive.
            </p>
          </div>
          <div className="col-md-6">
            <h2 className="h3 mb-4">Why Choose Us</h2>
            <ul className="list-unstyled">
              <li className="mb-3">
                <div className="d-flex">
                  <div className="bg-success rounded-circle p-2 me-3" style={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span className="text-white">1</span>
                  </div>
                  <div>
                    <h5>Premium Quality Plants</h5>
                    <p className="text-muted">We source only the healthiest, most vibrant plants.</p>
                  </div>
                </div>
              </li>
              <li className="mb-3">
                <div className="d-flex">
                  <div className="bg-success rounded-circle p-2 me-3" style={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span className="text-white">2</span>
                  </div>
                  <div>
                    <h5>Expert Care Guidance</h5>
                    <p className="text-muted">Every plant comes with detailed care instructions.</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="d-flex">
                  <div className="bg-success rounded-circle p-2 me-3" style={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span className="text-white">3</span>
                  </div>
                  <div>
                    <h5>30-Day Guarantee</h5>
                    <p className="text-muted">If your plant doesn't thrive, we'll replace it for free.</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
