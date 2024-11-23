import { gSLVisitorsID as idFunc } from './ck.js';

document.addEventListener("DOMContentLoaded", () => {
    window.dataLayer = window.dataLayer || [];

    window.dataLayer.push({
        'event': 'dataLayer-initialized',
        'current_url': navigation.currentEntry ? navigation.currentEntry.url : window.location.href,
        'charset': document.characterSet,
        'user_info': {
            'visitor_id': idFunc(),
            'language': navigator.language,
            'user_agent': navigator.userAgent,
            'mobile_user': navigator.userAgentData.mobile || 'not available',
            'platform': navigator.userAgentData.platform || 'not available',
            'browser': navigator.userAgentData.brands || 'not available'
        }
    });

    // Ensure initializedEventListener is called after the DOMContentLoaded
    initializedEventListener();
});
