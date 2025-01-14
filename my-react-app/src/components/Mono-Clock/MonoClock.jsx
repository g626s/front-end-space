import styles from "./MonoClock.module.css";
import { useState, useEffect } from "react";

export default function MonoClock() {
    const [timeHours, setTimeHours] = useState('00');
    const [timeMin, setTimeMin] = useState('00');
    const [timePeriod, setTimePeriod] = useState('');
    const [replaceElem, setReplaceElem] = useState(false);
    const [currentHours, setCurrentHours] = useState('00');
    const [userInteracted, setUserInteracted] = useState(false);

    const geoInfo = Intl.DateTimeFormat().resolvedOptions().timeZone.split('/');
    const region = geoInfo[0] || undefined;
    const city = geoInfo[1]?.replace('_', ' ') || undefined;

    const monoClockUserListener = () => {
        const now = new Date();
        let hours = now.getHours();
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const isPM = hours >= 12;

        if (hours > 12) hours -= 12;
        if (hours === 0) hours = 12;

        setTimeHours(hours.toString().padStart(2, '0'));
        setTimeMin(minutes);
        setTimePeriod(isPM ? ' PM' : ' AM');
        setCurrentHours(hours.toString().padStart(2, '0'));
        setReplaceElem(true);
        setUserInteracted(true);
    };

    useEffect(() => {
        if (userInteracted) {
            window.dataLayer.push({
                event: 'user_click',
                hour_timestamp: currentHours,
                minutes_timestamp: timeMin,
                region: region,
                city: city
            });
        }
    }, [currentHours, timeMin, city, region, userInteracted]);

    const monoClockReset = () => {
        setTimeHours('00');
        setTimeMin('00');
        setTimePeriod('');
        setCurrentHours('00');
        setReplaceElem(false);
        setUserInteracted(false);
    };

    let userInteractivityElem = (
        <>
            <p className={styles.interactivity_text}>What is my current time?</p>
            <button onClick={monoClockUserListener} id={styles["engagement_button"]} aria-labelledby="button-engagement-current-time">Enter</button>
        </>
    );

    let userInteractivityGeoInfoElem = (
        <p className={styles.interactivity_text}>
            For extra brownie points, you are located in <span className={styles.user_geo_info} id="strong-highlight-notice">{city}</span>, 
            and your region is in <span className={styles.user_geo_info} id="strong-highlight-notice">{region}</span>.
        </p>
    );
    if (!city || !region) userInteractivityGeoInfoElem = null;

    let userInteractivityResetElem = (
        <>
            <p className={styles.interactivity_text}>Hey there, thanks for playing! Click reset and let us know what you think!</p>
            {userInteractivityGeoInfoElem}
            <button onClick={monoClockReset} id={styles["engagement_button"]} aria-labelledby="button-engagement-current-time">Reset</button>
        </>
    );

    return (
        <main>
            <section id="content" aria-labelledby="content-section" className="container">
                <section id={styles["clock"]} aria-labelledby="clock-heading" className={styles.blink_me}>
                    <span id="mono-hours">{timeHours}</span>
                    <span>:</span>
                    <span id="mono-minutes">{timeMin}</span>
                    <span id="mono-period">{timePeriod}</span>
                </section>
                <section id="interactivity" aria-labelledby="interaction-heading">
                    {replaceElem ? userInteractivityResetElem : userInteractivityElem}
                </section>
            </section>
        </main>
    );
}
