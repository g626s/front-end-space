import styles from "./URLParser.module.css";
import { useState } from "react";

export default function URLParser() {
    const [urlValue, setUrlValue] = useState("");
    const [addUrlElem, setAddUrlElem] = useState(false);
    const [replaceElem, setReplaceElem] = useState(false);
    const [urlSubmission, setUrlSubmission] = useState(null);
    const [queryParams, setQueryParams] = useState([]);

    const handleChange = e => {
        setUrlValue(e.target.value);
    };

    const urlSubmit = e => {
        e.preventDefault();
        setAddUrlElem(true);
        setReplaceElem(true);

        if (window.dataLayer) {
            window.dataLayer.push({ event: 'url_parser_submission_click' });
        }

        try {
            const parsedUrl = new URL(urlValue);
            const paramsArray = Array.from(parsedUrl.searchParams.entries());
            setUrlSubmission(parsedUrl);
            setQueryParams(paramsArray);
        } catch (error) {
            console.error("Invalid URL:", error);
            setUrlSubmission(null);
            setQueryParams([]);
        }
    };

    const urlReset = () => {
        setUrlValue("");
        setAddUrlElem(false);
        setReplaceElem(false);
        setUrlSubmission(null);
        setQueryParams([]);
    };

    let urlButtonElem = <button onClick={urlSubmit} type="submit" id={styles["engagement_button"]}>Submit</button>;
    let ResetUrlButtonElem = <button onClick={urlReset} id={styles["engagement_button"]}>Reset</button>;

    let urlInfoElem = urlSubmission && (
        <div className={styles.info_group}>
            <h5>URL Components</h5>
            <hr />
            <table className="table table-hover table-dark">
                <tbody className={styles.table_dark} id={styles["url_components"]}>
                    <tr><th>Protocol:</th><td>{urlSubmission.protocol}</td></tr>
                    <tr><th>Host:</th><td>{urlSubmission.host}</td></tr>
                    <tr><th>Hostname:</th><td>{urlSubmission.hostname}</td></tr>
                    <tr><th>Href:</th><td>{urlSubmission.href}</td></tr>
                    <tr><th>Origin:</th><td>{urlSubmission.origin}</td></tr>
                    <tr><th>Pathname:</th><td>{urlSubmission.pathname}</td></tr>
                    <tr><th>Search:</th><td>{urlSubmission.search}</td></tr>
                </tbody>
            </table>
            <hr />
            <h5>Query String</h5>
            <hr />
            <table className="table table-hover table-dark">
                <tbody className={styles.table_dark} id={styles["url_querystring"]}>
                    {queryParams.length > 0 ? queryParams.map(([key, value]) => (
                        <tr key={key}><th>{key}:</th><td>{value}</td></tr>
                    )) : <tr><td>No query parameters</td></tr>}
                </tbody>
            </table>
        </div >
    );

    return (
        <main>
            <section className="container">
                <form onSubmit={urlSubmit}>
                    <div className="form-group">
                        <h3 id="notice-for-page">
                            <label htmlFor="url-input">Copy-paste your URL here</label>
                        </h3>
                        <input value={urlValue} onChange={handleChange} type="url" className="form-control" placeholder="https://example.com/" pattern="https://.*" required />
                        <h3 id="notice-for-page">Enter an https:// URL</h3>
                    </div>
                    {replaceElem ? ResetUrlButtonElem : urlButtonElem}
                </form>
            </section>
            <section className="container">
                {addUrlElem && urlInfoElem}
            </section>
        </main>
    );
}
