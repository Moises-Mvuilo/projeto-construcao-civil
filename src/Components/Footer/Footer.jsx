//Impoprtação de links
import { Link } from "react-router-dom";

//ASSETS

import Logo from "../../assets/dnc-logo.svg";
import brazilLogo from "../../assets/brazil.svg";
import usaLogo from "../../assets/usa.svg";
import facebookLogo from "../../assets/facebook.svg";
import instagramLogo from "../../assets/instagram.svg";
import twitterLogo from "../../assets/twitter.svg";
import linkedinLogo from "../../assets/linkedin.svg";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className=" d-flex jc-space-between mobile-fd-column">
          <div className="footer-logo-col">
            <img src={Logo} className="footer-logo" /> <br />
            <p className="grey-1-color">
              {" "}
              A escola que prepara você com para as profissões em alta no
              mercado de trabalho{" "}
            </p>
            <div className="d-flex social-links">
              <a href="https://facebook.com " target="_blank">
                <img src={facebookLogo} alt="" />
              </a>

              <a href="https://linked.com " target="_blank">
                <img src={linkedinLogo} alt="" />
              </a>
              <a href="https://instagram.com" target="_blank">
                <img src={instagramLogo} alt="" />
              </a>
              <a href="https://twitter.com" target="_blank">
                <img src={twitterLogo} alt="" />
              </a>
            </div>
          </div>

          <div className="d-flex mobile-fd-column">
            <div className="footer-col">
              <h3>Pages</h3>
              <ul className="footer">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/Projects">Projects</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h3>Contact</h3>
              <p className="grey-1-color">
                R. Justino Cobra, 61 – Vila Ema | São José dos Campos – SP | CEP
                12243-030
              </p>
              <p className="grey-1-color">suporte@escoladnc.com.br</p>
              <p className="grey-1-color">(19) 99187-4342</p>
            </div>
          </div>
        </div>
        <div className="d-flex jc-space-between footer-copy">
          <p className="grey-1-color">Copyright © DNC - 2025</p>
          <div className="langs-area d-flex">
            <img src={brazilLogo} height="29px" />
            <img src={usaLogo} height="29px" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
