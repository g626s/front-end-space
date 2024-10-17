import { v4 as uuidv4 } from 'https://cdn.jsdelivr.net/npm/uuid@9.0.0/dist/esm-browser/index.js';

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

// Exporting function to retrieve UUID from session storage
export function gSLVisitorsID() {
    return sessionStorage.getItem(gSLVisitors);
}
