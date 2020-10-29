import * as React from 'react';
import classnames from 'classnames';

import PerfectGymLogo from '../assets/perfectgym-logo.svg';
import HealthlabsLogo from '../assets/healthlabs-logo.svg';

import styles from './ExperienceSection.module.scss';

export class ExperienceSection extends React.Component {
    public render() {
        return (
            <section className={styles.section}>
                <h2 className={styles.title}>Experience</h2>

                <div className={styles.container}>
                    <div className={styles.experience}>
                        <div className={classnames(styles.logo, styles.logo_healthlabs)}>
                            <img src={HealthlabsLogo} />
                        </div>
                        <div className={styles.content}></div>
                    </div>

                    <div className={styles.experience}>
                        <div className={classnames(styles.logo, styles.logo_perfectgym)}>
                            <img src={PerfectGymLogo} width="400" height="300" />
                        </div>
                        <div className={styles.content}></div>
                    </div>

                    <div className={styles.experience}>
                        <div className={styles.logo}>
                            <img src={PerfectGymLogo} width="400" height="300" />
                        </div>
                        <div className={styles.content}></div>
                    </div>
                </div>
            </section>
        );
    }
}
