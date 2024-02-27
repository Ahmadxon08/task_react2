import "./Header.scss";

const navLogo = "./assets/images/logo.png";

const Header = () => {
  // const btnOpen = document.getElementById("btnOpen");
  // const links = document.querySelector(".nav_links");
  // const nav2 = document.querySelector("nav2");

  // btnOpen.addEventListener("click", () => {
  //   links.classList.toggle("open");
  //   nav2.classList.toggle("open");
  // });
  return (
    <header>
      <div className="container">
        <nav className="nav">
          <div className="nav1">
            <div className="nav_logo">
              <a href="/">
                <img src={navLogo} alt="Logo" />
              </a>
            </div>
            <div className="nav_links open ">
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/about">About</a>
                </li>
                <li>
                  <a href="/contact">Services</a>
                </li>
                <li>
                  <a href="/contact">Articles</a>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="nav2 open">
            <p>Cart ( 0 )</p>
            <a href="">Get a free quote</a>
          </div>
          <div id="btnOpen" className="btnMenu">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
