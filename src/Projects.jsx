import React from 'react'

function Projects() {
  return (
    <div className='projects-container'>
      <h2 >Projects</h2>
      <div className="projects-list">

        <div className="ecommerce">
          <img src="/Images/e-commerce.png" alt="E-Commerce-Pic" />
          <h3>E-Commerce Website</h3>
          <p>Developed by using <br /> React.</p>
          <button><a href="https://ecommerce-siva.netlify.app/" target='blank'>Get Link</a></button>
        </div>

        <div className="calculator">
          <img src="/Images/rythu_mitra.png" alt="Rythu_Mitra-Pic" />
          <h3 style={{marginLeft: "20px"}}>Rythu Mitra AI</h3>
          <p style={{marginLeft: "90px"}}>It is Full Stack Project. <br /> Developed by Frontend(React), Backend(Django) and Database(MYsql). </p>
          <button style={{marginLeft: "80px"}}><a href="" target='blank'>Get Link</a></button>
        </div>

        <div className="food">
          <img src="/Images/online_food_ordering.png" alt="Online-Order" />
          <h3>Online Food Ordering</h3>
          <p style={{marginLeft: "40px"}}>Developed by using <br /> React.</p>
          <button><a href="https://github.com/AppariSivamani/online-ordering" target='blank'>Get Link</a></button>
        </div>


      </div>
    </div>
  )
}

export default Projects