import classNames from 'classnames';
import * as React from 'react';

import GithubIcon from '../assets/icons/github.svg';
import LinkIcon from '../assets/icons/link.svg';
import LinkedInIcon from '../assets/icons/linkedin.svg';

import styles from './CompanyHeader.module.scss';

interface Props {
    name: string;
    logo?: string;
    url?: string;
    github?: string;
    linkedin?: string;
}

export class CompanyHeader extends React.Component<Props> {
    public render() {
        let logo: JSX.Element;
        let websiteLink: JSX.Element | undefined;
        let githubLink: JSX.Element | undefined;
        let linkedInLink: JSX.Element | undefined;

        if (this.props.logo) {
            logo = <img src={this.props.logo} className={styles.logo} />;
        } else {
            logo = <div className={styles.name}>{this.props.name}</div>;
        }

        if (this.props.url) {
            websiteLink = (
                <a
                    className={styles.contacts_contact}
                    href={'https://' + this.props.url}
                    target="_blank"
                >
                    <img src={LinkIcon} className={styles.contacts_contact_icon} />
                    &nbsp;{this.props.url}
                </a>
            );
        }

        if (this.props.github) {
            githubLink = (
                <a className={styles.contacts_contact} href={this.props.github} target="_blank">
                    <img src={GithubIcon} className={styles.contacts_contact_icon} />
                </a>
            );
        }

        if (this.props.linkedin) {
            linkedInLink = (
                <a className={styles.contacts_contact} href={this.props.linkedin} target="_blank">
                    <img src={LinkedInIcon} className={styles.contacts_contact_icon} />
                </a>
            );
        }

        return (
            <header className={styles.header}>
                {logo}

                <div className={styles.contacts}>
                    {websiteLink}
                    <span className={styles.contacts_spacer} />

                    {githubLink}
                    {linkedInLink}
                </div>
            </header>
        );
    }
}
