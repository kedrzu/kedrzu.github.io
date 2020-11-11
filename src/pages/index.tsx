import * as React from 'react';

import { Heading } from '../components/Heading';
import { ProfileSection } from '../components/ProfileSection';
import { SkillSection } from '../components/SkillSection';
import { ExperienceSection } from '../components/ExperienceSection';

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
