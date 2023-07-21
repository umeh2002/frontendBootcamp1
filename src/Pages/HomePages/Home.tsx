import React from 'react'
import Hero from '../../Components/Static/Hero'
import Teacher from '../Teacher'
import Card from '../Card'
import English from '../English'
import Abc from '../Abc'
import Test from '../Test'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Teacher/>
      <Card />
      <English />
      <Abc />
      <Test />
    </div>
  )
}

export default Home