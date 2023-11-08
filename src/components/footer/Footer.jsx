import React from "react";
import { ReactComponent as Logo } from "./assets/Logo.svg";
import { ReactComponent as Facebook } from "./assets/Vector-1.svg";
import { ReactComponent as Discord } from "./assets/Vector-2.svg";
import { ReactComponent as Twitter } from "./assets/Vector.svg";
import { Link } from "react-router-dom";
import "./index.scss"

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main-wrapper">
        <div className="footer-col-1">
          <Logo />
          <p className="outro">
            Diam molestie tempor quam egestas turpis turpis sit ut diam. In nibh
            non sem eleifend ut placerat ipsum dictumst tempus. Gravida laoreet
            suscipit viverra non at adipiscing tellus.
          </p>
          <span className="footer-social-icons">
            <Discord /> <Facebook /> <Twitter />
          </span>
        </div>
        <div className="footer-col-2">
            <h5 className="footer-nav-title">WEBSITE</h5>
            <ul>
                <a href="/" className="footer-nav-items">Home</a>
                <a href="/about" className="footer-nav-items">About us</a>
                <a href="/contact" className="footer-nav-items">Contact</a>
            </ul>
        </div>
        <div className="footer-col-3">
        <h5 className="footer-nav-title">GAMES</h5>
            <ul>
                <Link className="footer-nav-items">Apex</Link>
                <Link className="footer-nav-items">EaFC</Link>
                <Link className="footer-nav-items">Minecraft</Link>
                <Link className="footer-nav-items">Call of Duty</Link>
                <Link className="footer-nav-items">Valorant</Link>
                <Link className="footer-nav-items">Chess.com</Link>
                <Link className="footer-nav-items">CSGO</Link>
                <Link className="footer-nav-items">PUBG</Link>
                <Link className="footer-nav-items">ROcketLeague</Link>
            </ul>
        </div>
      </div>
      <div className="attributions">
        <div className="attr-col-1">
            <ul>
                <li><Link className="attribution-link">Privacy Policy</Link></li>
                <li><Link className="attribution-link">Terms & Conditions</Link></li>
                <li><Link className="attribution-link">Copyright</Link></li>
            </ul>
        </div>
        <div className="attr-col-2">All copyrights reserved © Buffgaming, 2023</div>
      </div>
    </footer>
  );
}

export default Footer;
