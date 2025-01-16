import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './OtherTools.module.css';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Outlet } from 'react-router-dom';

export default function OtherTools() {
    const navigate = useNavigate();
    const handleInternalLinkClick = (e, path, section) => {
        e.preventDefault(); // Prevent default link behavior

        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            'event': 'internal_link_click',
            'url': path,
            'section': section
        });

        navigate(path);
    };

    const monoClockCard = (
        <React.Fragment>
            <CardContent>
                <Typography variant="h5" component="div">
                    Mono Clock
                </Typography>
                <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>Last updated: Jan 6, 2025</Typography>
                <Typography id="strong-highlight-notice" sx={{ textAlign: 'justify', mb: 1.5 }} variant="body2">
                    Displays an interactive digital clock and allows user interaction to show their current
                    time. This retrieves the current time (hours and minutes) and updates the clock display in
                    the DOM to reflect the local time. In addition, this pushes event details (like time, region, and city) to the dataLayer for tracking.
                </Typography>
            </CardContent>
            <CardActions>
                <Button
                    size="small"
                    onClick={(e) => handleInternalLinkClick(e, '/mono-clock', 'other_tools_mono_clock')}
                >
                    Learn More
                </Button>
            </CardActions>
        </React.Fragment>
    );

    const urlParserCard = (
        <React.Fragment>
            <CardContent>
                <Typography variant="h5" component="div">
                    URL Parser
                </Typography>
                <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>Last updated: Jan 6, 2025</Typography>
                <Typography id="strong-highlight-notice" sx={{ textAlign: 'justify', mb: 1.5 }} variant="body2">
                    The URL Parser Tool is a web-based application designed to analyze and extract components
                    from user-provided URLs. It enables users to enter a URL and receive detailed information
                    about its structure, including protocols, hosts, paths, and query parameters. The tool
                    aims to simplify the understanding of URL components and enhance users&apos; ability to debug and manage URLs effectively.
                </Typography>
            </CardContent>
            <CardActions>
                <Button
                    size="small"
                    onClick={(e) => handleInternalLinkClick(e, '/url-parser', 'other_tools_url_parser')}
                >
                    Learn More
                </Button>
            </CardActions>
        </React.Fragment>
    );

    return (
        <main>
            <section id="current-status" aria-labelledby="notice-for-page" className="notice container">
                <h3 id="notice-for-page">Other tools to check out for this front-end project space!</h3>
            </section>
            <section id={styles["tools-list"]} aria-labelledby="list-for-other-tools" className="container">
                <Box sx={{ minWidth: 250 }}>
                    <Card variant="outlined">{monoClockCard}</Card>
                </Box>
                <Box sx={{ minWidth: 250 }}>
                    <Card variant="outlined">{urlParserCard}</Card>
                </Box>
            </section>
            <Outlet />
        </main>
    );
}
