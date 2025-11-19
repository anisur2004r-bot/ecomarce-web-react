import React from 'react';
import Hero from './HomeComponants/Hero';
import HomeCategory from './HomeComponants/HomeCategory';
import PopularProducts from './HomeComponants/PopularProducts/PopularProducts';
import LatestExclusive from './HomeComponants/LatestExclusive';
import NewProducts from './HomeComponants/NewProducts';
import Collection from './HomeComponants/Collection';
import Support from './HomeComponants/Support';
import Item from './HomeComponants/Item';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <HomeCategory></HomeCategory>
            <PopularProducts></PopularProducts>
            <LatestExclusive></LatestExclusive>
            <NewProducts></NewProducts>
            <Collection></Collection>
            <Support></Support>
            <Item></Item>
        </div>
    );
};

export default Home;