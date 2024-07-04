import React, { FC } from 'react'
import classes from "./header.module.scss"
import Link from 'next/link'

const Header: FC = (): JSX.Element => {
    return (
        <div className={classes['conatiner']}>
            <Link href={'/'} className={classes['nav-bar']}> Գլխավոր էջ </Link>
            <Link href={'/project'} className={classes['nav-bar']}> Էջերի Պատրաստում </Link>
            <Link href={'/'} className={classes['nav-bar']}> Մեր Մասին </Link>
        </div>
    )
}

export default Header