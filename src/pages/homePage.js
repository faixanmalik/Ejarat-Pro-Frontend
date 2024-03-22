import { React, Fragment, useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import Script from 'next/script';
import AOS from "aos";
import Link from 'next/link';
import { Dialog, Transition } from '@headlessui/react'
import { IoCloseSharp } from "react-icons/io5";

// import { toast, ToastContainer } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';

const HomePage = () => {

  useEffect(() => {
    AOS.init({
    });
  }, []);

  const pages = [
    { id: 'feature-section', name: 'Features', href: '/features' },
    { id: 'pricing-section', name: 'Pricing', href: '/pricing' },
    { id: 'contact-section', name: 'Contact Us', href: '/contact' },
    { id: 'login-section', name: 'Log In', href: '/login', status: true },
    { id: 'join-section', name: 'Join Us', href: '/joinUs', status: true },
    { id: 'arabic-section', name: 'Arabic', href: '/arabic' },
  ]

  const scrolltoHash = function (element_id) {
    const element = document.getElementById(element_id)
    element?.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
  }

  const [packages, setPackages] = useState([]);
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [businessName, setBusinessName] = useState('')
  const [mobile, setMobile] = useState('')
  const [message, setMessage] = useState('')


  // mobile error response in api
  const submit = async(e)=>{
    e.preventDefault();

    const data = { guestName:name, contactNumber:mobile, message }

    let res = await fetch("http://164.90.138.198/api/website/guestMsg", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    let response = await res.json()
    console.log(response)
    if(response){

    }
    else{
      // toast.error(response.message , { position: "bottom-center", autoClose: 1000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, theme: "light", });
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://164.90.138.198/api/website/packages');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPackages(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  

  const [openDemoModal, setOpenDemoModal] = useState(false)
  const cancelButtonRef = useRef(null)


  const requestDemo = async(e)=>{
    e.preventDefault();

    const data = { guestName:name, guestEmail:email, contactNumber:mobile, message }

    let res = await fetch("http://164.90.138.198/api/website/requestDemo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    let response = await res.json()
    console.log(response)
    

  }
  

  const [accordationIndex, setAccordationIndex] = useState(0)
  let accordation = [
    {heading: 'Whats ejaratpro', paragraph:'Ejaratpro is a software as aservice help propert manager to organize there work , track rent contract and folow payment collection in an easy way'},
    {heading: 'what is the main features', paragraph:'Ejart pro is an easy way to manage property renting , add cleint , generate and save contract , renew and terminate contract , as well give you super power over cheques management'},
    {heading: 'How to subscribe', paragraph:'Simply you can subscribe through our website by adding your information and pay the monthly subscription'},
    {heading: 'How pricing is calculated', paragraph:'Ejaratpro calculate monthly bill depend in the number of unit the cleint managed , this provide reasonable pricing scheme and distribute resource consumption fairly'},
    {heading: 'Is it easy to convert to ejaratpro', paragraph:'If you are new you can simply add your business information and start , the softwaare is prepackaged with main data , if you are running business you need to prepare your data and simply import it to ejaratpro'}
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

    {/* React tostify */}
    {/* <ToastContainer position="bottom-center" autoClose={1000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light"/> */}

    <div className='bg-white'>
      <div
        className="jumbotron jumbotron-fluid px-16"
        id="banner"
        style={{ backgroundImage: "url(img/banner-bk.jpg)" }}
      >
        <div className="container text-center text-md-left">
          <header>
            <div className='flex space-x-3 justify-center w-full items-center px-7 py-3'>
              {/* <img className='mr-3' src="img/logo2.png" alt="logo"/> */}
              {pages.map((item, index)=>{
                return <div
                  key={index}
                  onClick={() => scrolltoHash(item.id)}
                  className={`rounded-2xl hover:bg-[#00ffad] text-white hover:text-black ${item.status === true ? 'atlas-cta': ''} hover:no-underline font-semibold tracking-wide px-4 py-2 border border-gray-600`}
                >
                  {item.name}
                </div>
              })}
            </div>
          </header>

          <div>
            <h1 
              data-aos="fade"
              data-aos-easing="linear"
              data-aos-duration={1000}
              data-aos-once="true"
              className="display-3 text-white font-bold mt-5"
            >
              Welcome to Ejarat<span className='text-[#00ffad]'>Pro</span>
            </h1>

            <h3
              data-aos="fade"
              data-aos-easing="linear"
              data-aos-duration={1000}
              data-aos-once="true"
              className="text-xl md:text-3xl leading-none text-white font-bold mt-[2rem] md:mt-[1rem]"
            >
              Professional way to manage your Property
            </h3>
            
          </div>

          <p
            data-aos="fade"
            data-aos-easing="linear"
            data-aos-duration={1000}
            data-aos-once="true"
            className="lead text-white w-full md:w-10/12 my-4 tracking-tight text-lg"
          >
            Whether you are a real estate owner or an office to manage the real estate of others, you can easily start working on the system and ensure that your real estate is managed in an optimal way
          </p>
          <button
            onClick={() => setOpenDemoModal(true)}
            data-aos="fade"
            data-aos-easing="linear"
            data-aos-duration={1000}
            data-aos-once="true"
            className="btn my-4 font-weight-bold atlas-cta cta-green"
          >
            Request Demo
          </button>
        </div>
      </div>

      <div id='feature-section' className="container bg-white text-black py-16">
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


      <div className='px-0 md:px-10 lg:px-14 my-9 bg-white text-black'>

        <h2 className="text-center font-weight-bold d-block mb-3 mt-5">
          FAQS
        </h2>
        {accordation.map((item, index)=>{
          return <div key={index} onClick={()=> setAccordationIndex(index)} className="relative mb-3 text-black">
          <h6 className="mb-0">
            <button
              className="relative flex justify-between items-center w-full p-4 font-semibold text-left transition-all ease-in border-b border-solid cursor-pointer border-slate-100 text-slate-700 rounded-t-1 group"
              data-collapse-target="collapse-1"
            >
              <span>{item.heading}</span>
              {accordationIndex != index 
                ? <i className="pt-1 text-xs fa fa-plus"></i>
                : <i className="pt-1 text-xs fa fa-minus"></i>
              }
            </button>
          </h6>
          {accordationIndex === index && <div
            data-collapse="collapse-1"
            className="overflow-hidden transition-all duration-300 ease-in-out"
          >
            <div className="p-4 text-sm leading-normal text-blue-gray-500/80">
              {item.paragraph}
            </div>
          </div>}
        </div>})}
      </div>

      


      <div id='pricing-section' className="container px-14 bg-white text-black my-9">
        <h2 className="text-center font-weight-bold d-block mb-3 mt-5">
          Check our pricing
        </h2>
        <div className="flex flex-col lg:flex-row justify-center mx-auto font-semibold">
          {packages.map((item, index)=>{
            return <div
              key={index}
              data-aos="fade-right"
              data-aos-delay={200}
              data-aos-duration={1000}
              data-aos-once="true"
              className={`text-left ${item.nameEn === 'Gold' && 'bg-[#192440] text-white'} py-4 rounded-xl w-full flex-col justify-center mt-5`}
            >
              <h4 className="my-4 text-center text-2xl">{item.nameEn}</h4>
              <p className="font-weight-bold text-center">
                $ <span className="text-6xl w-full font-weight-bold">{item.cost}</span> / MO.
              </p>

              <ul className='mt-3 w-8/12 mx-auto'>
                {item.descriptionEn.map((descItem, index)=>{
                  return <li key={index} className='text-center tracking-tight'>{descItem}</li>
                })}
              </ul>
              
              <button className={`mx-auto ${item.nameEn === 'Gold' && ' bg-[#00ffad]  hover:bg-[#00ffad] hover:text-white'} mt-4 flex justify-between border-2 font-weight-bold atlas-cta cta-ghost border-black rounded-3xl px-5 py-2`}>
                Get Free
              </button>
            </div>
          })}
        </div>
      </div>

      <div
        className="jumbotron px-16 jumbotron-fluid"
        id='contact-section'
        style={{ backgroundImage: "url(img/contact-bk.jpg)" }}
      >
        <div className="container my-5">
          
          <div className='block md:hidden pb-5'>
            <h2 className="font-weight-bold text-center">Contact Us</h2>
            <p className="my-3 tracking-tight text-center">
              We are ere to help to manage your property and organize your work , 
              <br /> contact us and we are ready to help you.
            </p>
          </div>

          <div className="flex flex-col-reverse md:flex-row w-full">
            <div className="col-md-6 mt-3 text-white">

              <div className='hidden md:block'>
                <h2 className="font-weight-bold">Contact Us</h2>
                <p className="my-3 tracking-tight">
                  We are ere to help to manage your property and organize your work , 
                  <br /> contact us and we are ready to help you.
                </p>
              </div>
              <ul className="list-unstyled text-center block md:hidden">
                <li>Email : Ejaratpro@gmail.com</li>
                <li>Phone : +971-0553114030</li>
                <li>Address : Ajman</li>
              </ul>
              <ul className="list-unstyled hidden md:block">
                <li>Email : Ejaratpro@gmail.com</li>
                <li>Phone : +971-0553114030</li>
                <li>Address : Ajman</li>
              </ul>
            </div>
            <div className="col-md-6">
              <form method='POST' onSubmit={(e)=>submit(e)}>
                <div className="row">
                  <div className="form-group col-md-6">
                    <label htmlFor="name">Full Name</label>
                    <input value={name} onChange={(e)=>{setName(e.target.value)}} name='name' type="name" className="form-control" id="name" />
                  </div>

                  <div className="form-group col-md-6">
                    <label htmlFor="Mobile">Mobile Number</label>
                    <input value={mobile} onChange={(e)=>{setMobile(e.target.value)}} name='mobile' type="number" className="form-control" id="Email" />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    className="form-control"
                    id="message"
                    name='message'
                    rows={3}
                    value={message} 
                    onChange={(e)=>{setMessage(e.target.value)}} 
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

      <div className="jumbotron jumbotron-fluid py-2" id="copyright">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-md-6 text-white align-self-center text-center text-md-left my-2">
              Copyright © 2024 Ejarat Pro.
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

    <Transition.Root show={openDemoModal} as={Fragment}>
      <Dialog as="div" className="relative z-20" initialFocus={cancelButtonRef} onClose={setOpenDemoModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="flex-col h-[31rem] md:h-auto relative transform rounded-lg bg-white text-left shadow-xl transition-all sm:w-full sm:max-w-2xl">

                <div className="bg-white text-black px-4 py-4 sm:pb-4">
                  
                  <div className='flex space-x-3 w-full'>
                    <div className="form-group w-full">
                      <label htmlFor="name" className=''>Full Name</label>
                      <input placeholder='John Doe' value={name} onChange={(e)=>{setName(e.target.value)}} name='name' type="name" className="placeholder:text-sm form-control rounded-md" id="name" />
                    </div>
                    <div className="form-group w-full">
                      <label htmlFor="name">Business Name</label>
                      <input placeholder='xyz Pvt.Ltd' value={businessName} onChange={(e)=>{setBusinessName(e.target.value)}} name='name' type="name" className="placeholder:text-sm form-control rounded-md" id="name" />
                    </div>
                  </div>
                  <div className='flex space-x-3 w-full'>
                    <div className="form-group w-full">
                      <label htmlFor="email" className=''>Email</label>
                      <input placeholder='abc@example.com' value={email} onChange={(e)=>{setEmail(e.target.value)}} name='email' type="email" className="placeholder:text-sm form-control rounded-md" id="email" />
                    </div>
                    <div className="form-group w-full">
                      <label htmlFor="name">Mobile</label>
                      <input placeholder='+971-xxxxxxxxx' value={mobile} onChange={(e)=>{setMobile(e.target.value)}} name='mobile' type="number" className="placeholder:text-sm form-control rounded-md" id="mobile" />
                    </div>
                  </div>
                 
                </div>
                
                
                <div className="bg-gray-100 w-full">
                  <div className="flex justify-end space-x-3 px-4 py-3 sm:px-6">
                    <button
                      onClick={() => setOpenDemoModal(false)}
                      data-aos="fade"
                      data-aos-easing="linear"
                      data-aos-duration={1000}
                      data-aos-once="true"
                      className="px-3 py-1 font-bold hover:bg-black hover:text-white rounded-xl text-black border border-gray-800"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={(e) => requestDemo(e)}
                      data-aos="fade"
                      data-aos-easing="linear"
                      data-aos-duration={1000}
                      data-aos-once="true"
                      className="px-4 py-1 font-bold rounded-xl cta-green"
                    >
                      Submit
                    </button>
                  </div>
                </div>
                
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>

    <Script src="js/aos.js"></Script>
  
    </>

  )
}

export default HomePage