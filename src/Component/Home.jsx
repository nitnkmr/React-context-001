import React from 'react'
import Comp from './Comp'
import Toggle from './Toggle'

const Home = ({hello}) => {
  return (
    <div>
        <Toggle hello={hello}/>
    </div>
  )
}

export default Home