import React , {useState} from 'react'
   



function About() {
  const [isShow , setIsShow] = useState(false)

  const handleShow = () => {
      setIsShow(!isShow)
  }
    return (
    
      
        <div className="about">
        
  {/* Page Title Starts */}
  <section className="title-section text-left text-sm-center revealator-slideup revealator-once revealator-delay1">
    <h1>ABOUT <span>ME</span></h1>
    <span className="title-bg">Resume</span>
  </section>
  {/* Page Title Ends */}
  {/* Main Content Starts */}
  <section className="main-content revealator-slideup revealator-once revealator-delay1">
    <div className="container">
      <div className="row">
        {/* Personal Info Starts */}
        <div className="col-12 col-lg-5 col-xl-6">
          <div className="row">
            <div className="col-12">
              <h3 className="text-uppercase custom-title mb-0 ft-wt-600">personal infos</h3>
            </div>
            
            <div className="col-6">
              <ul className="about-list list-unstyled open-sans-font">
                <li> <span className="title">first name :</span> <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">Omar</span> </li>
                <li> <span className="title">last name :</span> <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">Goddi</span> </li>
                <li> <span className="title">Age :</span> <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">27 Years</span> </li>
                <li> <span className="title">Nationality :</span> <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">Tunisian</span> </li>
                
              </ul>
            </div>
            <div className="col-6">
              <ul className="about-list list-unstyled open-sans-font">
                <li> <span className="title">Address :</span> <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">Nabeul</span> </li>
                <li> <span className="title">phone :</span> <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">+21620944828</span> </li>
                <li> <span className="title">Email :</span> <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">eagle.designshop@gmail.com</span> </li>
                
                <li> <span className="title">langages :</span> <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">Arabic ,English ,French</span> </li>
              </ul>
            </div>
            <div className="col-12 mt-3">
              <a href="./img/OMAR GODDI.pdf" className="btn btn-download">Download CV</a>
            </div>
          </div>
        </div>
        {/* Personal Info Ends */}
        {/* Boxes Starts */}
<div className="col-12 col-lg-7 col-xl-6 mt-5 mt-lg-0">
  <div className="row">
    <div className="col-6">
      <div className="box-stats with-margin">
        <h3 className="poppins-font position-relative">6 month</h3>
        <p className="open-sans-font m-0 position-relative text-uppercase">years of <span className="d-block">experience</span></p>
      </div>
    </div>
    <div className="col-6">
      <div className="box-stats with-margin">
        <h3 className="poppins-font position-relative">3</h3>
        <p className="open-sans-font m-0 position-relative text-uppercase">completed <span className="d-block">projects</span></p>
      </div>
    </div>
   
   
  </div>
</div>
{/* Boxes Ends */}
<hr className="separator" />
{/* Skills Starts */}
<div className="row">
  <div className="col-12">
    <h3 className="text-uppercase pb-4 pb-sm-5 mb-3 mb-sm-0 text-left text-sm-center custom-title ft-wt-600">My Skills</h3>
  </div>
  <div className="col-6 col-md-3 mb-3 mb-sm-5">
    <div className="c100 p82">
      <span>82%</span>
      <div className="slice">
        <div className="bar" />
        <div className="fill" />
      </div>
    </div>
    <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">html</h6>
  </div>
  <div className="col-6 col-md-3 mb-3 mb-sm-5">
    <div className="c100 p85">
      <span>85%</span>
      <div className="slice">
        <div className="bar" />
        <div className="fill" />
      </div>
    </div>
    <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">javascript</h6>
  </div>
  <div className="col-6 col-md-3 mb-3 mb-sm-5">
    <div className="c100 p70">
      <span>60%</span>
      <div className="slice">
        <div className="bar" />
        <div className="fill" />
      </div>
    </div>
    <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">css</h6>
  </div>
  <div className="col-6 col-md-3 mb-3 mb-sm-5">
    <div className="c100 p60">
      <span>66%</span>
      <div className="slice">
        <div className="bar" />
        <div className="fill" />
      </div>
    </div>
    <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">react js</h6>
  </div>
 
  <div className="col-6 col-md-3 mb-3 mb-sm-5">
    <div className="c100 p80">
      <span>80%</span>
      <div className="slice">
        <div className="bar" />
        <div className="fill" />
      </div>
    </div>
    <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">Express</h6>
  </div>
  <div className="col-6 col-md-3 mb-3 mb-sm-5">
    <div className="c100 p80">
      <span>80%</span>
      <div className="slice">
        <div className="bar" />
        <div className="fill" />
      </div>
    </div>
    <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">mongoDB</h6>
  </div>
 
</div>
{/* Skills Ends */}
{/* Experience & Education Starts */}
<div className="row">
  <div className="col-12">
    <h3 className="text-uppercase pb-5 mb-0 text-left text-sm-center custom-title ft-wt-600">Experience <span>&amp;</span> Education</h3>
  </div>
  <div className="col-lg-6 m-15px-tb">
    <div className="resume-box">
      <ul>
        <li>
          <div className="icon">
            <i className="fa fa-graduation-cap" />
          </div>
          <span className="time open-sans-font text-uppercase">2020 - 2021</span>
          <h5 className="poppins-font text-uppercase">full stack Developer <span className="place open-sans-font">hight school diploma gomycode - tunisie</span></h5>
          <p className="open-sans-font">majored in full-stack , professional developemnet completed in skill based training ,continuing education in full-stack. </p>
        </li>
        
        
      </ul>
    </div>
  </div>
  <div className="col-lg-6 m-15px-tb">
    <div className="resume-box">
      <ul>
        <li>
          <div className="icon">
            <i className="fa fa-graduation-cap" />
          </div>
          <span className="time open-sans-font text-uppercase">2009 - 2014</span>
          <h5 className="poppins-font text-uppercase">Bachelor Degree <span className="place open-sans-font">high school Nabeul-Tunisie</span></h5>
          <p className="open-sans-font">experimental science baccalaureate</p>
        </li>
       
       
      </ul>
    </div>
  </div>
</div>
{/* Experience & Education Ends */}



      </div>
      </div>
      </section>
      </div>

       
    )
}

export default About

