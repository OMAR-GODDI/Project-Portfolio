import React from 'react'
import emailjs from 'emailjs-com'

function Contact() {

    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('service_s9ids3f', 'template_3ksm1gx', e.target, 'user_LWU1IPlCI1250HBnLu3cR')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }
    return (
        <div className="contact">
          <section className="title-section text-left text-sm-center revealator-slideup revealator-once revealator-delay1">
    <h1>get in <span>touch</span></h1>
    <span className="title-bg">contact</span>
  </section>
  {/* Page Title Ends */}
  {/* Main Content Starts */}
  <section className="main-content revealator-slideup revealator-once revealator-delay1">
    <div className="container">
      <div className="row">
        {/* Left Side Starts */}
        <div className="col-12 col-lg-4">
          <h3 className="text-uppercase custom-title mb-0 ft-wt-600 pb-3">Don't be shy !</h3>
          <p className="open-sans-font mb-3">Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
          <p className="open-sans-font custom-span-contact position-relative">
            <i className="fas fa-envelope-open position-absolute" />
            <span className="d-block">mail me</span>eagle.designshop@gmail.com</p>
          <p className="open-sans-font custom-span-contact position-relative">
            <i className="fas fa-phone-square position-absolute" />
            <span className="d-block">call me</span>+216 20 944 828
          </p>
          <ul className="social list-unstyled pt-1 mb-5">
            <li className="facebook"><a title="Facebook" href="https://www.facebook.com/omar.goddi/"><i className="fab fa-facebook-f" /></a>
            </li>
            <li className="githup"><a title="githup" href="https://github.com/OMAR-GODDI"><i className="fab fa-github"/></a>
            </li>
            
           
          </ul>
        </div>
        {/* Left Side Ends */}
        {/* Contact Form Starts */}
        <div className="col-12 col-lg-8">
          <form  onSubmit={sendEmail}>
            <div className="contactform">
              <div className="row">
                <div className="col-12 col-md-4">
                  <input type="text" name="name" placeholder="YOUR NAME" />
                </div>
                <div className="col-12 col-md-4">
                  <input type="email" name="email" placeholder="YOUR EMAIL" />
                </div>
                <div className="col-12 col-md-4">
                  <input type="text" name="subject" placeholder="YOUR SUBJECT" />
                </div>
                <div className="col-12">
                  <textarea name="message" placeholder="YOUR MESSAGE" defaultValue={""} />
                  <button type="submit" className="btn btn-contact">Send Message</button>
                </div>
                <div className="col-12 form-message">
                  <span className="output_message text-center font-weight-600 text-uppercase" />
                </div>
              </div>
            </div>
          </form>
        </div>
        {/* Contact Form Ends */}
      </div>
    </div>
  </section>  
        </div>
    )
}

export default Contact


