import "./Service.scss";
const house1 = "./assets/images/house_1.png";
const house2 = "./assets/images/house_2.png";
const house3 = "./assets/images/house_3.png";
const girl = "./assets/images/girl_img.png";
const phone = "./assets/images/phone.png";
const Service = () => {
  return (
    <>
      <div className="service">
        <div className="container">
          <div className="service_head">
            <h1>Our Services</h1>
            <a href="">Explore services</a>
          </div>
          <div className="service_cards">
            <div className="service_card">
              <img src={house1} alt="house" />
              <h1>House cleaning</h1>
              <p>
                Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
                dalaracc lacus vel facilisis volutpat est.
              </p>
            </div>
            <div className="service_card">
              <img src={house2} alt="house" />
              <h1>Office cleaning</h1>
              <p>
                Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
                dalaracc lacus vel facilisis volutpat est.
              </p>
            </div>
            <div className="service_card">
              <img src={house3} alt="house" />
              <h1>Industrial cleaning</h1>
              <p>
                Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
                dalaracc lacus vel facilisis volutpat est.
              </p>
            </div>
          </div>
          <div className="service_girl">
            <div className="girl_img">
              <img src={girl} alt="" />
            </div>
            <div className="girl_text">
              <h1>Covid-19 sanitization</h1>
              <h2>
                We follow guidelines to keep you safe from the COVID-19 virus
              </h2>
              <p>
                Lobortis mattis odio leo eget mauris met aliquet semper molestie
                sollicitudin congue massa mauris lectus.
              </p>
              <div className="girl_links">
                <div className="girl_btn">
                  <a href="">Get a free quote</a>
                </div>
                <div className="phone">
                  <img src={phone} alt="" />
                  <div className="girl_texts">
                    <p>Call us now</p>
                    <span>(414) 567 - 2109</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="line">
           
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
