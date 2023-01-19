import React from 'react'
import './footer.css'
import Samehlogo from "./assets/sameh.png";


const Footer = () => {
  return (
<>
<div className="footer">
            <div className="container">     
                
                <div className="row">
                    <div className="col-lg-12 col-sm-12 col-xs-12">
                        <p className="copyright">Copyright © 2023 <a href="#"><img
              src={Samehlogo}
              alt="sameh-logo"
              style={{ width: "110px", height: "25px" }}
            /></a></p>
                    </div>                
                </div>                
            </div>
        </div>
</>
    )
}

export default Footer