import * as React from 'react';

import styles from './index.module.scss';

export default class IndexPage extends React.Component {
    public render() {
        return (
            <div className={styles.container}>
                <h1 className={styles.title}>Hello, my name is Michał</h1>
            </div>
        );
    }
}
