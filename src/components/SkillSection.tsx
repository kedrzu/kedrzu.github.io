import * as React from 'react';

import styles from './SkillSection.module.scss';
import { Skill } from './Skill';

export class SkillSection extends React.Component {
    private element = React.createRef<HTMLElement>();
    private pinned = false;

    componentDidMount() {
        this.check();
        // window.addEventListener('scroll', this.onScroll.bind(this), { passive: true });
        window.addEventListener('resize', this.check.bind(this), { passive: true });
    }

    private check() {
        const element = this.element.current;
        if (!element) {
            return;
        }

        element.style.position = 'sticky';

        const top = element.offsetHeight - 100;

        element.style.top = `calc(100vh - ${top}px)`;
    }

    public render() {
        return (
            <section className={styles.section} ref={this.element}>
                <h2 className={styles.title}>Skills</h2>

                <div className={styles.grid}>
                    <div className={styles.skillsOuter}>
                        <div className={styles.skillsInner}>
                            <h3 className={styles.skillsTitle}>Frontend</h3>

                            <Skill skill={4}>JavaScript (ES5 - ES2020)</Skill>
                            <Skill skill={4}>TypeScript</Skill>
                            <Skill skill={4}>VueJS (2 - 3)</Skill>
                            <Skill skill={4}>AngularJS</Skill>
                            <Skill skill={4}>CSS</Skill>
                            <Skill skill={4}>SCSS</Skill>
                            <Skill skill={4}>LESS</Skill>
                            <Skill skill={4}>Webpack</Skill>
                            <Skill skill={4}>NuxtJS</Skill>
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
                            <Skill skill={4}>ASP.NET MVC </Skill>
                            <Skill skill={4}>ASP.NET Web API</Skill>
                            <Skill skill={4}>ASP.NET Core</Skill>
                            <Skill skill={4}>OData</Skill>
                            <Skill skill={3}>SQL Server</Skill>
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
                            <Skill>Sentry</Skill>
                            <Skill>TSLint</Skill>
                            <Skill>ESLint</Skill>
                            <Skill>StyleLint</Skill>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
