import "./Home.scss";

const cleaner = "./assets/images/cleaner.png";
const phone = "./assets/images/phone.png";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="container">
          <div className="home_content">
            <div className="home_texts">
              <h1>Quality cleaning for your home</h1>
              <p>
                Condimentum mauris sit cursus amet id non neque pharetra nulla
                ornare sed facilisis senectus dapibus nibh ultrices eget
                suscipit aliquet et nulla magna lacus penatibus.
              </p>
              <div className="home_links">
                <div className="home_btn">
                  <a href="">Get a free quote</a>
                </div>
                <div className="phone">
                  <img src={phone} alt="" />
                  <div className="phone_texts">
                    <p>Call us now</p>
                    <span>(414) 567 - 2109</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="img_home">
              <img src={cleaner} alt="Cleaner" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
