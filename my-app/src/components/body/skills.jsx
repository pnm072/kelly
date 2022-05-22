import './skills.css'
import React from 'react'

function skills() {
  return (
   <>
     <section  className="skills">
        <div className="container">
          <div className="section-title">
            <h2 className="d-flex flex-column align-items-center pt-5 "><div className="fuga-item align-items-center">Skills</div></h2>
            <p className=" comm-item pt-5">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
          </div>
          <div className="row skills-content pt-5">
            <div className="col-lg-6">
              <div className="clearfix">
                <p className="text-left">HTML</p>
                <p className="text-right">100%</p>
              </div>
              <div className="progress">
                <div className="progress-bar" style={{width: '100%'}} />
              </div><br />
              <div className="clearfix"><p className="text-left">CSS</p>
                <p className="text-right">90%</p>
              </div>
              <div className="progress">
                <div className="progress-bar" style={{width: '90%'}} />
              </div><br />
              <div className="clearfix"><p className="text-left">JAVASCRIPT</p>
                <p className="text-right">75%</p>
              </div>          
              <div className="progress">
                <div className="progress-bar" style={{width: '75%'}} />
              </div><br />
            </div>
            <div className="col-lg-6">
              <div className="clearfix"><p className="text-left">PHP</p>
                <p className="text-right">80%</p>
              </div> 
              <div className="progress">
                <div className="progress-bar" style={{width: '80%'}} />
              </div><br />
              <div className="clearfix"><p className="text-left">WORDPRESS/CMS</p>
                <p className="text-right">90%</p>
              </div> 
              <div className="progress">
                <div className="progress-bar" style={{width: '90%'}} />
              </div><br />
              <div className="clearfix"><p className="text-left">PHOTOSHOP</p>
                <p className="text-right">55%</p>
              </div>          
              <div className="progress">
                <div className="progress-bar" style={{width: '55%'}} />
              </div><br />
            </div>
          </div>
        </div>
      </section>
   </>
  )
}
export default skills
