import React from 'react';
import Directory from '../../components/directory/directory.component';
import PageTitle from '../../components/page-title/page-title.component'



import {HomePageContainer} from './homepage.styles.jsx';

const HomePage = () => (
    <HomePageContainer>
        <PageTitle />
        <Directory />
    </HomePageContainer>
)

export default HomePage;
