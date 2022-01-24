import React from 'react';
import {NavigationBar} from './NavigationBar'
import {Main} from './Main'
import {Footer} from './Footer'
import {PageCarousel} from './PageCarousel'
import {Contact} from './Contact'

export const Home = () => {
  return (<div className="container">
            <NavigationBar />
            <PageCarousel />
            <Main />
            <Contact />
            <Footer />
        </div>);
};
