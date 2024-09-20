document.addEventListener("DOMContentLoaded", () => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'event': 'dataLayer-initialized',
        'current_url': navigation.currentEntry.url,
        'charset': document.characterSet,
        'user_info': {
            'language': navigator.language,
            'user_agent': navigator.userAgent,
            'user_agent_data': navigator.userAgentData
        }
    });
    initializedEventListener();
});