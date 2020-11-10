import classNames from 'classnames';
import * as React from 'react';

import styles from './Section.module.scss';

interface Props {
    className?: string;
}

export const Section: React.FunctionComponent<Props> = ({ children, className }) => {
    const el = React.createRef<HTMLElement>();

    React.useEffect(initialize, []);

    return (
        <section className={classNames(styles.section, className)} ref={el}>
            {children}
        </section>
    );

    function initialize() {
        check();
        window.addEventListener('resize', check, { passive: true });
    }

    function check() {
        const element = el.current;
        if (!element) {
            return;
        }

        element.style.position = 'sticky';

        const top = element.offsetHeight;

        element.style.top = `calc(100vh - ${top}px)`;
    }
};
