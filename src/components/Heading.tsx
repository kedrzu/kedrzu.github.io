import * as React from 'react';
import Typing from 'react-typing-animation';

import styles from './Heading.module.scss';

export class Heading extends React.Component {
    public render() {
        return (
            <div className={styles.outer}>
                <div className={styles.inner}>
                    <div className={styles.container}>
                        <Typing hideCursor={true} speed={20}>
                            <div className={styles.title}>
                                <p className={styles.title__hello}>
                                    Hello
                                    <Typing.Delay ms={500} />,
                                </p>
                                <Typing.Delay ms={700} />
                                <p>
                                    my name is <span className={styles.title__name}>Michał</span>.
                                </p>
                                <Typing.Delay ms={1000} />
                                <p className={styles.title__subtitle}>
                                    <Typing.Speed ms={5} />
                                    I'm senior fullstack developer from{' '}
                                    <span className={styles.title__poland}>Poland</span>.
                                </p>
                            </div>
                        </Typing>
                    </div>
                </div>
            </div>
        );
    }
}
