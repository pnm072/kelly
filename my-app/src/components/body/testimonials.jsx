import './testimonials.css'
import React from 'react'

function testimonials() {
  return (
    <>
      <section className="testimonials">
        <div className="container">
          <div className="section-title">
            <h2 className="d-flex flex-column align-items-center pt-5 "><div className="monial-item">Testimonials</div></h2>
            <p className=" eius-item pt-5">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
              <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
                <li data-target="#carouselExampleIndicators" data-slide-to={1} />
                <li data-target="#carouselExampleIndicators" data-slide-to={2} />
                <li data-target="#carouselExampleIndicators" data-slide-to={3} />
                <li data-target="#carouselExampleIndicators" data-slide-to={4} />
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active ">
                  <span><img className="rounded-circle align-items-center" src="https://bootstrapmade.com/demo/templates/Kelly/assets/img/testimonials/testimonials-1.jpg" height={140} width={140} />
                    <h4>Saul Goodman</h4>
                    <h5>Ceo &amp; Founder</h5>
                    <p><i className="fa-solid fa-quote-left" />Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.<i className="fa-solid fa-quote-right" />
                    </p>  
                  </span>
                </div>
                <div className="carousel-item">
                  <span><img className="rounded-circle align-items-center" src="https://bootstrapmade.com/demo/templates/Kelly/assets/img/testimonials/testimonials-2.jpg" height={140} width={140} />
                    <h4>Sara Wilsson</h4>
                    <h5>Designer</h5>
                    <p><i className="fa-solid fa-quote-left" />
                      Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                      <i className="fa-solid fa-quote-right" />
                    </p>
                  </span>
                </div>
                <div className="carousel-item ">
                  <span><img className="rounded-circle align-items-center" src="https://bootstrapmade.com/demo/templates/Kelly/assets/img/testimonials/testimonials-3.jpg" height={140} width={140} />
                    <h4>Jena Karlis</h4>
                    <h5>Store Owner</h5>
                    <p><i className="fa-solid fa-quote-left" />
                      Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
                      <i className="fa-solid fa-quote-right" />
                    </p>
                  </span>
                </div>
                <div className="carousel-item  ">
                  <span><img className="rounded-circle align-items-center" src="https://bootstrapmade.com/demo/templates/Kelly/assets/img/testimonials/testimonials-4.jpg" height={140} width={140} />
                    <h4>Matt Brandon</h4>
                    <h5>Freelancer</h5>
                    <p>
                      <i className="fa-solid fa-quote-left" />
                      Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
                      <i className="fa-solid fa-quote-right" />
                    </p></span></div>
                <div className="carousel-item ">
                  <span><img className="rounded-circle align-items-center" src="https://bootstrapmade.com/demo/templates/Kelly/assets/img/testimonials/testimonials-5.jpg" height={140} width={140} />
                    <h4>John Larson</h4>
                    <h5>Entrepreneur</h5>
                    <p>
                      <i className="fa-solid fa-quote-left" />
                      Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                      <i className="fa-solid fa-quote-right" />
                    </p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default testimonials