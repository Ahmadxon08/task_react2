import "./Article.scss";

const img_1 = "./assets/images/Frame_1.png";
const img_2 = "./assets/images/frame_2.png";

const Article = () => {
  return (
    <>
      <div className="article">
        <div className="container">
          <div className="article_head">
            <h1>Articles & resources</h1>
            <div className="article_btn">
              <a className="bnt_1" href="">
                Get a free quote
              </a>
              <a className="bnt_2" href="">
                Browse articles
              </a>
            </div>
          </div>
          <div className="article_cards">
            <div className="article_card">
              <div className="article_img">
                <img src={img_1} alt="" />
              </div>
              <div className="article_texts">
                <h1>
                  8 best vacuum cleaners to clean any mess for your home in 2022
                </h1>
                <p>
                  Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo
                  quis odio sit sit ac port titor sit males.
                </p>
                <div className="point">
                  <span>Jan 28, 2022</span>
                  <span className="box"></span>
                </div>
              </div>
            </div>
            <div className="article_card">
              <div className="article_img">
                <img src={img_2} alt="" />
              </div>
              <div className="article_texts">
                <h1>
                  How to properly disinfect your phone and other electronics
                </h1>
                <p>
                  Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo
                  quis odio sit sit ac port titor sit males.
                </p>
                <div className="point">
                  <span>Feb 1, 2022</span>
                  <span className="box"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Article;
