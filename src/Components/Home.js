import React from 'react'

const Home = () => {
  return (
    <div>
      <section className='homeSection'>
        <div style={{ width: "50%", height: "500px" }}>
          <h1 style={{color : "#596AFF", fontSize : "56px"}}>Leading MEP & Facility management company in Dubai</h1><br />
          <h3>Urban Science is always ready to accept your challenges
            Meeting your goals is our main objective. Professional services for facility management & MEP works.

            Campany Profile
            Watch Video
          </h3>
        </div>
        <div style={{  width: "50%", height: "500px" }}>
          <div >
            <img src="https://www.urbansciencemep.com/_next/static/images/banner-thumb-ce9763d5a9793e4688afdc229399007a.png" alt="Logo" style={{ width: "691px" }} />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

