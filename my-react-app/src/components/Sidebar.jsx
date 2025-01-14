// Import tooltip icons
import tooltipIcon from "../../src/assets/tooltip_icon.svg"; // Tooltip icon
import codingIcon from "../../src/assets/coding_icon.svg"; // Code icon
import connectIcon from "../../src/assets/connect_icon.svg"; //Connect icon

export default function Sidebar() {
    /*  Outbound handler event listener */
    const handleOutboundListener = e => {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            'event': 'outbound_click', // outbound event
            'outbound_card': e.target.getAttribute("alt").split(" ").shift()
        });
    }

    return (
        <section id="social-sidebar" className="container">
            <div id="social-sidebar-div" className="social-links container">
                <div className="hover-text">
                    <a onClick={handleOutboundListener} href="https://www.linkedin.com/in/gustavosanchez626/" target="_blank" className="social-link" aria-labelledby="LinkedIn logo" >
                        <span className="tooltip-text"><img src={connectIcon} alt="Connect and Collaborate Icon" className="tooltip-icon" />Connect with me on LinkedIn!</span>
                        <span id="img">
                            {/* LinkedIn SVG */}
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256" className="social-logo-icon" alt="LinkedIn logo">
                                <g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: "normal" }}><g transform="scale(5.12,5.12)"><path d="M9,4c-2.74952,0 -5,2.25048 -5,5v32c0,2.74952 2.25048,5 5,5h32c2.74952,0 5,-2.25048 5,-5v-32c0,-2.74952 -2.25048,-5 -5,-5zM9,6h32c1.66848,0 3,1.33152 3,3v32c0,1.66848 -1.33152,3 -3,3h-32c-1.66848,0 -3,-1.33152 -3,-3v-32c0,-1.66848 1.33152,-3 3,-3zM14,11.01172c-1.09522,0 -2.08078,0.32736 -2.81055,0.94141c-0.72977,0.61405 -1.17773,1.53139 -1.17773,2.51367c0,1.86718 1.61957,3.32281 3.67969,3.4668c0.0013,0.00065 0.0026,0.0013 0.00391,0.00195c0.09817,0.03346 0.20099,0.05126 0.30469,0.05273c2.27301,0 3.98828,-1.5922 3.98828,-3.52148c-0.00018,-0.01759 -0.00083,-0.03518 -0.00195,-0.05274c-0.10175,-1.90023 -1.79589,-3.40234 -3.98633,-3.40234zM14,12.98828c1.39223,0 1.94197,0.62176 2.00195,1.50391c-0.01215,0.85625 -0.54186,1.51953 -2.00195,1.51953c-1.38541,0 -2.01172,-0.70949 -2.01172,-1.54492c0,-0.41771 0.15242,-0.7325 0.47266,-1.00195c0.32023,-0.26945 0.83428,-0.47656 1.53906,-0.47656zM11,19c-0.55226,0.00006 -0.99994,0.44774 -1,1v19c0.00006,0.55226 0.44774,0.99994 1,1h6c0.55226,-0.00006 0.99994,-0.44774 1,-1v-5.86523v-13.13477c-0.00006,-0.55226 -0.44774,-0.99994 -1,-1zM20,19c-0.55226,0.00006 -0.99994,0.44774 -1,1v19c0.00006,0.55226 0.44774,0.99994 1,1h6c0.55226,-0.00006 0.99994,-0.44774 1,-1v-10c0,-0.82967 0.22639,-1.65497 0.625,-2.19531c0.39861,-0.54035 0.90147,-0.86463 1.85742,-0.84766c0.98574,0.01695 1.50758,0.35464 1.90234,0.88477c0.39477,0.53013 0.61523,1.32487 0.61523,2.1582v10c0.00006,0.55226 0.44774,0.99994 1,1h6c0.55226,-0.00006 0.99994,-0.44774 1,-1v-10.73828c0,-2.96154 -0.87721,-5.30739 -2.38086,-6.89453c-1.50365,-1.58714 -3.59497,-2.36719 -5.80664,-2.36719c-2.10202,0 -3.70165,0.70489 -4.8125,1.42383v-0.42383c-0.00006,-0.55226 -0.44774,-0.99994 -1,-1zM12,21h4v12.13477v4.86523h-4zM21,21h4v1.56055c0.00013,0.43 0.27511,0.81179 0.68291,0.94817c0.40781,0.13638 0.85714,-0.00319 1.11591,-0.34661c0,0 1.57037,-2.16211 5.01367,-2.16211c1.75333,0 3.25687,0.58258 4.35547,1.74219c1.0986,1.15961 1.83203,2.94607 1.83203,5.51953v9.73828h-4v-9c0,-1.16667 -0.27953,-2.37289 -1.00977,-3.35352c-0.73023,-0.98062 -1.9584,-1.66341 -3.47266,-1.68945c-1.52204,-0.02703 -2.77006,0.66996 -3.50195,1.66211c-0.73189,0.99215 -1.01562,2.21053 -1.01562,3.38086v9h-4z"></path></g></g>
                            </svg>
                            {/* LinkedIn SVG END */}
                        </span>
                    </a>
                </div>
                <div className="hover-text">
                    <a onClick={handleOutboundListener} href="https://github.com/g626s" target="_blank" className="social-link" aria-labelledby="Github logo">
                        <span className="tooltip-text"><img src={codingIcon} alt="Coding Collaboration Icon" className="tooltip-icon" />Come check out some projects!</span>
                        <span id="img">
                            {/* GitHub SVG */}
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256" className="social-logo-icon" alt="Github logo">
                                <g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: "normal" }}><g transform="scale(5.12,5.12)"><path d="M17.791,46.836c0.711,-0.306 1.209,-1.013 1.209,-1.836v-5.4c0,-0.197 0.016,-0.402 0.041,-0.61c-0.014,0.004 -0.027,0.007 -0.041,0.01c0,0 -3,0 -3.6,0c-1.5,0 -2.8,-0.6 -3.4,-1.8c-0.7,-1.3 -1,-3.5 -2.8,-4.7c-0.3,-0.2 -0.1,-0.5 0.5,-0.5c0.6,0.1 1.9,0.9 2.7,2c0.9,1.1 1.8,2 3.4,2c2.487,0 3.82,-0.125 4.622,-0.555c0.934,-1.389 2.227,-2.445 3.578,-2.445v-0.025c-5.668,-0.182 -9.289,-2.066 -10.975,-4.975c-3.665,0.042 -6.856,0.405 -8.677,0.707c-0.058,-0.327 -0.108,-0.656 -0.151,-0.987c1.797,-0.296 4.843,-0.647 8.345,-0.714c-0.112,-0.276 -0.209,-0.559 -0.291,-0.849c-3.511,-0.178 -6.541,-0.039 -8.187,0.097c-0.02,-0.332 -0.047,-0.663 -0.051,-0.999c1.649,-0.135 4.597,-0.27 8.018,-0.111c-0.079,-0.5 -0.13,-1.011 -0.13,-1.543c0,-1.7 0.6,-3.5 1.7,-5c-0.5,-1.7 -1.2,-5.3 0.2,-6.6c2.7,0 4.6,1.3 5.5,2.1c1.699,-0.701 3.599,-1.101 5.699,-1.101c2.1,0 4,0.4 5.6,1.1c0.9,-0.8 2.8,-2.1 5.5,-2.1c1.5,1.4 0.7,5 0.2,6.6c1.1,1.5 1.7,3.2 1.6,5c0,0.484 -0.045,0.951 -0.11,1.409c3.499,-0.172 6.527,-0.034 8.204,0.102c-0.002,0.337 -0.033,0.666 -0.051,0.999c-1.671,-0.138 -4.775,-0.28 -8.359,-0.089c-0.089,0.336 -0.197,0.663 -0.325,0.98c3.546,0.046 6.665,0.389 8.548,0.689c-0.043,0.332 -0.093,0.661 -0.151,0.987c-1.912,-0.306 -5.171,-0.664 -8.879,-0.682c-1.665,2.878 -5.22,4.755 -10.777,4.974v0.031c2.6,0 5,3.9 5,6.6v5.4c0,0.823 0.498,1.53 1.209,1.836c9.161,-3.032 15.791,-11.672 15.791,-21.836c0,-12.682 -10.317,-23 -23,-23c-12.683,0 -23,10.318 -23,23c0,10.164 6.63,18.804 15.791,21.836z"></path></g></g>
                                {/* GitHub SVG END */}
                            </svg>
                        </span>
                    </a>
                </div>
                <div className="hover-text">
                    <a onClick={handleOutboundListener} href="mailto:gustavosypr@gmail.com" target="_blank" className="social-link" aria-labelledby="Mailto logo">
                        <span className="tooltip-text"><img src={tooltipIcon} alt="Tooltip Icon" className="tooltip-icon" />Send me a message!</span>
                        <span id="img">
                            {/* Mailto SVG */}
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256" className="social-logo-icon" alt="Mailto logo">
                                <g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: "normal" }}><g transform="scale(5.12,5.12)"><path d="M14,4c-5.51133,0 -10,4.48867 -10,10v22c0,5.51133 4.48867,10 10,10h22c5.51133,0 10,-4.48867 10,-10v-22c0,-5.51133 -4.48867,-10 -10,-10zM14,6h22c4.43067,0 8,3.56933 8,8v22c0,4.43067 -3.56933,8 -8,8h-22c-4.43067,0 -8,-3.56933 -8,-8v-22c0,-4.43067 3.56933,-8 8,-8zM13,15c-1.64497,0 -3,1.35503 -3,3v14c0,1.64497 1.35503,3 3,3h24c1.64497,0 3,-1.35503 3,-3v-14c0,-1.64497 -1.35503,-3 -3,-3zM13.41406,17h23.16992l-8.90625,8.89258c-1.49279,1.49041 -3.8809,1.49024 -5.37305,-0.00195zM38,18.41211v13.17578l-6.59766,-6.58789zM12,18.41406l6.58594,6.58594l-6.58594,6.58594zM29.98828,26.41211l6.59766,6.58789h-23.17188l6.58594,-6.58594l0.89063,0.89063c2.25585,2.25585 5.94201,2.25751 8.19922,0.00391z"></path></g></g>
                            </svg>
                            {/* Mailto SVG END */}
                        </span>
                    </a>
                </div>
            </div>
        </section>
    )
};
