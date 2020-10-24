import * as React from 'react';

import styles from './Skill.module.scss';

interface Props {
    skill?: number;
}

export const Skill: React.FunctionComponent<Props> = ({ children, skill }) => {
    let skillsElement: JSX.Element | undefined;

    if (skill) {
        skillsElement = <div className={styles.points}>{'✱'.repeat(skill)}</div>;
    }

    return (
        <div className={styles.skill}>
            <div className={styles.text}>{children}</div>
            {skillsElement}
        </div>
    );
};
