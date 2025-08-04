"use client"
import type { NextPage } from "next";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import ServiceList from "../components/ServiceList";
import TestimonialList from "../components/TestimonialList";
import ProductList from "../components/ProductList";
import Contact from "../components/Contact";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

// import ResumeList from "../components/template_2/ResumeList";



const Page: NextPage = () => {


  return (
    <>
    <Header />
    <Hero />
    <About />
    {/* <ResumeList /> */}
    <ServiceList />
    <TestimonialList />
    <ProductList />
    <Contact />
    <ContactForm />

    <Footer />
    
    </>
  )
}

export default Page