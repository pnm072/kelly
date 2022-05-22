import './contact.css'
import React from 'react'

 function contact() {
  return (
    <>
       <div>
        <section id="contact" className="contact">
          <div className="container">
            <div className="section-title">
              <h2 className="d-flex flex-column align-items-center pt-5 "><div className="contact-head">CONTACT</div></h2>
              <p className="dol-item pt-4">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
            </div>
            <div>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.014506077209!2d85.34289621438407!3d27.68594653304036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb190fc042d399%3A0x6064967133397f28!2sCreatu%20Developers!5e0!3m2!1sen!2snp!4v1647423111213!5m2!1sen!2snp" width={1060} height={400} style={{border: 0}} allowFullScreen loading="lazy" />
            </div>
          </div>
        </section>
        <div className="container">
          <div className="row contact-content mt-5">
            <div className="col-lg-1">
              <div className="circle">
                <p className="icon-main"><i className="fa-solid fa-location-dot" /></p>
                <br />
                <p className="icon-main1"><i className="fa-solid fa-envelope" /></p>
                <br />
                <p className="icon-main2"><i className="fa-solid fa-mobile-screen-button" /></p>
              </div>
            </div>
            <div className="col-lg-4 ">
              <h5>Location:</h5>
              <p>A108 Adam Street, New York, NY 535022</p>
              <h5>Email:</h5>
              <p>info@example.com</p>
              <h5>Call:</h5>
              <p>+1 5589 55488 55s</p>
            </div>
            <div className="col-lg-7">
              <form className="input-main">
                <input type="text" id="Your Name" name="Your Name" placeholder="Your Name" />
                <br />
                <br />
                <input type="text" id="Subject" name="Subject" placeholder="Your Email" />
                <br />
                <br />
                <textarea placeholder="Message" defaultValue={""} /> 
              </form>
              <div className="round1 align-items-center">
                <button className=" btn btn-lg">Send Message</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default contact
