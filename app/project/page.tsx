import React, { FC } from 'react'
import Carts from './component/business'
import classes from './page.module.scss'
import LendingPage from './component/lendingPage'
import Corporate from './component/corporate'

const Project: FC = (): JSX.Element => {
    return (
        <div className={classes['container']}>
            <Carts />
            <hr />
            <LendingPage />
            <hr />
            <Corporate />
        </div>
    )
}

export default Project