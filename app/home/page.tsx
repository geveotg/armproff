import React, { FC, useState } from 'react'
import classes from "./page.module.scss"
import Info from './components/info';
import About from './components/about';
import Team from './components/team';
import Study from './components/study';

const HomePage: FC = (): JSX.Element => {
    return (
        <div className={classes['container']}>
            <Info />

            <About />

            <Study />

            <Team />
        </div>
    )
}

export default HomePage