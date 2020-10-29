import * as React from 'react';

import { Heading } from '../components/Heading';
import { SkillSection } from '../components/SkillSection';
import { ExperienceSection } from '../components/ExperienceSection';

import styles from './index.module.scss';

export default class IndexPage extends React.Component {
    public render() {
        return (
            <>
                <Heading />
                <SkillSection />
                <ExperienceSection />
            </>
        );
    }
}
