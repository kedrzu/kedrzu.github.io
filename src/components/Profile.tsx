import * as React from 'react';

import Photo from '../assets/photo.jpg';
import GithubIcon from '../assets/icons/github.svg';
import MailIcon from '../assets/icons/mail.svg';
import LinkedInIcon from '../assets/icons/linkedin.svg';

import styles from './Profile.module.scss';

export const Profile: React.FunctionComponent = () => {
    return (
        <div className={styles.profile}>
            <img src={Photo} className={styles.photo} />

            <h2 className={styles.name}>Michał Kędrzyński</h2>

            <div className={styles.contacts}>
                <a className={styles.contacts_contact} href="mailto:kedrzu@gmail.com">
                    <img src={MailIcon} className={styles.contacts_contact_icon} />
                    &nbsp;kedrzu@gmail.com
                </a>
                <a
                    className={styles.contacts_contact}
                    href="https://github.com/kedrzu"
                    target="_blank"
                >
                    <img src={GithubIcon} className={styles.contacts_contact_icon} />
                    &nbsp;kedrzu
                </a>
                <a
                    className={styles.contacts_contact}
                    href="https://www.linkedin.com/in/michalkedrzynski/"
                    target="_blank"
                >
                    <img src={LinkedInIcon} className={styles.contacts_contact_icon} />
                    &nbsp;michalkedrzynski
                </a>
            </div>

            <div className={styles.description}>
                <p>
                    I'm creative full stack developer with 7+ years of professional experience in
                    back-end and front-end development and 3+ years of experience as a team lead and
                    architect of enterprise SaaS solution with worldwide reach.
                </p>
                <p>
                    I'm also obsessed with UX/UI and product design and have a strong experience
                    working along with designers to deliver holistic solutions.
                </p>
            </div>
        </div>
    );
};
