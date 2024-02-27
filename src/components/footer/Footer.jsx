import "./Footer.scss";
const navLogo = "./assets/images/logo.png";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer_content">
            <div className="footer_cards">
              <div className="footer_card">
                <h1>Quality cleaning for your home</h1>
                <p>
                  Lorem ipsum dolor sit amet cteturdo adipiscing elit, sed do
                  eiusmo.
                </p>
                <div className="img_footer">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div className="footer_card">
                <h1>Contact us</h1>
                <p> 1827 Nickel Road, Los Angeles, CA, 90017, United States</p>
                <p> (414) 567 - 2109</p>
                <p> contact@cleaning.coms</p>
              </div>
              <div className="footer_card3">
                <h1>Hours</h1>
                <h2>Monday to Friday</h2>
                <p>6:00 AM - 9:00 PM</p>
                <h2>Saturday & Sunday</h2>
                <p>8:00 AM - 8:00 PM</p>
              </div>
              <div className="footer_card4">
                <h1>Get a free estimate</h1>
                <span>(414) 567 - 2109</span>
                <p>
                  Lorem ipsum dolor sit amet ectetur adipiscing elit, sed do
                  eiusmod.
                </p>
                <a href="">Request a free quote</a>
              </div>
            </div>

            <div className="row">
              <hr />
            </div>
            <div className="footer_end">
              <img src={navLogo} alt="" />
              <p>
                Copyright © Cleaning X | Designed by
                <span>BRIX Templates</span>- Powered by
                <span>WebflowLicenses</span>- <span>Licenses</span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
