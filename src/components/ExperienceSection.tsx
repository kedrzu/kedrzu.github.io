import * as React from 'react';

import PerfectGymLogo from '../assets/perfectgym-logo.svg';
import HealthlabsLogo from '../assets/healthlabs-logo.svg';

import { ExperienceCompany } from './ExperienceCompany';
import styles from './ExperienceSection.module.scss';

export class ExperienceSection extends React.Component {
    public render() {
        return (
            <section className={styles.section}>
                <h2 className={styles.section_title}>Experience</h2>

                <div className={styles.container}>
                    <ExperienceCompany
                        name="HealthLabs"
                        logo={HealthlabsLogo}
                        url="healthlabs.pl"
                        github="https://github.com/4healthlabs"
                        linkedin="https://www.linkedin.com/company/health-labs-care/"
                    >
                        <h3 className={styles.title}>Front-end lead developer</h3>
                        <p>April 2020 — now</p>

                        <ul className={styles.bullets}>
                            <li>Front-end for popular Polish health supplements brand.</li>
                            <li>
                                Modern VueJS progressive application with headless Magento as a
                                backend.
                            </li>
                            <li>Used NuxtJS for SSR / isomorphic rendering.</li>
                            <li>Written fully in TypeScript with ESLint.</li>
                            <li>Very performant & responsive.</li>
                            <li>All content is statically generated and served through CDN.</li>
                            <li>
                                Used prismic.io headless CMS for fully customised contentful design.
                                <br />
                                Application is automatically rebuilt and deployed on any change.
                            </li>
                            <li>
                                Applied multiple advanced techniques and optimizations:
                                <br />
                                critical CSS inlining, code splitting, preloading, lazy hydration.
                            </li>
                            <li>Highly optimized for SEO.</li>
                        </ul>

                        <h4 className={styles.subtitle}>Techs & tools</h4>
                        <div className={styles.techs}>
                            <span className={styles.techs_item}>VueJS</span>
                            <span className={styles.techs_item}>NuxtJS</span>
                            <span className={styles.techs_item}>TypeScript</span>
                            <span className={styles.techs_item}>JavaScript</span>
                            <span className={styles.techs_item}>Webpack</span>
                            <span className={styles.techs_item}>SCSS</span>
                            <span className={styles.techs_item}>CSS modules</span>
                            <span className={styles.techs_item}>GraphQL</span>
                            <span className={styles.techs_item}>Magento 2</span>
                            <span className={styles.techs_item}>Prismic CMS</span>
                            <span className={styles.techs_item}>AWS Cloudfront</span>
                            <span className={styles.techs_item}>AWS S3</span>
                            <span className={styles.techs_item}>AWS Lambda</span>
                            <span className={styles.techs_item}>AWS LambdaEdge</span>
                            <span className={styles.techs_item}>GitHub Actions</span>
                            <span className={styles.techs_item}>Sentry.io</span>
                        </div>
                    </ExperienceCompany>

                    <ExperienceCompany
                        name="PerfectGym"
                        logo={PerfectGymLogo}
                        url="www.perfectgym.com"
                        github="https://github.com/PerfectGym"
                        linkedin="https://www.linkedin.com/company/perfect-gym-solutions-s-a-/"
                    >
                        <h3 className={styles.title}>
                            Full-stack developer, team leader & architect
                        </h3>
                        <p>October 2017 — April 2020</p>

                        <ul className={styles.bullets}>
                            <li>
                                Working in international team spread across multiple timezones.
                                <em>all contintents / up to 10h time difference</em>
                            </li>
                            <li>
                                Built several applications based on VueJS and ASP.NET.
                                <em>architecture / development / team leading</em>
                            </li>
                            <li>
                                Multiple new businness modules, mostly regarding training & facility
                                booking.
                                <em>tech analysis / architecture / development / team leading</em>
                            </li>
                            <li>
                                New Client Portal application - fully branded white-label solution
                                <em>architecture / development / team leading</em>
                            </li>
                            <li>
                                New version of public API based on ASP.NET WebAPI and OData
                                <em>architecture / development</em>
                            </li>
                            <li>
                                System-wide infrastructure and architectural reworkings, like
                                support for multiple time zones.
                                <em>architecture / development / team leading</em>
                            </li>
                            <li>
                                Deep involvement in tech evangelism, programming practices, release
                                management & team organization.
                            </li>
                            <li>
                                Committed to improve overall user experience and design consistency
                                of the system.
                            </li>
                        </ul>

                        <h3 className={styles.title}>Full-stack developer</h3>
                        <p>October 2015 — September 2017</p>

                        <ul className={styles.bullets}>
                            <li>
                                New backoffice & management applications
                                <em>architecture / development</em>
                            </li>
                            <li>
                                Internal component library based on AngularJS.
                                <em>architecture / development</em>
                            </li>
                            <li>
                                Automatic updater for Windows based apps.
                                <em>development</em>
                            </li>
                        </ul>

                        <h4 className={styles.subtitle}>Techs & tools</h4>
                        <div className={styles.techs}>
                            <span className={styles.techs_item}>C#</span>
                            <span className={styles.techs_item}>ASP.NET MVC</span>
                            <span className={styles.techs_item}>ASP.NET WebAPI</span>
                            <span className={styles.techs_item}>JavaScript</span>
                            <span className={styles.techs_item}>TypeScript</span>
                            <span className={styles.techs_item}>VueJS</span>
                            <span className={styles.techs_item}>OData</span>
                            <span className={styles.techs_item}>AngularJS</span>
                            <span className={styles.techs_item}>Webpack</span>
                            <span className={styles.techs_item}>SCSS</span>
                            <span className={styles.techs_item}>LESS</span>
                            <span className={styles.techs_item}>SQL Server</span>
                            <span className={styles.techs_item}>TeamCity</span>
                            <span className={styles.techs_item}>Kibana</span>
                            <span className={styles.techs_item}>NewRelic</span>
                            <span className={styles.techs_item}>JIRA</span>
                        </div>
                    </ExperienceCompany>

                    <ExperienceCompany name="Kapella Sp. z o.o.">
                        <h3 className={styles.title}>.NET developer</h3>
                        <p>October 2014 — September 2015</p>

                        <ul className={styles.bullets}>
                            <li>Developing an industrial light management system.</li>
                            <li>Backend built as standalone C# server.</li>
                            <li>Frontend built with WPF.</li>
                        </ul>

                        <h4 className={styles.subtitle}>Techs</h4>
                        <div className={styles.techs}>
                            <span className={styles.techs_item}>C#</span>
                            <span className={styles.techs_item}>WPF</span>
                            <span className={styles.techs_item}>ASP.NET</span>
                            <span className={styles.techs_item}>JavaScript</span>
                            <span className={styles.techs_item}>AngularJS</span>
                        </div>
                    </ExperienceCompany>

                    <ExperienceCompany name="Eurotronic Sp. z o.o.">
                        <h3 className={styles.title}>.NET developer</h3>
                        <p>October 2013 — September 2014</p>

                        <ul className={styles.bullets}>
                            <li>Working on proprietary building management system.</li>
                            <li>Building application for media usage prediction.</li>
                        </ul>

                        <h4 className={styles.subtitle}>Techs </h4>
                        <div className={styles.techs}>
                            <span className={styles.techs_item}>C#</span>
                            <span className={styles.techs_item}>WPF</span>
                        </div>
                    </ExperienceCompany>

                    <ExperienceCompany name="Emerson Process Management">
                        <h3 className={styles.title}>.NET developer intern</h3>
                        <p>July 2013 — September 2013</p>

                        <ul className={styles.bullets}>
                            <li>Building web-based reporting system for power plants.</li>
                        </ul>

                        <h4 className={styles.subtitle}>Techs </h4>
                        <div className={styles.techs}>
                            <span className={styles.techs_item}>C#</span>
                            <span className={styles.techs_item}>ASP.NET MVC</span>
                        </div>
                    </ExperienceCompany>
                </div>
            </section>
        );
    }
}
