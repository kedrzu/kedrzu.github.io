import * as React from 'react';

import styles from './Skills.module.scss';
import { Skill } from './Skill';

export class Skills extends React.Component {
    public render() {
        return (
            <section className={styles.section}>
                <h2 className={styles.title}>My skills</h2>

                <div className={styles.grid}>
                    <div className={styles.skillsOuter}>
                        <div className={styles.skillsInner}>
                            <h3 className={styles.skillsTitle}>Frontend</h3>

                            <Skill skill={4}>JavaScript (ES5 - ES2020)</Skill>
                            <Skill skill={4}>TypeScript</Skill>
                            <Skill skill={4}>VueJS (2 - 3)</Skill>
                            <Skill skill={4}>AngularJS</Skill>
                            <Skill skill={4}>CSS / SCSS / LESS</Skill>
                            <Skill skill={4}>Webpack</Skill>
                            <Skill skill={4}>NuxtJS</Skill>
                            <Skill skill={2}>GraphQL</Skill>
                            <Skill skill={1}>React</Skill>
                        </div>
                    </div>

                    <div className={styles.skillsOuter}>
                        <div className={styles.skillsInner}>
                            <h3 className={styles.skillsTitle}>Backend</h3>

                            <Skill skill={4}>C# (4.0 - 8.0)</Skill>
                            <Skill skill={4}>ASP.NET MVC </Skill>
                            <Skill skill={4}>ASP.NET Web API</Skill>
                            <Skill skill={4}>ASP.NET Core</Skill>
                            <Skill skill={4}>OData</Skill>
                            <Skill skill={2}>SQL Server</Skill>
                            <Skill skill={1}>MySQL</Skill>
                            <Skill skill={1}>PostgreSQL</Skill>
                        </div>
                    </div>

                    <div className={styles.skillsOuter}>
                        <div className={styles.skillsInner}>
                            <h3 className={styles.skillsTitle}>Infrastructure</h3>

                            <Skill>IIS</Skill>
                            <Skill>AWS</Skill>
                            <Skill>CDN</Skill>
                            <Skill>Git</Skill>
                            <Skill>CI/CD</Skill>
                        </div>
                    </div>

                    <div className={styles.skillsOuter}>
                        <div className={styles.skillsInner}>
                            <h3 className={styles.skillsTitle}>Tools</h3>

                            <Skill>JIRA</Skill>
                            <Skill>GitHub</Skill>
                            <Skill>Visual Studio</Skill>
                            <Skill>Visual Studio Code</Skill>
                            <Skill>Kibana</Skill>
                            <Skill>Sentry</Skill>
                            <Skill>ESLint</Skill>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
