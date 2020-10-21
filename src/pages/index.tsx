import * as React from 'react';

import { Heading } from '../components/Heading';
import { Skills } from '../components/Skills';

import styles from './index.module.scss';

export default class IndexPage extends React.Component {
    public render() {
        return (
            <>
                <Heading />
                <Skills />
            </>
        );
    }
}
