import React, { FC } from 'react'
import classes from '../style/info.module.scss'

const Info: FC = (): JSX.Element => {
    return (
        <div className={classes['container']}>
            <div className={classes['anuthing']}>
                <p className={classes['p']}>
                    Բարի գալուստ <big style={{ color: 'rgb(255, 150, 1)' }}>ArmProf</big> ծրագրավորման կենտրոն
                </p>
                <p className={classes['pp']}>
                    Մենք անցկացնում ենք ծրագրավորման խորացված դասընթացներ և ընդունում ենք ցանկացած վեբ կայքերի, և էջերի պատրաստման պատվերներ՝ ապահովելով բարձր որակ և արդյունավետ լուծումներ:
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