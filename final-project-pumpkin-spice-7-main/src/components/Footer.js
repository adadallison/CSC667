import React from 'react'
import "../css/footer.css"
import facebook2 from '../images/facebook2.png'
import instagram2 from '../images/instagram2.png'
import twitter2 from '../images/twitter2.png'




var style = {
    backgroundColor: "#e8f9ff",
    borderTop: "1px solid #f5f5f5",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "50px",
    width: "100%",
}


function Footer({ }) {
    return (
        <div>
            <div />
            <div style={style}>
                <div className="left">Home App © </div>

                <div className="centered">About</div>
                <div className="centered">Terms</div>
                <div className="centered">Safety</div>
                <div className="centered">News</div>
                <div className="centered">Support</div>
                <div className="centered">Careers</div>

                
                <div className="right">
                    <a href="https://instagram.com">
                        <img className="socials"src={instagram2} alt="insta" ></img>
                    </a>

                    <a href="https://twitter.com">
                        <img className="socials"src={twitter2} alt="twitter" ></img>
                    </a>

                    <a href="https://facebook.com">
                        <img className="socials"src={facebook2} alt="fb" ></img>
                    </a>
                </div>
          
            </div>
        </div>
    )
}

export default Footer