import "./About.scss";
const img1 = "./assets/images/about_img_1.png";
const img2 = "./assets/images/about_img_2.png";
const img3 = "./assets/images/about_img_3.png";

const About = () => {
  return (
    <>
      <div className="about">
        <div className="container">
          <div className="about_head">
            <h1>About Us</h1>
            <p>
              Sagittis nibh scelerisque vitae eget vulputate sem elementum sed
              neque nisi felis non ultrices massa id egestas quam velit pretium
              nu.
            </p>
          </div>
          <div className="about_cards">
            <div className="about_card">
              <img src={img1} alt="img" />
              <h1>1. Schedule online</h1>
              <p>
                Sagittis nibh scelerisque vitae egetolment vulputate sem
                elementum sed n.
              </p>
            </div>
            <div className="about_card">
              <img src={img2} alt="img" />
              <h1>2. Pay online easily</h1>
              <p>
                Vitae ut accumsan blandit ullamcorperolm suscipit dui gravida
                amet at nunc.
              </p>
            </div>
            <div className="about_card">
              <img src={img3} alt="img" />
              <h1>3. Get your house cleaned</h1>
              <p>
                Nunc maecenas sollicitudin metus tellus mattis sed porttitor
                cursus eleifend.
              </p>
            </div>
          </div>
          <div className="about_btn">
            <a className="btn1" href="">Get a free quote</a>
            <a className="btn2" href="">Explore services</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
