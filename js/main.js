// navListener declaration
const navigationListener = () => {
    const navLinks = document.querySelectorAll('li.nav-item.mx-4 > a'); // navigation section HTML Collection list
    const projectLists = document.querySelectorAll('#tools-list > div > a'); // active project list section HTML Collection list

    // Function to handle the navigation click event
    const handleNavClick = (e) => {
        e.preventDefault(); // Prevent default navigation
        e.stopImmediatePropagation(); // Stop other listeners for the same event

        // Push event to dataLayer
        window.dataLayer.push({
            'event': 'nav_click', // name of the event 
            'url': e.target.href, // href logged for debugging
            'nav_section': e.target.innerHTML // grab the clicked link's text
        });

        // Navigate after event pushing
        window.location.href = e.target.href;
    };

    // Function to handle the internal click event for active project list
    const handleInternalLinkClick = (e) => {

        // Push event to dataLayer
        window.dataLayer.push({
            'event': 'internal_link_click',
            'url': e.currentTarget.href, // href logged for debugging. Using current target instead due to nesting
            'section': e.currentTarget.id
        });
    };
    // Loop through each link
    navLinks.forEach((link) => {
        // Remove any existing event listener to avoid duplicates
        link.removeEventListener('click', handleNavClick);

        // Attaching the event listener ensuring it only fires once
        link.addEventListener('click', handleNavClick, { once: true });
    });

    // Loop through each project link
    projectLists.forEach((link) => {
        // Remove any existing event listener to avoid duplicates
        link.removeEventListener('click', handleInternalLinkClick);

        // Attaching the event listener ensuring it only fires once
        link.addEventListener('click', handleInternalLinkClick, { once: true });
    });
};

// urlSubmission declaration
const urlSubmissionListener = () => {
    // Select the button, input, and div elements
    const btnUrlSubmission = document.querySelector("#engagement-button-url-parser");
    const urlInputElem = document.querySelector('#url-input');
    const divInfoPost = document.querySelector('#uri-information-post > div');
    const sectionInfo = document.querySelector("#uri-information-post");


    // Check if all required elements exist before proceeding
    if (!btnUrlSubmission || !urlInputElem || !divInfoPost || !sectionInfo) {
        console.error("One or more required elements not found in the DOM.");
        return; // Exit the function if any element is missing
    }

    // Function to handle the submission of the URL event
    function urlSubmit(e) {
        e.preventDefault(); // stop default behavior
        e.stopImmediatePropagation(); // Stop other listeners for the same event

        // Push event to dataLayer
        window.dataLayer.push({
            'event': 'url_parser_submission_click', // name of the event 
        });

        const urlValue = urlInputElem.value;
        try {
            const urlSubmission = new URL(urlValue);
            console.log(urlSubmission);

            // Helper function to generate table rows only if the value exists
            const generateTableRow = (label, value) => {
                if (value) {
                    return `
                        <tr>
                            <th scope="row">${label}:</th>
                            <td>${value}</td>
                        </tr>
                    `;
                }
                return ''; // Return empty string if the value is null/empty
            };

            // DOM manipulation to create and append 'URL Components' and 'Query String' table
            const urlComponentsSection = document.createElement('div');
            urlComponentsSection.className = 'info-group';
            urlComponentsSection.id = 'url-components-section'; // Assign an ID to identify later
            urlComponentsSection.innerHTML = `
                <h5 id="urls-explained">URL Components</h5>
                <hr class="line">
                <table class="table table-hover table-dark urls-explained-text dm-mono-light">
                    <tbody>
                        ${generateTableRow('Protocol', urlSubmission.protocol)}
                        ${generateTableRow('Host', urlSubmission.host)}
                        ${generateTableRow('Hostname', urlSubmission.hostname)}
                        ${generateTableRow('Href', urlSubmission.href)}
                        ${generateTableRow('Origin', urlSubmission.origin)}
                        ${generateTableRow('Pathname', urlSubmission.pathname)}
                        ${generateTableRow('Search', urlSubmission.search)}
                        ${generateTableRow('Hash', urlSubmission.hash)}
                    </tbody>
                </table>
                <hr class="line">
                <h5 id="urls-explained">Query String</h5>
                <hr class="line"></hr>
                <table class="table table-hover table-dark urls-explained-text dm-mono-light">
                    <tbody>
                        ${generateTableRow("'utm_source'", urlSubmission.searchParams.get('utm_source'))}
                        ${generateTableRow("'utm_medium'", urlSubmission.searchParams.get('utm_medium'))}
                        ${generateTableRow("'utm_campaign'", urlSubmission.searchParams.get('utm_campaign'))}
                        ${generateTableRow("'utm_term'", urlSubmission.searchParams.get('utm_term'))}
                        ${generateTableRow("'utm_content'", urlSubmission.searchParams.get('utm_content'))}
                    </tbody>
                </table>
            `;

            // Insert the URL components section before the existing div
            sectionInfo.insertBefore(urlComponentsSection, divInfoPost);

            // Change the submit button to a reset button
            btnUrlSubmission.textContent = 'Reset';
            btnUrlSubmission.removeEventListener('click', urlSubmit); // Remove the submit listener
            btnUrlSubmission.addEventListener('click', resetTool, { once: true }); // Add reset listener
        } catch (error) {
            console.error("Invalid URL:", error);
        }
    };

    // Function to reset the tool
    function resetTool(e) {
        e.preventDefault(); // stop default behavior
        e.stopImmediatePropagation();

        // Clear the input field
        urlInputElem.value = '';

        // Remove the URL Components section
        const urlComponentsSection = document.querySelector('#url-components-section');
        if (urlComponentsSection) {
            sectionInfo.removeChild(urlComponentsSection);
        }

        // Change the reset button back to a submit button
        btnUrlSubmission.textContent = 'Submit';
        btnUrlSubmission.removeEventListener('click', resetTool); // Remove reset listener
        btnUrlSubmission.addEventListener('click', urlSubmit, { once: true }); // Add submit listener back
    }

    // Initially add the submit event listener
    btnUrlSubmission.addEventListener('click', urlSubmit, { once: true });
};


