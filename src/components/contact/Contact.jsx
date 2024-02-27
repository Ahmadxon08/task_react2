import "./Contact.scss";
const phone = "./assets/images/phone.png";

const Contact = () => {
  return (
    <>
      <div className="contact">
        <div className="container">
          <div className="contact_content">
            <div className="contact_card1">
              <h1>Contact Us</h1>
              <p>
                In dignissim euismod pretium amet enim a eu nam ut urna accumsan
                pellentesque lacus duis pharetra eutortor.
              </p>
              <div className="tell">
                <img src={phone} alt="phone_icon" />
                <div className="tell_texts">
                  <p>Call us now</p>
                  <span>(414) 567 - 2109</span>
                </div>
              </div>
              <div className="row"></div>
              <h2>Not convinced yet?</h2>
              <p>
                Massa bibendum consectetur maurisid gravida purus, dolor dui
                amet morbi non nunc urna purus diam.
              </p>
              <a href="">Browse our packages</a>
            </div>
            <div className="contact_card2">
              <div className="form">
                <div className="left">
                  <div className="inner">
                    <label htmlFor="text">Full name</label>
                    <input type="text" />
                  </div>
                  <div className="inner">
                    <label htmlFor="text">Address</label>
                    <input type="text" />
                  </div>
                  <div className="inner">
                    <label htmlFor="text">Requested service</label>
                    <input type="text" />
                  </div>
                </div>
                <div className="left">
                  <div className="inner">
                    <label htmlFor="number">Phone number</label>
                    <input type="number" />
                  </div>
                  <div className="inner">
                    <label htmlFor="email">Email</label>
                    <input type="email" />
                  </div>
                  <div className="inner">
                    <label htmlFor="number">Day of service</label>
                    <input type="number" />
                  </div>
                </div>
              </div>
              <div className="massage">
                <label htmlFor="massege">Add a note</label>
                <p></p>
              </div>
              <input className="submit" type="submit" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
