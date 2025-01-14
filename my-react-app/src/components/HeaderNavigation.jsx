import { Link} from 'react-router'; // using <link> since the link doesn't need styling
import LightDarkModeToggle from "./Light-Dark-Mode-Toggle/LightDarkModeToggle";

// Import of Header svg files
import homeSvg from "../../src/assets/react_env_home_icon.svg"; // Header svg files
import otherToolsSvg from "../../src/assets/react_env_othertools_icon.svg"; // Other Tools svg files
import labSvg from "../../src/assets/react_env_lab_icon.svg"; // Lab svg files
import contactUs from "../../src/assets/react_env_contactus_icon.svg"; // Contact us svg files

/*  Navigation handler event listener */
const handleNavListener = e => {
    e.preventDefault(); // prevent default navigation

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'event': 'nav_click', // navigation event
        'url': e.target.href, // href captured for debugging
        'nav_section': e.target.innerHTML
    });

    // Navigate after event pushing
    window.location.href = e.target.href;
};
/*  Navigation handler event listener END */

export default function HeaderNavigation() {
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
                            {/* --SVG for "Home" start-- */}
                            <div id="img">
                                <img src={homeSvg} alt="Home Icon" className="home-icon bob-on-hover" />
                            </div>
                            {/* --SVG for "Home" start-- */}
                            <Link onClick={handleNavListener} to="/" className="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                                aria-current="page">Home</Link>
                        </li>
                        <li className="nav-item mx-4">
                            {/* --SVG for "Other Tools" start-- */}
                            <div id="img">
                                <img src={otherToolsSvg} alt="Other Tools Icon" className="other-tools-icon" />
                            </div>
                            {/* --SVG for "Other Tools" end-- */}
                            <Link onClick={handleNavListener} to="/other-tools" className="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Other Tools</Link>
                        </li>
                        <li className="nav-item mx-4">
                            {/* --SVG for "Lab" start-- */}
                            <div id="img">
                                <img src={labSvg} alt="Lab Icon" className="lab-icon" />
                            </div>
                            {/* --SVG for "Lab" end-- */}
                            <Link onClick={handleNavListener} to="/lab" className="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Lab</Link>
                        </li>
                        <li className="nav-item mx-4">
                            {/* --SVG for "Contact" start-- */}
                            <div id="img">
                                <img src={contactUs} alt="Contact icon" className="contact-icon" />
                            </div>
                            {/* --SVG for "Contact" end-- */}
                            <Link onClick={handleNavListener} to="/contact" className="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Contact</Link>
                        </li>
                        <LightDarkModeToggle />
                    </ul>
                </nav>
            </section>
        </header>
    );
}