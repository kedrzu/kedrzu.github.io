import * as React from 'react';

import PerfectGymLogo from '../assets/perfectgym-logo.svg';
import HealthlabsLogo from '../assets/healthlabs-logo.svg';
import MailIcon from '../assets/icons/mail.svg';

import { CompanyHeader } from './CompanyHeader';
import styles from './ExperienceSection.module.scss';
import { Section } from './Section';

export class ExperienceSection extends React.Component {
    public render() {
        return (
            <Section className={styles.section}>
                <h2 className={styles.section_title}>Experience</h2>

                <div className={styles.container}>
                    <div className={styles.block}>
                        <CompanyHeader
                            name="HealthLabs"
                            logo={HealthlabsLogo}
                            url="healthlabs.pl"
                            github="https://github.com/4healthlabs"
                            linkedin="https://www.linkedin.com/company/health-labs-care/"
                        />
                        <div className={styles.position}>
                            <h3 className={styles.position_title}>Front-end lead developer</h3>
                            <h4 className={styles.position_company}>HealthLabs</h4>
                            <p className={styles.position_time}>April 2020 — now</p>

                            <ul className={styles.position_bullets}>
                                <li>
                                    Lead front-end developer for popular Polish health supplements
                                    brand.
                                </li>
                                <li>
                                    Modern VueJS progressive e-commerce application with headless
                                    Magento as a backend.
                                    <br /> Written from scratch, fully in TypeScript with ESLint.
                                </li>
                                <li>
                                    All content is statically generated and served through CDN. Used
                                    NuxtJS for SSR / isomorphic rendering.
                                </li>
                                <li>
                                    Very performant, responsive & highly optimized for SEO. Applied
                                    multiple advanced techniques and optimizations: critical CSS
                                    inlining, code splitting, preloading, lazy hydration.
                                </li>
                            </ul>
                        </div>

                        <div className={styles.position_techs}>
                            <span className={styles.position_techs_item}>VueJS</span>
                            <span className={styles.position_techs_item}>NuxtJS</span>
                            <span className={styles.position_techs_item}>TypeScript</span>
                            <span className={styles.position_techs_item}>JavaScript</span>
                            <span className={styles.position_techs_item}>Webpack</span>
                            <span className={styles.position_techs_item}>SCSS</span>
                            <span className={styles.position_techs_item}>CSS modules</span>
                            <span className={styles.position_techs_item}>GraphQL</span>
                            <span className={styles.position_techs_item}>Magento 2</span>
                            <span className={styles.position_techs_item}>Prismic CMS</span>
                            <span className={styles.position_techs_item}>AWS Cloudfront</span>
                            <span className={styles.position_techs_item}>AWS S3</span>
                            <span className={styles.position_techs_item}>AWS Lambda</span>
                            <span className={styles.position_techs_item}>AWS LambdaEdge</span>
                            <span className={styles.position_techs_item}>GitHub Actions</span>
                            <span className={styles.position_techs_item}>Sentry.io</span>
                        </div>
                    </div>

                    <div className={styles.block}>
                        <CompanyHeader
                            name="PerfectGym"
                            logo={PerfectGymLogo}
                            url="www.perfectgym.com"
                            github="https://github.com/PerfectGym"
                            linkedin="https://www.linkedin.com/company/perfect-gym-solutions-s-a-/"
                        />
                        <div className={styles.position}>
                            <h3 className={styles.position_title}>
                                Full-stack developer (later team leader & architect)
                            </h3>
                            <h4 className={styles.position_company}>PerfectGym Solutions</h4>
                            <p className={styles.position_time}>October 2015 — April 2020</p>

                            <ul className={styles.position_bullets}>
                                <li>
                                    Working in an international team (all continents) spread across
                                    multiple timezones (up to 10h delay).
                                </li>
                                <li>
                                    Created an internal component library designed to allow backend
                                    developers to easily create views. <br />
                                    This allowed for 2 or 3 developers to handle the whole company
                                    frontend for several years. <br />
                                    Still powering most of company applications.
                                </li>
                                <li>
                                    Architect of most of the applications currently in use by the
                                    company, including management app, client portal, internal
                                    backoffice app, and public API. All of them was rewritten from
                                    old ones.
                                </li>
                                <li>Company's lead front-end developer & architect.</li>
                                <li>
                                    Driven the transition to newer technologies & approaches, like
                                    using VueJS for the frontend, or designing CQS-based API.
                                </li>
                                <li>
                                    Architect & lead developer of multiple new businness modules,
                                    mostly regarding training & facility booking.
                                </li>
                                <li>
                                    Led a long and difficult migration of the whole system from
                                    single timezone to multiple timezone support.
                                </li>
                                <li>
                                    Deep involvement in tech evangelism, programming practices,
                                    release management & team organization.
                                    <br />
                                    Mentored several programmers.
                                </li>
                            </ul>
                        </div>

                        <div className={styles.position_techs}>
                            <span className={styles.position_techs_item}>C#</span>
                            <span className={styles.position_techs_item}>ASP.NET MVC</span>
                            <span className={styles.position_techs_item}>ASP.NET WebAPI</span>
                            <span className={styles.position_techs_item}>JavaScript</span>
                            <span className={styles.position_techs_item}>TypeScript</span>
                            <span className={styles.position_techs_item}>VueJS</span>
                            <span className={styles.position_techs_item}>OData</span>
                            <span className={styles.position_techs_item}>AngularJS</span>
                            <span className={styles.position_techs_item}>Webpack</span>
                            <span className={styles.position_techs_item}>SCSS</span>
                            <span className={styles.position_techs_item}>LESS</span>
                            <span className={styles.position_techs_item}>SQL Server</span>
                            <span className={styles.position_techs_item}>TeamCity</span>
                            <span className={styles.position_techs_item}>Kibana</span>
                            <span className={styles.position_techs_item}>NewRelic</span>
                            <span className={styles.position_techs_item}>JIRA</span>
                        </div>
                    </div>

                    <div className={styles.block}>
                        <CompanyHeader name="Kapella Sp. z o.o." />
                        <div className={styles.position}>
                            <h3 className={styles.position_title}>.NET developer</h3>
                            <h4 className={styles.position_company}>Kapella Sp. z o.o.</h4>
                            <p className={styles.position_time}>October 2014 — September 2015</p>

                            <ul className={styles.position_bullets}>
                                <li>Developing an industrial light management system.</li>
                            </ul>
                        </div>

                        <div className={styles.position_techs}>
                            <span className={styles.position_techs_item}>C#</span>
                            <span className={styles.position_techs_item}>WPF</span>
                            <span className={styles.position_techs_item}>ASP.NET</span>
                            <span className={styles.position_techs_item}>JavaScript</span>
                            <span className={styles.position_techs_item}>AngularJS</span>
                        </div>
                    </div>

                    <div className={styles.block}>
                        <CompanyHeader name="Eurotronic" url="eurotronic.net.pl" />
                        <div className={styles.position}>
                            <h3 className={styles.position_title}>.NET developer</h3>
                            <h4 className={styles.position_company}>Eurotronic</h4>
                            <p className={styles.position_time}>October 2013 — September 2014</p>

                            <ul className={styles.position_bullets}>
                                <li>Working on proprietary building management system.</li>
                                <li>Building application for media usage prediction.</li>
                            </ul>

                            <div className={styles.position_techs}>
                                <span className={styles.position_techs_item}>C#</span>
                                <span className={styles.position_techs_item}>WPF</span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.block}>
                        <CompanyHeader name="Emerson Process Management" url="www.emerson.com" />
                        <div className={styles.position}>
                            <h3 className={styles.position_title}>.NET developer intern</h3>
                            <h4 className={styles.position_company}>Emerson Process Management</h4>
                            <p className={styles.position_time}>July 2013 — September 2013</p>
                            <ul className={styles.position_bullets}>
                                <li>Building web-based reporting system for power plants.</li>
                            </ul>
                        </div>

                        <div className={styles.position_techs}>
                            <span className={styles.position_techs_item}>C#</span>
                            <span className={styles.position_techs_item}>ASP.NET MVC</span>
                        </div>
                    </div>
                </div>

                <h2 className={styles.section_title}>Education</h2>

                <div className={styles.education}>
                    <h2 className={styles.education_header}>Warsaw University of Technology</h2>

                    <h3 className={styles.education_degree}>
                        Master's degree in automation - 2014
                    </h3>

                    <h3 className={styles.education_degree}>
                        Bachelor's degree in automation - 2013
                    </h3>
                </div>

                <a href="mailto:m.kedrzynski@gmail.com" className={styles.contact}>
                    <img src={MailIcon} />
                    m.kedrzynski@gmail.com
                </a>
            </Section>
        );
    }
}
