import React from 'react'
import Nav from './Nav'
import Banner from './Banner'
import Slider from './Slider'
import Grid from './Grid'
import Testimonial from './Testimonial'
import Whyus from './Whyus'
import Footer from './Footer'
import '../../styles/main.css'

function Main() {
  return (
    <div className='container'>
        <Nav></Nav>
        <Banner></Banner>
        <Slider></Slider>
        <Grid></Grid>
        <Testimonial></Testimonial>
        <Whyus></Whyus>
        <Footer></Footer> 
    </div>
  )
}

export default Main