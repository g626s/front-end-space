import { Link, useNavigate } from 'react-router-dom';
import LightDarkModeToggle from "./Light-Dark-Mode-Toggle/LightDarkModeToggle";
import homeSvg from "../../src/assets/react_env_home_icon.svg";
import otherToolsSvg from "../../src/assets/react_env_othertools_icon.svg";
import labSvg from "../../src/assets/react_env_lab_icon.svg";
import contactUs from "../../src/assets/react_env_contactus_icon.svg";

export default function HeaderNavigation() {
    const navigate = useNavigate(); 
    const handleNavListener = (e, path) => {
        e.preventDefault(); // Prevent default link behavior
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            'event': 'nav_click',
            'url': path, // Corrected to path
            'nav_section': e.target.innerText
        });
        navigate(path); 
    };

    return (
        <header>
            <section id="page-title" aria-labelledby="page-title-section" className="container">
                <h1>Gestalt Projects</h1>
            </section>
            <div className="animated-border-box-glow"></div>
            <section aria-labelledby="navigation-section" className="container animated-border-box">
                <nav id="nav">
                    <ul className="nav justify-content-center">
                        <li className="nav-item mx-4">
                            <div id="img">
                                <img src={homeSvg} alt="Home Icon" className="home-icon bob-on-hover" />
                            </div>
                            <Link
                                to="/"
                                onClick={(e) => handleNavListener(e, "/")}
                                className="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                            >
                                Home
                            </Link>
                        </li>
                        <li className="nav-item mx-4">
                            <div id="img">
                                <img src={otherToolsSvg} alt="Other Tools Icon" className="other-tools-icon" />
                            </div>
                            <Link
                                to="/other-tools"
                                onClick={(e) => handleNavListener(e, "/other-tools")}
                                className="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                            >
                                Other Tools
                            </Link>
                        </li>
                        <li className="nav-item mx-4">
                            <div id="img">
                                <img src={labSvg} alt="Lab Icon" className="lab-icon" />
                            </div>
                            <Link
                                to="/lab"
                                onClick={(e) => handleNavListener(e, "/lab")}
                                className="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                            >
                                Lab
                            </Link>
                        </li>
                        <li className="nav-item mx-4">
                            <div id="img">
                                <img src={contactUs} alt="Contact icon" className="contact-icon" />
                            </div>
                            <Link
                                to="/contact"
                                onClick={(e) => handleNavListener(e, "/contact")}
                                className="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                            >
                                Contact
                            </Link>
                        </li>
                        <LightDarkModeToggle />
                    </ul>
                </nav>
            </section>
        </header>
    );
}
