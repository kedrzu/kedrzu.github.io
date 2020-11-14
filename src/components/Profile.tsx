import * as React from 'react';

import Photo from '../assets/photo.jpg';
import GithubIcon from '../assets/icons/github.svg';
import MailIcon from '../assets/icons/gmail.svg';
import LinkedInIcon from '../assets/icons/linkedin.svg';
import StackOverflowIcon from '../assets/icons/stack-overflow.svg';
import PolandIcon from '../assets/icons/poland.svg';

import styles from './Profile.module.scss';

export const Profile: React.FunctionComponent = () => {
    return (
        <div className={styles.profile}>
            <img src={Photo} className={styles.photo} />

            <h2 className={styles.name}>
                Michał Kędrzyński <img src={PolandIcon} />
            </h2>

            <div className={styles.contacts}>
                <a className={styles.contacts_contact} href="mailto:m.kedrzynski@gmail.com">
                    <img src={MailIcon} className={styles.contacts_contact_icon} />
                    m.kedrzynski@gmail.com
                </a>
                {/* Github */}
                <a
                    className={styles.contacts_contact}
                    href="https://github.com/kedrzu"
                    target="_blank"
                >
                    <img src={GithubIcon} className={styles.contacts_contact_icon} />
                    kedrzu
                </a>
                {/* Linked in */}
                <a
                    className={styles.contacts_contact}
                    href="https://www.linkedin.com/in/michalkedrzynski/"
                    target="_blank"
                >
                    <img src={LinkedInIcon} className={styles.contacts_contact_icon} />
                    michalkedrzynski
                </a>
                {/* Stack overtfow */}
                <a
                    className={styles.contacts_contact}
                    href="https://stackoverflow.com/users/2202583"
                    target="_blank"
                >
                    <img src={StackOverflowIcon} className={styles.contacts_contact_icon} />
                    2202583
                </a>
            </div>

            <div className={styles.description}>
                <p>
                    I'm a creative full stack developer with 7+ years of professional experience in
                    back-end and front-end development and 3+ years of experience as a team lead and
                    architect in enterprise SaaS solution with worldwide reach.
                </p>
                <p>
                    I'm also obsessed with UX/UI & product design and have a strong experience
                    working along with designers to deliver holistic solutions.
                </p>
            </div>
        </div>
    );
};
