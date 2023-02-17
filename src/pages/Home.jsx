import React from 'react'
import Clients from "../features/clients/Clients";
import Projects from '../features/projects/Projects';

const Home = () => {
  return (
    <>
        <Projects />
        <Clients />
    </>
  )
}

export default Home