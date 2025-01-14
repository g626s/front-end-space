import HeaderNavigation from "./components/HeaderNavigation";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router";
import About from "./components/About";
import Lab from "./components/Labs";
import OtherTools from "./components/Other-Tools/OtherTools";
import Contact from "./components/Contact";
import { v4 as uuidv4 } from 'https://cdn.jsdelivr.net/npm/uuid@9.0.0/dist/esm-browser/index.js';
import MonoClock from "./components/Mono-Clock/MonoClock";
import URLParser from "./components/URL-Parser/URLParser";
const gSLVisitors = 'gslabs_visitor'; // Session storage key
// Function to get or create the UUID for this session
const getOrCreateUUID = () => {
  // Check if UUID exists in session storage
  let uuid = sessionStorage.getItem(gSLVisitors);
  // If no UUID exists, generate and store a new one
  if (!uuid) {
    uuid = uuidv4();
    sessionStorage.setItem(gSLVisitors, uuid);
  }
  return uuid;
};
// Get the UUID for the session
let myuuid = getOrCreateUUID();
console.log(`uuid is ${myuuid}`);
const gSLVisitorsID = () => {
  return sessionStorage.getItem(gSLVisitors);
}
document.addEventListener("DOMContentLoaded", () => {
  window.dataLayer = window.dataLayer || [];

  window.dataLayer.push({
    'event': 'dataLayer-initialized',
    'current_url': navigation.currentEntry ? navigation.currentEntry.url : window.location.href,
    'charset': document.characterSet,
    'user_info': {
      'visitor_id': gSLVisitorsID(),
      'language': navigator.language,
      'user_agent': navigator.userAgent,
      'mobile_user': navigator.userAgentData.mobile || 'not available',
      'platform': navigator.userAgentData.platform || 'not available',
      'browser': navigator.userAgentData.brands || 'not available'
    }
  });
});
function App() {
  return (
    <>
      <HeaderNavigation />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/other-tools" element={<OtherTools />} />
        <Route path="/other-tools/mono-clock" element={<MonoClock />} />
        <Route path="/other-tools/url-parser" element={<URLParser />} />
        <Route path="/lab" element={<Lab />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Sidebar />
      <Footer />
    </>
  )
};

export default App
