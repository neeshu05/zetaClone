"use client"
import React from 'react'
import Nav from '../home/Nav'
import Footer from '../home/Footer'
import Aboutbanner from './Aboutbanner'
import Content from './Content'
import Featured from './Featured'
import Inverstor from './Inverstor'
import Cofounder from './Cofounder'
import Company_image from './Company_image'
import '../../styles/about/about.css'
import '../../styles/Footer.css'
function About() {
  return (
    <div className='container'>
        <Nav></Nav>
        <Aboutbanner></Aboutbanner>
        <Content></Content>
        <Featured></Featured>
        <Inverstor></Inverstor>
        <Cofounder></Cofounder>
        <Company_image></Company_image>
        <Footer></Footer>
    </div>
  )
}

export default About