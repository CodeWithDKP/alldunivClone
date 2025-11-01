import { Link } from "react-router-dom";
import { useHeaderFooter } from "../dataContext/headerFooter";
import '../components/components.css';

import facebook from "../assets/icons/facebook.png";
import twitter from "../assets/icons/twitter.png";
import instagram from "../assets/icons/instagram.png";
import youtube from "../assets/icons/youtube.png";
import linkedin from "../assets/icons/linkedin.png";


function Footer() {
    const { footerData } = useHeaderFooter();

    return (
        <footer className="footer-section text-white">
            <div className="container py-5">
                <div className="row gy-4">
                    {/* ---------- Column 1: Contact ---------- */}
                    <div className="col-md-3">
                        <h5 className="footer-heading">Contact</h5>
                        <p className="footer-subheading">{footerData.contact.name}</p>
                        <p className="footer-text">{footerData.contact.address}</p>
                        <p className="footer-text">{footerData.contact.phone}</p>

                        <h6 className="footer-heading mt-4">For Visitors</h6>
                        <ul className="list-unstyled footer-links">
                            <li><Link to="/address">Address</Link></li>
                            <li><Link to="/map">Map & Directions</Link></li>
                        </ul>
                    </div>

                    {/* ---------- Column 2 ---------- */}
                    <div className="col-md-3">
                        <h5 className="footer-heading">Quick Links</h5>
                        <ul className="list-unstyled footer-links">
                            {footerData.quickLinks1.map((item, i) => (
                                <li key={i}><Link to={item.path}>{item.text}</Link></li>
                            ))}
                        </ul>
                    </div>

                    {/* ---------- Column 3 ---------- */}
                    <div className="col-md-3">
                        <h5 className="footer-heading">Quick Links</h5>
                        <ul className="list-unstyled footer-links">
                            {footerData.quickLinks2.map((item, i) => (
                                <li key={i}><Link to={item.path}>{item.text}</Link></li>
                            ))}
                        </ul>
                    </div>

                    {/* ---------- Column 4 ---------- */}
                    <div className="col-md-3">
                        <h5 className="footer-heading">Quick Links</h5>
                        <ul className="list-unstyled footer-links">
                            {footerData.quickLinks3.map((item, i) => (
                                <li key={i}><Link to={item.path}>{item.text}</Link></li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* ---------- Bottom Bar ---------- */}
            <div className="footer-bottom">
                <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
                    {/* Left: Copyright */}
                    <p className="footer-copy mb-2 mb-md-0">
                        © Copyright {footerData.copyright}
                    </p>

                    {/* Center: Visitor Counter */}
                    <div className="visitor-counter my-2 my-md-0">
                        <strong>Visitors:</strong>
                        <span className="visitor-box">{footerData.visitors}</span>
                    </div>

                    {/* Right: Social Media Icons */}
                    <div className="footer-social d-flex justify-content-center justify-content-md-end mt-2 mt-md-0">
                        <a href="#"><img src={facebook} alt="Facebook" /></a>
                        <a href="#"><img src={twitter} alt="Twitter" /></a>
                        <a href="#"><img src={instagram} alt="Instagram" /></a>
                        <a href="#"><img src={youtube} alt="YouTube" /></a>
                        <a href="#"><img src={linkedin} alt="LinkedIn" /></a>
                    </div>
                </div>
            </div>

        </footer>
    );
}

export default Footer;
