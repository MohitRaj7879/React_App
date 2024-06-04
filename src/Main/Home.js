import "./Home.css";

// importing SVG image as a React component
import { ReactComponent as Mysvg } from "../images/picc.svg";
import { Link } from "react-router-dom";

//importing icons from react-icons library
import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaStore,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";
import { IoBusiness } from "react-icons/io5";
import { LuPenSquare } from "react-icons/lu";
import { MdArrowOutward } from "react-icons/md";
import { TiThMenu } from "react-icons/ti";
import { GrValidate } from "react-icons/gr";

//importing ThemeToffle Component form Redux folder
import { ThemeToggle } from "../Redux/ThemeToggle";

//importing the useSelector hook from react-redux to access the Redux store
import { useSelector } from "react-redux";

function Home() {
  //Accessing the theme state from the redux store
  const theme = useSelector((state) => {
    return state.theme.theme;
  });
  return (
    <>
      <div data-theme={theme}>
        <div className="container">
          <div className="header">
            <h4 className="headertext">Register</h4>
            <h4 className="headertext">Login</h4>
          </div>
          <div className="homeContainer">
            <div className="navbar">
              <div className="logoContainer">
                <div className="logoImgContainer">
                  <img
                    className="logoImg"
                    src={require("../images/pngtree-aa-letter-logos-png-image_6471608.png")}
                    alt="logo"
                    height={"100%"}
                    width={"100%"}
                  />
                </div>
                <div className="logotextContainer">
                  <h2 className="logotext">ASTRA</h2>
                </div>
              </div>
              <div className="menu">
                <TiThMenu
                  style={{ color: "white", height: "40px", width: "40px" }}
                />
              </div>
              <div className="navLinksContainer">
                <div className="linkContainer">
                  <Link to="/" className="link">
                    Home
                  </Link>
                </div>
                <div className="linkContainer">
                  <Link to="/Services" className="link">
                    Services
                  </Link>
                </div>
                <div className="linkContainer">
                  <Link to="/About" className="link">
                    About
                  </Link>
                </div>
                <div className="linkContainer">
                  <Link to="/Reviews" className="link">
                    Reviews
                  </Link>
                </div>
                <div className="linkContainer">
                  <Link to="/Whyus" className="link">
                    Why us
                  </Link>
                </div>
                <div className="linkContainer">
                  <Link to="/Contact" className="link">
                    Contact
                  </Link>
                </div>
                <div className="linkContainer">
                  <FaInstagram className="icon" />
                </div>
                <div className="linkContainer">
                  <FaFacebook className="icon" />
                </div>
                <div className="linkContainer">
                  <ThemeToggle />
                </div>
              </div>
            </div>
            <div className="contentContainer">
              <div className="leftContentContainer">
                <div className="headingContainer">
                  <h2 className="heading">Hey There Welcome!</h2>
                </div>
                <div className="descContainer">
                  <h5 className="description">
                    This webpage is built using React and Redux Toolkit.
                  </h5>
                </div>

                <button type="submit" className="button">
                  Make a Website
                </button>
              </div>
              <div className="rightContentContainer">
                <Mysvg className="contentImg" />
              </div>
            </div>
          </div>
        </div>
        <div className="servicesContainer">
          <div className="servicesTopContainer">
            <div className="service">
              <IoBusiness className="serviceIcon" />
              <div className="serviceTitle">Local Business</div>
              <div className="serviceDescription">
                Start a Business with Us.
              </div>
            </div>
            <div className="service">
              <FaStore className="serviceIcon" />
              <div className="serviceTitle">Shop</div>
              <div className="serviceDescription">
              Become a Vendor.
              </div>
            </div>
            <div className="service">
              <LuPenSquare className="serviceIcon" />
              <div className="serviceTitle">CPV/CPI</div>
              <div className="serviceDescription">
                Manage your Business.
              </div>
            </div>
            <div className="service">
              <GrValidate className="serviceIcon" />
              <div className="serviceTitle">QA</div>
              <div className="serviceDescription">
                Ensure the Quality with Us.
              </div>
            </div>
          </div>
          <div className="serviceHeadingContainer">
            <h2 className="serviceHeading">Our Services</h2>
          </div>
          <div className="serviceBottomContainer">
            <div className="serviceImageContainer">
              <p className="imageContainer">
                <img
                  className="serviceImage"
                  src={require("../images/shopping-cartt.png")}
                  alt="cart"
                />
              </p>
              <p className="imageContainer">
                <img
                  className="serviceImage"
                  src={require("../images/good.webp")}
                  alt="thumbsup"
                />
              </p>
              <p className="imageContainer">
                <img
                  className="serviceImage"
                  src={require("../images/lightning_bolt_3d_2.jpg")}
                  alt="flash"
                />
              </p>
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="footerLinksContainer">
            <span>
              <a href="/" className="footerlink">
                About
              </a>
            </span>
            <span>
              <a href="/" className="footerlink">
                Showcase
              </a>
            </span>
            <span>
              <a href="/" className="footerlink">
                Learn
              </a>
            </span>
            <span>
              <a href="/" className="footerlink">
                Get Involved
              </a>
            </span>
            <span>
              <a href="/" className="footerlink">
                WordPress.com
              </a>
              <MdArrowOutward className="icon" />
            </span>
            <span>
              <a href="/" className="footerlink">
                News
              </a>
            </span>
            <span>
              <a href="/" className="footerlink">
                Themes
              </a>
            </span>
            <span>
              <a href="/" className="footerlink">
                Documentation
              </a>
            </span>
            <span>
              <a href="/" className="footerlink">
                Events
              </a>
            </span>
            <span>
              <a href="/" className="footerlink">
                Matt
              </a>
              <MdArrowOutward className="icon" />
            </span>
            <span>
              <a href="/" className="footerlink">
                Hosting
              </a>
            </span>
            <span>
              <a href="/" className="footerlink">
                Plugins
              </a>
            </span>
            <span>
              <a href="/" className="footerlink">
                Developers
              </a>
            </span>
            <span>
              <a href="/" className="footerlink">
                Donate
              </a>
              <MdArrowOutward className="icon" />
            </span>
            <span>
              <a href="/" className="footerlink">
                bbPress
              </a>
              <MdArrowOutward className="icon" />
            </span>
            <span>
              <a href="/" className="footerlink">
                Privacy
              </a>
            </span>
            <span>
              <a href="/" className="footerlink">
                Patterns
              </a>
            </span>
            <span>
              <a href="/" className="footerlink">
                WordPress.tv
              </a>
              <MdArrowOutward className="icon" />
            </span>
            <span>
              <a href="/" className="footerlink">
                Swag Store
              </a>
              <MdArrowOutward className="icon" />
            </span>
            <span>
              <a href="/" className="footerlink">
                Buddy Press
              </a>
              <MdArrowOutward className="icon" />
            </span>
          </div>
          <div className="socialLinkContainer">
            <span>
              <a href="/" className="footerlink">
                <FaTwitter className="icon" />
              </a>
            </span>
            <span>
              <a href="/" className="footerlink">
                <FaFacebook className="icon" />
              </a>
            </span>
            <span>
              <a href="/" className="footerlink">
                <FaInstagram className="icon" />
              </a>
            </span>
            <span>
              <a href="/" className="footerlink">
                <FaYoutube className="icon" />
              </a>
            </span>
            <span>
              <a href="/" className="footerlink">
                <FaLinkedin className="icon" />
              </a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
