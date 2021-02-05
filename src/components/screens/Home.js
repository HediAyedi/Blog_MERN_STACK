import React from 'react';
import Header from '../parts/Header';
import Footer from '../parts/Footer';
import TrendingPosts from '../parts/TrendingPosts';
import Slider from '../parts/Slider';
import FreshStories from '../parts/FreshStories';


export function Home () {
    return <>
        <Header />
        <Slider />
        <TrendingPosts/>
        <FreshStories/>
        <Footer/>
    </>
}