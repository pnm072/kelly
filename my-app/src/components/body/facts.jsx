import './facts.css'
import React from 'react'

 function facts() {
  return (
    <>
       <section id="facts" className="facts">
        <div className="container">
          <div className="section-title">
            <h2 className="d-flex flex-column align-items-center pt-5 "><div className="eum-item">Facts</div></h2>
            <p className='mag-item'>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
            <div className="row pt-4">
              <div className="col-md-3 col-6 text-center">
                <h3 className="counter">232</h3>
                <p>Clients</p>
              </div>
              <div className="col-md-3 col-6 text-center">
                <h3 className="counter">521</h3>
                <p>Projects</p>
              </div>
              <div className="col-md-3 col-6 text-center">
                <h3 className="counter">1463</h3>
                <p>Hours Of Support</p>
              </div>
              <div className="col-md-3 col-6 text-center">
                <h3 className="counter">15</h3>
                <p>Hard Workers</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default facts