// initializedEventListener declaration
const initializedEventListener = () => {
    // Engagement button, footer, time display elements
    const button = document.querySelector('#engagement-button');
    const monoHours = document.querySelector('#mono-hours');
    const monoMinutes = document.querySelector('#mono-minutes');
    const main = document.querySelector('main');

    // Geography info of user engagement
    const geoInfo = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const geoInfoArray = geoInfo.split('/');
    const region = geoInfoArray[0];
    const city = geoInfoArray[1].replace('_', ' ');

    // Function to handle the button click
    const handleButtonClick = () => {
        const currentDate = new Date();
        let currentHours = currentDate.getHours();
        let currentMinutes = currentDate.getMinutes();

        // Convert hours to 12-hour format
        let timePeriod = 'AM';
        if (currentHours >= 12) {
            timePeriod = 'PM';
            if (currentHours > 12) {
                currentHours -= 12;
            }
        } else if (currentHours === 0) {
            currentHours = 12;
        }

        // Pad hours and minutes with leading zeros if necessary
        let paddedHours = currentHours.toString().padStart(2, '0');
        let paddedMinutes = currentMinutes.toString().padStart(2, '0');

        // Display the current hours and minutes in the designated elements
        monoHours.innerHTML = paddedHours;
        monoMinutes.innerHTML = `${paddedMinutes} ${timePeriod}`;

        // DOM manipulation to create and append a message indicating user engagement
        let engagementSection = document.createElement('section');
        engagementSection.id = 'engagement-section';
        engagementSection.className = 'container';
        engagementSection.innerHTML = `
            <p class="dm-mono-regular interactivity-text">Hey there, thanks for playing! For extra brownie points, you're also located in <strong class="strong bob-on-hover">${city}</strong> and your region is in <strong class="strong bob-on-hover">${region}</strong></p>
            <button id="reset" class="hvr-sweep-to-right-reset">Reset</button>
        `;

        main.appendChild(engagementSection);

        // Add event listener for reset button
        let resetButton = document.querySelector('#reset');
        resetButton.addEventListener('click', () => {
            monoHours.innerHTML = '00';
            monoMinutes.innerHTML = '00';

            engagementSection.remove();
            resetButton.remove();

            // Reattach the event listener to the button
            button.addEventListener('click', handleButtonClick, { once: true });
            dataLayerPushed = false; // Allow dataLayer to be pushed again
        });

        if (!dataLayerPushed) {
            window.dataLayer.push({
                'event': 'user_click',
                'hour_timestamp': paddedHours,
                'minutes_timestamp': paddedMinutes,
                'region': region,
                'city': city
            });
            dataLayerPushed = true; // Prevent dataLayer from being pushed again
        }
    };

    let dataLayerPushed = false; // Initialize flag to track dataLayer push status

    // Add event listener for button
    if (button) {
        button.addEventListener('click', handleButtonClick, { once: true });
    }

    // Initialize navigation listener
    navigationListener();

    // Initialize url submission listener
    urlSubmissionListener();
};

// Reinitialize event listeners on navigation change
window.addEventListener('popstate', initializedEventListener); // or another event suitable for your navigation logic
