import './about.css'
import React from 'react'

function about() {
  return (
    <>
     <div className="details">
          <section id="about" className="d-flex align-items-center pt-4 ">
            <div className="container d-flex flex-column align-items-center" data-aos="zoom-in" data-aos-delay={100}>
              <h2 className="ex-item">About</h2>
              <p className="pt-4">
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
              </p>
            </div>
          </section>
        </div>
        <div className="container">
          <div className="row pt-4">
            <div className="col-md-4">
              <img className="img-fluid" src="https://bootstrapmade.com/demo/templates/Kelly/assets/img/about.jpg" />
            </div>
            <div className="col-md-8 content">
              <h3>Illustrator &amp; UI/UX Designer</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <div className="row">
                <div className="col-md-6 first-item">
                  <p><b>Birthday:</b>1 May 1995</p>
                  <p><b>Website: </b>www.example.com</p>
                  <p><b>Phone:</b>+123 456 7890</p>
                  <p><b>City: </b>City : New York, USA</p>
                </div>
                <div className="col-md-6 first-item">
                  <p><b>Age:</b>30</p>
                  <p><b>Degree: </b>Master</p>
                  <p><b>PhEmailone:</b>email@example.com</p>
                  <p><b>Freelance:</b>Available</p>
                </div>
              </div>
              <div className="labore">
                <p className="labore-item">
                  Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis. Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.
                </p>
              </div>
            </div>
          </div>
        </div>
     
    </>
  )
}
export default about
