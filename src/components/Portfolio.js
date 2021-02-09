import React from 'react'


const Portfolio = () => {
    return (
        <div className="portfolio">
            {/* Header Ends */}
  {/* Page Title Starts */}
  <section className="title-section text-left text-sm-center revealator-slideup revealator-once revealator-delay1">
    <h1>my <span>portfolio</span></h1>
    <span className="title-bg">works</span>
  </section>
  {/* Page Title Ends */}
  {/* Main Content Starts */}
  <section className="main-content text-center revealator-slideup revealator-once revealator-delay1">
    <div id="grid-gallery" className="container grid-gallery">
      {/* Portfolio Grid Starts */}
      <section className="grid-wrap">
        <ul className="row grid">
          {/* Portfolio Item Starts */}
          <li>
            <figure>
              <img src="img/projects/project-1.jpg" alt="Portolio Image" />
              <div><span>ecommerce Project</span></div>
            </figure>
          </li>
          {/* Portfolio Item Ends */}
          {/* Portfolio Item Starts */}
          <li>
            <figure>
              <img src="img/projects/project-2.jpg" alt="Portolio Image" />
              <div><span>Portfolio Project</span></div>
            </figure>
          </li>
          {/* Portfolio Item Ends */}
          {/* Portfolio Item Starts */}
          <li>
            <figure>
              <img src="img/projects/project-3.jpg" alt="Portolio Image" />
              <div><span>movie app</span></div>
            </figure>
          </li>
          {/* Portfolio Item Ends */}
        </ul>
      </section>
      {/* Portfolio Grid Ends */}
      {/* Portfolio Details Starts */}
      <section className="slideshow">
        <ul>
          {/* Portfolio Item Detail Starts */}
          <li>
            <figure>
              {/* Project Details Starts */}
              <figcaption>
                <h3>ecommerce Project</h3>
                <div className="row open-sans-font">
                  <div className="col-12 col-sm-6 mb-2">
                    <i className="fa fa-file-text-o pr-2" /><span className="project-label">Project </span>: <span className="ft-wt-600 uppercase">Website</span>
                  </div>
                 
                  <div className="col-12 col-sm-6 mb-2">
                    <i className="fa fa-code pr-2" /><span className="project-label">Langages </span>: <span className="ft-wt-600 uppercase">MERN APP</span>
                  </div>
                  <div className="col-12 col-sm-6 mb-2">
                    <i className="fa fa-external-link pr-2" /><span className="project-label">Preview </span>: <span className="ft-wt-600 uppercase"><a href="https://bodysportecommerce.herokuapp.com/" target="_blank">www.bodysport.com</a></span>
                  </div>
                </div>
              </figcaption>
              {/* Project Details Ends */}
              {/* Main Project Content Starts */}
              <img src="img/projects/project-1.jpg" alt="Portolio Image" />
              {/* Main Project Content Ends */}
            </figure>
          </li>
          {/* Portfolio Item Detail Ends */}
          {/* Portfolio Item Detail Starts */}
          <li>
            <figure>
              {/* Project Details Starts */}
              <figcaption>
                <h3>portfolio Project</h3>
                <div className="row open-sans-font">
                  <div className="col-6 mb-2">
                    <i className="fa fa-file-text-o pr-2" /><span className="project-label">Project </span>: <span className="ft-wt-600 uppercase">website</span>
                  </div>
                  
                  <div className="col-6 mb-2">
                    <i className="fa fa-code pr-2" /><span className="project-label">Langages </span>: <span className="ft-wt-600 uppercase">React , CSS</span>
                  </div>
                  <div className="col-6 mb-2">
                    <i className="fa fa-external-link pr-2" /><span className="project-label">Preview </span>: <span className="ft-wt-600 uppercase"><a href="#" target="_blank">www.videohive.net</a></span>
                  </div>
                </div>
              </figcaption>
              {/* Project Details Ends */}
              {/* Main Project Content Starts */}
              <img src="img/projects/project-2.jpg" alt="Portolio Image" />
              {/* Main Project Content Ends */}
            </figure>
          </li>
          {/* Portfolio Item Detail Ends */}
          {/* Portfolio Item Detail Starts */}
          <li>
            <figure>
              {/* Project Details Starts */}
              <figcaption>
                <h3>movie app</h3>
                <div className="row open-sans-font">
                  <div className="col-6 mb-2">
                    <i className="fa fa-file-text-o pr-2" /><span className="project-label">Project </span>: <span className="ft-wt-600 uppercase">Application</span>
                  </div>
                  
                  <div className="col-6 mb-2">
                    <i className="fa fa-code pr-2" /><span className="project-label">Langages </span>: <span className="ft-wt-600 uppercase">REACT, CSS</span>
                  </div>
                  <div className="col-6 mb-2">
                    <i className="fa fa-external-link pr-2" /><span className="project-label">Preview </span>: <span className="ft-wt-600 uppercase"><a href="https://github.com/OMAR-GODDI/movie-app" target="_blank">github.com/movie-app</a></span>
                  </div>
                </div>
              </figcaption>
              {/* Project Details Ends */}
               {/* Main Project Content Starts */}
               <img src="img/projects/project-3.jpg" alt="Portolio Image" />
              
           
              {/* Main Project Content Ends */}
            </figure>
          </li>
          {/* Portfolio Item Detail Ends */}      
        </ul>
        {/* Portfolio Navigation Starts */}
        <nav>
          <span className="icon nav-prev"><img src="img/projects/navigation/left-arrow.png" alt="previous" /></span>
          <span className="icon nav-next"><img src="img/projects/navigation/right-arrow.png" alt="next" /></span>
          <span className="nav-close"><img src="img/projects/navigation/close-button.png" alt="close" /> </span>
        
        </nav>
        
        {/* Portfolio Navigation Ends */}
      </section>
    </div>
  </section>
 
        </div>
    )
}

export default Portfolio
