import React from 'react'

const Home = () => {
  return (
    <div className='home-container'>
      <LeftSideBar />
      <div className='home-container-2'>
        <HomeMainBar />
        <RightSideBar />
      </div>
    </div>
  )
}

export default Home
