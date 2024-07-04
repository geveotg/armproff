import React, { FC } from 'react'
import classes from '../style/about.module.scss'

const About: FC = (): JSX.Element => {
    return (
        <div className={classes['container']}>
            <h1 className={classes['title']}>
                կենտրոնի մասին
            </h1>
            <div className={classes['section']}>
                <div className={classes['imgdiv']}>
                    <img
                        src="/project/img3.avif"
                        alt=""
                        className={classes['img']}
                    />
                </div>
                <div className={classes['anuthing']}>
                    <p className={classes['p']}>
                        <big >ArmProf</big>  ծրագրավորման կենտրոնը հանդես է գալիս որպես հզոր հարթակ, որը միավորում է կայքերի պատրաստման բարձրակարգ ծառայությունները և ծրագրավորման խորացված դասընթացները՝ փորձառու և բարձր որակավորում ունեցող մասնագետների կողմից: Մենք պատրաստում ենք ցանկացած բարդության և պահանջների համապատասխան կայքեր՝ ապահովելով ձեր բիզնեսի առաջխաղացումը:
                        Մեր ծրագրավորման դասընթացները ներառում են արդի տեխնոլոգիաներ և մեթոդներ, պարբերաբար թարմացվող նյութերով: Մեր մասնագետները պարբերաբար վերապատրաստվում են արտերկրում՝ ապահովելով բարձրագույն կրթություն կենտրոնի ուսանողների համար:
                    </p>

                </div>
            </div>
        </div>
    )
}

export default About