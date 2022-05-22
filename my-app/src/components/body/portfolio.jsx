import './portfolio.css'
import React from 'react'

 function portfolio() {
  return (
    <>
      <div>
        <section id="portfolio" className="portfolio">
          <div className="container">
            <div className="section-title">
              <h2 className="d-flex flex-column align-items-center pt-5 "><div className="portfolio-head">PORTFOLIO</div></h2>
              <p className=" sus-item pt-4">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
            </div>
          </div>
        </section>
        <div className="row justify-content-center portfolio-main">
          <button className="filter-active">
            <div className="all-main">
              ALL
            </div>
          </button>
          <button className="filter-app">
            <div className="app-main">
              APP
            </div>
          </button>
          <button className="filter-card">
            <div className="card-main">
              CARD
            </div>
          </button>
          <button className="filter-web">
            <div className="web-main">
              WEB
            </div>
          </button>
        </div>
        <div className="container">
          <div className="row portfolio-content">
            <div className="col-lg-4">
              <img src="https://bootstrapmade.com/demo/templates/Kelly/assets/img/portfolio/portfolio-1.jpg" className="img-fluid" />
              <div>
                <br />
              </div>
              <img src="https://bootstrapmade.com/demo/templates/Kelly/assets/img/portfolio/portfolio-6.jpg" className="img-fluid" />
            </div>
            <div className="col-lg-4">
              <img src="https://bootstrapmade.com/demo/templates/Kelly/assets/img/portfolio/portfolio-2.jpg" className="img-fluid" />
              <div>
                <br />
              </div>
              <img src="https://bootstrapmade.com/demo/templates/Kelly/assets/img/portfolio/portfolio-5.jpg" className="img-fluid" />
              <div>
                <br />
              </div>
              <img src="https://bootstrapmade.com/demo/templates/Kelly/assets/img/portfolio/portfolio-9.jpg" className="img-fluid" />
            </div>
            <div className="col-lg-4">
              <img src="https://bootstrapmade.com/demo/templates/Kelly/assets/img/portfolio/portfolio-3.jpg" className="img-fluid" /> 
              <div> 
                <br /> 
              </div>       
              <img src="https://bootstrapmade.com/demo/templates/Kelly/assets/img/portfolio/portfolio-4.jpg" className="img-fluid" />
              <div>
                <br />
              </div>
              <img src="https://bootstrapmade.com/demo/templates/Kelly/assets/img/portfolio/portfolio-7.jpg" className="img-fluid" />
              <div>
                <br />
              </div>
              <img src="https://bootstrapmade.com/demo/templates/Kelly/assets/img/portfolio/portfolio-8.jpg" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default portfolio
