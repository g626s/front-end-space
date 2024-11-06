const cookieConsentListener = () => {
    const cookieBannerSection = document.querySelector("#cookie-banner");
    const cookieBanner = document.querySelector("#cookie-banner-notice");
    const selectBtns = document.querySelectorAll('button[id$="__accept"], button[id$="__deny"]');
    let managePreferencesBtn = document.querySelector("#gstudiolabs-cm-window-dialog-content-buttons__manage-preferences");

    let consentState;
    let isAccept;
    let cookieActiveGroups = new Set(['GSLC1']); // Start with GSLC1 as a static value

    // Iterating over accept or deny buttons
    selectBtns.forEach(item => {
        item.addEventListener('click', () => {
            isAccept = item.id.includes('accept');
            window.dataLayer = window.dataLayer || [];
            consentState = {
                'event': 'consent_update',
                'consent': isAccept ? 'accepted' : 'denied',
                'state': {
                    'analytics_storage': isAccept ? 'granted' : 'denied',
                    'ad_storage': isAccept ? 'granted' : 'denied',
                    'ad_user_data': isAccept ? 'granted' : 'denied',
                    'ad_personalization': isAccept ? 'granted' : 'denied',
                    'personalization_storage': isAccept ? 'granted' : 'denied',
                    'security_storage': 'granted',
                    'functionality_storage': 'granted'
                }
            };
            cookieActiveGroups = new Set(['GSLC1']); // Reset and include GSLC1 by default
            if (isAccept) {
                cookieActiveGroups.add('GSLC3');
                cookieActiveGroups.add('GSLC4');
                cookieActiveGroups.add('GSLC5');
            }
            window.dataLayer.push(consentState, { 'cookie_active_groups': Array.from(cookieActiveGroups).join(',') });

            sessionStorage.setItem('consentState', JSON.stringify(consentState));
            sessionStorage.setItem('cookieActiveGroups', JSON.stringify(Array.from(cookieActiveGroups)));
        });
    });

    managePreferencesBtn.addEventListener('click', () => {
        if (document.querySelector('#gstudiolabs-cm-window-dialog-content-buttons__manage-preferences-display')) return;

        window.dataLayer.push({
            'event': 'manage_preferences'
        });

        let managePreferencesDiv = document.createElement('div');
        managePreferencesDiv.id = 'gstudiolabs-cm-window-dialog-content-buttons__manage-preferences-display';
        managePreferencesDiv.innerHTML = `
        <span class="gstudiolabs-cm-window-dialog-content-preferences-display__header">
            <p role="heading" aria-level="1" id="storage-preferences-label" class="gstudiolabs-cm-info-dialog-header__header gstudiolabs-cm-header">Storage Preferences</p>
        </span>
        <span class="gstudiolabs-cm-window-dialog-content-preferences-display__header">
            <input type="image" src="img/exit.svg" name="exit" class="gstudiolabls-cm-info-dialog-header__close gstudiolabs-cm-close" id="manage-preferences-form-exit" />
        </span>
            <div class="gstudiolabs-cm-info-views">
                <p class="gstudiolabs-cm-view__description">
                    When you visit websites, they may store or retrieve data about you using cookies and similar technologies ("cookies"). Cookies may be necessary for the basic functionality of the website as well as other purposes. You have the option of disabling certain types of cookies, though doing so may impact your experience on the website.
                </p>
                <ul class="gstudiolabs-cm-list" role="list">
                    ${['Essential', 'Targeting', 'Personalization', 'Analytics'].map((label, index) => `
                        <li>
                            <div class="form-check form-switch">
                                <input class="form-check-input" type="checkbox" id="flexSwitchCheck${label}" ${index === 0 ? 'disabled' : ''}>
                                <label class="form-check-label">${label}</label>
                            </div>
                        </li>
                    `).join('')}
                </ul>
                <button id="gstudiolabs-cm-window-dialog-content-buttons__accept" class="btn btn-outline-info">Submit</button>
            </div>
        `;
        cookieBannerSection.insertBefore(managePreferencesDiv, cookieBannerSection.childNodes[1]);

        document.querySelector("#manage-preferences-form-exit").addEventListener('click', () => {
            managePreferencesDiv.remove();
        });

        const targeting = document.querySelector('#flexSwitchCheckTargeting');
        const personalization = document.querySelector('#flexSwitchCheckPersonalization');
        const analytics = document.querySelector('#flexSwitchCheckAnalytics');

        const acceptButton = document.querySelector("#gstudiolabs-cm-window-dialog-content-buttons__accept");


        acceptButton.addEventListener('click', () => {
            window.dataLayer = window.dataLayer || [];
            cookieActiveGroups = new Set(['GSLC1']); // Always include GSLC1

            if (targeting.checked) {
                cookieActiveGroups.add('GSLC5');
                window.dataLayer.push({
                    'event': 'consent_update',
                    'consent': 'accepted',
                    'state': {
                        'analytics_storage': 'denied',
                        'ad_storage': 'granted',
                        'ad_user_data': 'granted',
                        'ad_personalization': 'granted',
                        'personalization_storage': 'denied',
                        'security_storage': 'granted',
                        'functionality_storage': 'granted'
                    }
                });
            }

            if (personalization.checked) {
                cookieActiveGroups.add('GSLC4');
                window.dataLayer.push({
                    'event': 'consent_update',
                    'consent': 'accepted',
                    'state': {
                        'analytics_storage': 'denied',
                        'ad_storage': 'denied',
                        'ad_user_data': 'denied',
                        'ad_personalization': 'denied',
                        'personalization_storage': 'granted',
                        'security_storage': 'granted',
                        'functionality_storage': 'granted'
                    }
                });
            }

            if (analytics.checked) {
                cookieActiveGroups.add('GSLC3');
                window.dataLayer.push({
                    'event': 'consent_update',
                    'consent': 'accepted',
                    'state': {
                        'analytics_storage': 'granted',
                        'ad_storage': 'granted',
                        'ad_user_data': 'granted',
                        'ad_personalization': 'granted',
                        'personalization_storage': 'denied',
                        'security_storage': 'granted',
                        'functionality_storage': 'granted'
                    }
                });
            }

            window.dataLayer.push({
                'cookie_active_groups': Array.from(cookieActiveGroups).join(',')
            });

            sessionStorage.setItem('cookieActiveGroups', JSON.stringify(Array.from(cookieActiveGroups)));

            managePreferencesDiv.remove();
        });
    });
};

cookieConsentListener();