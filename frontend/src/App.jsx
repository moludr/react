import React from 'react';
import Header from './components/header/header'
import Nav from './components/nav/nav'
import About from './components/about/about'
import Experience from './components/experience/experience';
import Services from './components/services/services';
import Portfolio from './components/portfolio/portfolio';
import Testimonial from './components/testimonial/testimonial';
import Contacts from './components/contacts/contacts';
import Footer from './components/footer/footer';


const App = ()=>{
    return(
       <>
       <Header />
       <Nav />
       <About />
       <Experience />
       <Services />
       <Portfolio />
       <Testimonial />
       <Contacts />
       < Footer />
       </>
    )
}

export default App;