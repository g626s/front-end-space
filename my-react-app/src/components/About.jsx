export default function About() {
    return (
        <main>
            <section id="about" aria-labelledby="about-section" className="container">
                <h3 id="notice-for-page">About</h3>
            </section>
            <section id="current-status" aria-labelledby="notice-for-page" className="notice container">
                <p id="reg-text" className="mx-auto">Hi, I&apos;m Gus. This site is currently serving as
                    my front-end
                    workshop/space
                    for everything related to documenting my roadmap for front-end. This might expand itself to evently being my current
                    portfolio,
                    whether it be for articles, tutorials, and reflections on mostly on subjects related to front-end web
                    development, data engineering (off-topic...), and anything analytics.</p>
                <p id="strong-highlight-notice" className="mx-auto">Note that any opinions expressed on this
                    site are strictly my own.
                </p>
                <hr className="hr mx-auto w-75"></hr>
                <p id="reg-text" className="mx-auto">The term &apos;Gestalt&apos; originates from
                    psychology and refers to a concept where the whole is perceived as more
                    than the sum of its parts. Whether it be in the context of data, front-end development, data
                    engineering, and web
                    analytics, the idea of Gestalt can be applied in several ways:</p>
                <dl id="reg-text" className="mx-auto">
                    <dt>Front-End Development</dt>
                    <dd>In front-end development, Gestalt, in this context, refers to how users perceive the overall design,
                        functionality, and
                        user experience of a website or application. Rather than focusing on individual UI components, the
                        goal is
                        to create a cohesive and intuitive experience where the elements work together to form a complete
                        and
                        harmonious interface. This aligns with Gestalt principles in design, such as proximity, similarity,
                        and
                        closure, which help in creating a visual hierarchy and user-friendly interfaces.</dd>
                    <dt>Web Analytics</dt>
                    <dd>In web analytics, the Gestalt concept applies to how individual metrics, such as page views,
                        conversions,
                        user behaviors, and traffic sources, combine to form a broader understanding of user activity and
                        website
                        performance. Analysts focus on how all these data points interact to create insights about user
                        journeys,
                        rather than simply examining metrics in isolation.</dd>
                    <dt>So why &apos;Gestalt Projects&apos;?</dt>
                    <dd>The name &apos;Gestalt Projects&apos; was derived on always striving for a holistic, integrated approach to
                        solving problems. To focus on the complete picture, whether in design, data, development,
                        or strategy. The total outcome is greater than the sum
                        of its individual parts. Laslty, to evoke a sense of creative and analytical balance.</dd>
                </dl>
            </section>
        </main>
    );
}