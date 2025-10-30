import React from 'react'
import Hero from './page/Hero'
import About from './page/About'
import Skill from './page/Skill'
import Project from './page/Project'
import Contact from './page/Contact'

function App() {
  return (
    <>
      <section id='home'>
        <Hero/>
      </section>
      <section id='about'>
        <About/>
      </section>
      <section id='skill'>
        <Skill/>
      </section>
      <section id='Work'>
        <Project/>
      </section>
      <section id='Contact'>
        <Contact/>
      </section>
    </>
  )
}

export default App
