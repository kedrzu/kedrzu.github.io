import * as React from 'react';
import { Helmet } from 'react-helmet';

import { Heading } from '../components/Heading';
import { SkillSection } from '../components/SkillSection';
import { ExperienceSection } from '../components/ExperienceSection';

export default class IndexPage extends React.Component {
    public render() {
        return (
            <>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Michał Kędrzyński</title>
                </Helmet>
                <Heading />
                <SkillSection />
                <ExperienceSection />
            </>
        );
    }
}
