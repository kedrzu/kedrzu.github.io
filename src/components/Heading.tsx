import classNames from 'classnames';
import * as React from 'react';
import Typing from 'react-typing-animation';

import Chevron from '../assets/icons/chevron-down.svg';

import styles from './Heading.module.scss';

export function Heading() {
    const [complete, setComplete] = React.useState(false);

    return (
        <header className={styles.heading}>
            <Typing
                className={styles.title}
                hideCursor={true}
                speed={10}
                onFinishedTyping={() => setTimeout(() => setComplete(true), 500)}
            >
                <p className={styles.title__hello}>
                    Hello
                    <Typing.Delay ms={100} />,
                </p>
                <Typing.Delay ms={400} />
                <p>
                    my name is <span className={styles.title__name}>Michał</span>.
                </p>
                <Typing.Delay ms={400} />
                <Typing.Speed ms={2} />
                <p className={styles.title__subtitle}>
                    I'm senior fullstack developer from{' '}
                    <span className={styles.title__poland}>Poland</span>.
                </p>
            </Typing>

            <img
                src={Chevron}
                className={classNames({
                    [styles.chevron]: true,
                    [styles.chevron_show]: complete.valueOf(),
                })}
            />
        </header>
    );
}
