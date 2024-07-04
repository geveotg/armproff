import React, { FC } from 'react'
import classes from '../style/business.module.scss'

const Carts: FC = (): JSX.Element => {
    return (
        <div className={classes['container']}>
            <div className={classes['title-div']}>
                <h1 className={classes['title']}>
                    Այցեքարտ կայքեր
                </h1>
                <p className={classes['titleP']}>
                    Միջին գինը՝ 100.000 - 250.000 ֏
                </p>
            </div>
            <div className={classes['container_div']}>
                <div className={classes['img_div']}>
                    <img
                        src="/project/img1.avif"
                        alt="img"
                        className={classes['img']}
                    />
                </div>
                <div className={classes['text_div']}>
                    <ol className={classes['text-ol']}>
                        <li>Դիզայն(1 տարբերակ)</li>
                        <li>Ծրագրավորում զրոյից(մաքուր կոդ)` JavaScript, TypeScript , React Js, Next JS տեխնոլոգիաներով</li>
                        <li>Ադապտիվ տարբերակ, հասանելի ցանկացած չափսի էկրաններից և հեռախոսներից</li>
                        <li>Անվճար սպասարկում 1 տարի</li>
                    </ol>
                    <p className={classes['text-ol']}>
                        Սահմանափակ ֆունկցիոնալությամբ այցեքարտ կայքեր: Այցեքարտ կայքերն ունենում են սահմանափակ էջեր և ուղղված են բիզնեսի առաջխաղացմանը և օնլայն տիրույթում ներկայացուչություն ունենալուն:
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Carts