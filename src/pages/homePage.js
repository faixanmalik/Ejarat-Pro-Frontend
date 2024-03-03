import { React, useEffect, useState } from 'react';
import Head from 'next/head';
import Script from 'next/script';
import AOS from "aos";
import Link from 'next/link';

const HomePage = () => {

  useEffect(() => {
    AOS.init({
    });
  }, []);

  const pages = [
    { name: 'Features', href: '/features' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'Log In', href: '/login', status: true },
    { name: 'Join Us', href: '/joinUs', status: true },
    { name: 'Arabic', href: '/arabic' },
  ]

  return (
    <>
    <Head>
      <meta charSet="UTF-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <title>Ejarat Pro</title>
      <meta name="description" content="Free bootstrap template Atlas" />
      <link rel="icon" href="img/favicon.png" sizes="32x32" type="image/png" />
      <link rel="stylesheet" href="css/custom.css" />
      <link rel="stylesheet" href="css/bootstrap.min.css" />
      <link rel="stylesheet" href="font-awesome-4.7.0/css/font-awesome.min.css" />
      <link rel="stylesheet" href="css/aos.css" />
    </Head>


    <div>

      <div
        className="jumbotron jumbotron-fluid px-16"
        id="banner"
        style={{ backgroundImage: "url(img/banner-bk.jpg)" }}
      >
        <div className="container text-center text-md-left">
          <header>

            <div className='flex space-x-3 justify-center w-full items-center px-7 py-3'>

              <img src="img/logo.png" alt="logo"/>

              {pages.map((item, index)=>{
                return <Link
                  key={index} 
                  href={item.href}
                  className={`rounded-2xl hover:bg-[#00ffad] text-white hover:text-black ${item.status === true ? 'atlas-cta': ''} hover:no-underline font-semibold tracking-wide px-4 py-2 border border-gray-600`}
              >
                {item.name}
              </Link>
              })}

            </div>
          </header>
          <h1
            data-aos="fade"
            data-aos-easing="linear"
            data-aos-duration={1000}
            data-aos-once="true"
            className="display-3 text-white font-weight-bold mt-5"
          >
            <span className='text-7xl'>Welcome to EjaratPro</span>
            <br />
            <span className='text-3xl'>Professional way to manage your Property</span>
          </h1>
          <p
            data-aos="fade"
            data-aos-easing="linear"
            data-aos-duration={1000}
            data-aos-once="true"
            className="lead text-white my-2 tracking-tight text-lg"
          >
            Whether you are a real estate owner or an office to manage the real estate of others, you can easily start working on the system and ensure that your real estate is managed in an optimal way
          </p>
          <a
            href="#"
            data-aos="fade"
            data-aos-easing="linear"
            data-aos-duration={1000}
            data-aos-once="true"
            className="btn my-4 font-weight-bold atlas-cta cta-green"
          >
            Get Started
          </a>
        </div>
      </div>


      <div className="container bg-white text-black py-16">
        <h2 className="text-center font-weight-bold my-5">
        Main Features
        </h2>
        <div className="row px-14">
          <div
            data-aos="fade-up"
            data-aos-delay={0}
            data-aos-duration={1000}
            data-aos-once="true"
            className="col-md-4 text-center"
          >
            <img
              src="img/smart-protect-1.jpg"
              alt="Anti-spam"
              className="mx-auto"
            />
            <h4 className='font-semibold text-2xl mb-1'>Accessibility</h4>
            <p className='w-72 mx-auto tracking-tight text-base'>Your data, records and daily operations will be stored on Cloud where you can access it whenever you want and wherever you are.</p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay={200}
            data-aos-duration={1000}
            data-aos-once="true"
            className="col-md-4 text-center"
          >
            <img
              src="img/smart-protect-2.jpg"
              alt="Phishing Detect"
              className="mx-auto"
            />
            <h4 className='font-semibold text-2xl mb-1'>Cost Saving</h4>
            <p className='w-72 mx-auto tracking-tight text-base'>Save time -money and effort , pay as you grow on monthly basis</p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay={400}
            data-aos-duration={1000}
            data-aos-once="true"
            className="col-md-4 text-center"
          >
            <img
              src="img/smart-protect-3.jpg"
              alt="Smart Scan"
              className="mx-auto"
            />
            <h4 className='font-semibold text-2xl mb-1'>VAT Compiance</h4>
            <p className='w-72 mx-auto tracking-tight text-base'>Issue Vat compatiple invoice , collect VAT in advance or distribute it on payment as per your client requiremnt or your internal policy.</p>
          </div>
        </div>
      </div>


      <div className="jumbotron text-black px-16 jumbotron-fluid feature" id="feature-first">
        <div className="container my-5">
          <div className="row justify-content-between text-center text-md-left">
            <div
              data-aos="fade-right"
              data-aos-duration={1000}
              data-aos-once="true"
              className="col-md-6"
            >
              <h2 className="font-weight-bold">Easy-to-Use</h2>
              <p className="my-4 text-base tracking-tight">
              Ejarat Pro is simple, easy-to-learn and easy to use. It provides a streamlined way to manage your properties, enabling you and your staff a quite easy search and navigation.
              </p>
              <a href="#" className="btn font-weight-bold atlas-cta cta-blue">
                Learn More
              </a>
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration={1000}
              data-aos-once="true"
              className="col-md-6 align-self-center"
            >
              <img
                src="img/feature-1.png"
                alt="Take a look inside"
                className="mx-auto d-block"
              />
            </div>
          </div>
        </div>
      </div>


      <div className="jumbotron text-black jumbotron-fluid feature" id="feature-last">
        <div className="container">
          <div className="row justify-content-between text-center text-md-left">
            <div
              data-aos="fade-left"
              data-aos-duration={1000}
              data-aos-once="true"
              className="col-md-6 flex-md-last"
            >
              <h2 className="font-weight-bold mt-4">Safe and reliable</h2>
              <p className="mt-3 text-base tracking-tight">
              Your information and data to which you solely have access are fully encrypted
              </p>
              <a href="#" className="btn mt-3 font-weight-bold atlas-cta cta-blue">
                Learn More
              </a>
            </div>
            <div
              data-aos="fade-right"
              data-aos-duration={1000}
              data-aos-once="true"
              className="col-md-6 align-self-center flex-md-first"
            >
              <img
                src="img/feature-2.png"
                alt="Safe and reliable"
                className="mx-auto d-block"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container px-14 bg-white text-black py-9" id="price-table">
        <h2 className="text-center font-weight-bold d-block mb-3 mt-5">
          Check our pricing
        </h2>
        <div className="row font-semibold">
          <div
            data-aos="fade-right"
            data-aos-delay={200}
            data-aos-duration={1000}
            data-aos-once="true"
            className="col-md-4 text-center py-4 mt-5"
          >
            <h4 className="my-4 text-2xl">STARTUP</h4>
            <p className="font-weight-bold">
              $ <span className="display-2 font-weight-bold">0</span> / MO.
            </p>
            <ul className="list-unstyled flex-col space-y-1 mt-3">
              <li>Up to 5 Documents</li>
              <li>Up to 3 Reviews</li>
              <li>5 team Members</li>
              <li>Limited Support</li>
            </ul>
            <a href="#" className="btn my-4 font-weight-bold atlas-cta cta-ghost">
              Get Free
            </a>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration={1000}
            data-aos-once="true"
            className="col-md-4 h-[30rem] text-center py-4 mt-5 rounded"
            id="price-table__premium"
          >
            <h4 className="my-4 text-2xl">PREMIUM</h4>
            <p className="font-weight-bold">
              $ <span className="display-2 font-weight-bold">10</span> / MO.
            </p>
            <ul className="list-unstyled flex-col space-y-1 mt-3">
              <li>Up to 15 Documents</li>
              <li>Up to 10 Reviews</li>
              <li>25 team Members</li>
              <li>Limited Support</li>
            </ul>
            <a href="#" className="btn my-4 font-weight-bold atlas-cta cta-green">
              Get Free
            </a>
          </div>
          <div
            data-aos="fade-left"
            data-aos-delay={200}
            data-aos-duration={1000}
            data-aos-once="true"
            className="col-md-4 text-center py-4 mt-5"
          >
            <h4 className="my-4 text-2xl">PROFESSIONAL</h4>
            <p className="font-weight-bold">
              $ <span className="display-2 font-weight-bold">30</span> / MO.
            </p>
            <ul className="list-unstyled flex-col space-y-1 mt-3">
              <li>Unlimited Documents</li>
              <li>Unlimited Reviews</li>
              <li>Unlimited Members</li>
              <li>Unlimited Support</li>
            </ul>
            <a href="#" className="btn my-4 font-weight-bold atlas-cta cta-ghost">
              Get Free
            </a>
          </div>
        </div>
      </div>

      <div className="jumbotron px-10 jumbotron-fluid">
        <div className="container">
          <div className="row">
            <div className="col-sm-4 col-md-2 py-2 align-self-center">
              <img src="img/client-1.png" className="mx-auto d-block" />
            </div>
            <div className="col-sm-4 col-md-2 py-2 align-self-center">
              <img src="img/client-2.png" className="mx-auto d-block" />
            </div>
            <div className="col-sm-4 col-md-2 py-2 align-self-center">
              <img src="img/client-3.png" className="mx-auto d-block" />
            </div>
            <div className="col-sm-4 col-md-2 py-2 align-self-center">
              <img src="img/client-4.png" className="mx-auto d-block" />
            </div>
            <div className="col-sm-4 col-md-2 py-2 align-self-center">
              <img src="img/client-5.png" className="mx-auto d-block" />
            </div>
            <div className="col-sm-4 col-md-2 py-2 align-self-center">
              <img src="img/client-6.png" className="mx-auto d-block" />
            </div>
          </div>
        </div>
      </div>

      <div
        className="jumbotron px-16 jumbotron-fluid"
        id="contact"
        style={{ backgroundImage: "url(img/contact-bk.jpg)" }}
      >
        <div className="container my-5">
          <div className="row justify-content-between">
            <div className="col-md-6 text-white">
              <h2 className="font-weight-bold">Contact Us</h2>
              <p className="my-3 tracking-tight">
                We are ere to help to manage your property and organize your work , 
                <br /> contact us and we are ready to help you.
              </p>
              <ul className="list-unstyled">
                <li>Email : Ejaratpro@gmail.com</li>
                <li>Phone : 0553114030</li>
                <li>Address : Ajman</li>
              </ul>
            </div>
            <div className="col-md-6">
              <form>
                <div className="row">
                  <div className="form-group col-md-6">
                    <label htmlFor="name">Your Name</label>
                    <input type="name" className="form-control" id="name" />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="Email">Your Email</label>
                    <input type="email" className="form-control" id="Email" />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows={3}
                    defaultValue={""}
                  />
                </div>
                <button
                  type="submit"
                  className="btn bg-[#00ffad] font-semibold atlas-cta atlas-cta-wide cta-green my-3"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="jumbotron jumbotron-fluid" id="copyright">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-md-6 text-white align-self-center text-center text-md-left my-2">
              Copyright © 2018 Chen, Yi-Ya.
            </div>
            <div
              className="col-md-6 align-self-center text-center text-md-right my-2"
              id="social-media"
            >
              <a href="#" className="d-inline-block text-center ml-2">
                <i className="fa fa-facebook" aria-hidden="true" />
              </a>
              <a href="#" className="d-inline-block text-center ml-2">
                <i className="fa fa-twitter" aria-hidden="true" />
              </a>
              <a href="#" className="d-inline-block text-center ml-2">
                <i className="fa fa-medium" aria-hidden="true" />
              </a>
              <a href="#" className="d-inline-block text-center ml-2">
                <i className="fa fa-linkedin" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Script src="js/aos.js"></Script>
  
    </>

  )
}

export default HomePage