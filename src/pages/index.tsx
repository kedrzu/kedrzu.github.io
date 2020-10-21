import * as React from 'react';

import { Heading } from '../components/Heading';

import styles from './index.module.scss';

export default class IndexPage extends React.Component {
    public render() {
        return (
            <>
                <Heading />
                <div className={styles.page}></div>
            </>
        );
    }
}
