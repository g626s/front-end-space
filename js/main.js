// navListener declaration
const navigationListener = () => {
    const navLinks = document.querySelectorAll('li.nav-item.mx-4 > a'); // navigation section HTML Collection list
    const projectLists = document.querySelectorAll("#tools-list > div > a") // active project list section HTML Collection list

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

        // Navigate after event pushing
        window.location.href = e.currentTarget.href;
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

// initializedEventListener declaration
const initializedEventListener = () => {
    // Engagement button and time display elements
    const button = document.querySelector('#engagement-button');
    const monoHours = document.querySelector('#mono-hours');
    const monoMinutes = document.querySelector('#mono-minutes');

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
        let userEngagementText = document.createElement('p');
        userEngagementText.id = 'notice';
        userEngagementText.innerHTML = `Hey there, thanks for playing! For extra brownie points, you're also located in <strong class="strong bob-on-hover">${city}</strong> and your region is in <strong class="strong bob-on-hover">${region}</strong>`;
        document.body.appendChild(userEngagementText);

        // DOM manipulation to create and append a reset button
        let resetButton = document.createElement('button');
        resetButton.id = 'reset';
        resetButton.className = "hvr-sweep-to-right-reset";
        resetButton.innerHTML = 'Reset';
        document.body.appendChild(resetButton);

        // Add event listener for reset button
        resetButton.addEventListener('click', () => {
            monoHours.innerHTML = '00';
            monoMinutes.innerHTML = '00';

            userEngagementText.remove();
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
};

// Reinitialize event listeners on navigation change
window.addEventListener('popstate', initializedEventListener); // or another event suitable for your navigation logic
