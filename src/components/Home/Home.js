import React from 'react';
import FeatureCourses from '../FeatureCourses/FeatureCourses';
import HeroBox from '../HeroBox/HeroBox';

const Home = () => {
    return (
        <div>
            {/* This is hero box, where show something about the website */}
            <HeroBox></HeroBox>
            {/* This component for featuring 4 courses */}
            <FeatureCourses></FeatureCourses>
        </div>
    );
};

export default Home;