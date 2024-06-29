import React, { FC } from 'react'
import classes from '../style/info.module.scss'

const Info: FC = (): JSX.Element => {
    return (
        <div className={classes['container']}>
            <div className={classes['anuthing']}>
                <p className={classes['p']}>
                    ինչ-որ հետաքրքիր միտք
                </p>
            </div>
            <div className={classes['imgdiv']}>
                <img
                    src="/img/img2.jpg"
                    alt=""
                    className={classes['img']}
                />
            </div>
        </div>
    )
}

export default Info