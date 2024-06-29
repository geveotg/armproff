import React, { FC } from 'react'
import classes from "./header.module.scss"
import Link from 'next/link'

const Header: FC = (): JSX.Element => {
    return (
        <div className={classes['conatiner']}>
            <Link href={'/'} className={classes['nav-bar']}> Home </Link>
            <Link href={'/'} className={classes['nav-bar']}> Home </Link>
            <Link href={'/'} className={classes['nav-bar']}> Home </Link>
        </div>
    )
}

export default Header