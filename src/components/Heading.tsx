import * as React from 'react';
import Typing from 'react-typing-animation';

import styles from './Heading.module.scss';

export class Heading extends React.Component {
    public render() {
        return (
            <header className={styles.heading}>
                <Typing className={styles.title} hideCursor={true} speed={15}>
                    <p className={styles.title__hello}>
                        Hello
                        <Typing.Delay ms={500} />,
                    </p>
                    <Typing.Delay ms={700} />
                    <p>
                        my name is <span className={styles.title__name}>Michał</span>.
                    </p>
                    <Typing.Delay ms={1000} />
                    <Typing.Speed ms={3} />
                    <p className={styles.title__subtitle}>
                        I'm senior fullstack developer from{' '}
                        <span className={styles.title__poland}>Poland</span>.
                    </p>
                </Typing>
            </header>
        );
    }
}
