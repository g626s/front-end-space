document.addEventListener("DOMContentLoaded", () => {
    window.dataLayer = window.dataLayer || [];
    
    window.dataLayer.push({
        'event': 'dataLayer-initialized',
        'current_url': navigation.currentEntry ? navigation.currentEntry.url : window.location.href,
        'charset': document.characterSet,
        'user_info': {
            'language': navigator.language,
            'user_agent': navigator.userAgent,
            'user_agent_data': navigator.userAgentData || 'not available'
        }
    });
    
    // Ensure initializedEventListener is called after the DOMContentLoaded
    initializedEventListener();
});
