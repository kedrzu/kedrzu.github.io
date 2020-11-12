import * as React from 'react';

import styles from './SkillSection.module.scss';
import { Skill } from './Skill';
import { Section } from './Section';
import { Profile } from './Profile';
import { skill } from './Skill.module.scss';

export const SkillSection: React.FunctionComponent = () => {
    return (
        <Section className={styles.section}>
            <Profile />
            <h2 className={styles.title}>Skills</h2>

            <div className={styles.grid}>
                <div className={styles.skillsOuter}>
                    <div className={styles.skillsInner}>
                        <h3 className={styles.skillsTitle}>Frontend</h3>

                        <Skill skill={4}>JavaScript (ES5 - ES2020)</Skill>
                        <Skill skill={4}>TypeScript</Skill>
                        <Skill skill={4}>VueJS (2 - 3)</Skill>
                        <Skill skill={4}>CSS</Skill>
                        <Skill skill={4}>SCSS</Skill>
                        <Skill skill={4}>LESS</Skill>
                        <Skill skill={4}>Webpack</Skill>
                        <Skill skill={4}>NuxtJS</Skill>
                        <Skill skill={4}>AngularJS</Skill>
                        <Skill skill={3}>UX design</Skill>
                        <Skill skill={2}>UI design</Skill>
                        <Skill skill={2}>GraphQL</Skill>
                        <Skill skill={1}>React</Skill>
                    </div>
                </div>

                <div className={styles.skillsOuter}>
                    <div className={styles.skillsInner}>
                        <h3 className={styles.skillsTitle}>Backend</h3>

                        <Skill skill={4}>C# (4.0 - 8.0)</Skill>
                        <Skill skill={4}>.NET (4.0+)</Skill>
                        <Skill skill={4}>ASP.NET MVC </Skill>
                        <Skill skill={4}>ASP.NET Web API</Skill>
                        <Skill skill={4}>ASP.NET Core</Skill>
                        <Skill skill={4}>OData</Skill>
                        <Skill skill={3}>NHibernate</Skill>
                        <Skill skill={3}>SQL Server</Skill>
                        <Skill skill={3}>EF</Skill>
                        <Skill skill={3}>EF Core</Skill>
                        <Skill skill={1}>MySQL</Skill>
                        <Skill skill={1}>PostgreSQL</Skill>
                    </div>
                </div>

                <div className={styles.skillsOuter}>
                    <div className={styles.skillsInner}>
                        <h3 className={styles.skillsTitle}>Tools & infrastructure</h3>

                        <Skill>IIS</Skill>
                        <Skill>AWS</Skill>
                        <Skill>CDN</Skill>
                        <Skill>Git</Skill>
                        <Skill>JIRA</Skill>
                        <Skill>GitHub</Skill>
                        <Skill>Visual Studio</Skill>
                        <Skill>Visual Studio Code</Skill>
                        <Skill>Kibana</Skill>
                        <Skill>TeamCity</Skill>
                        <Skill>Sentry</Skill>
                        <Skill>NodeJS</Skill>
                        <Skill>TSLint</Skill>
                        <Skill>ESLint</Skill>
                        <Skill>StyleLint</Skill>
                        <Skill>Gulp</Skill>
                        <Skill>Prismic</Skill>
                    </div>
                </div>
            </div>
        </Section>
    );
};
