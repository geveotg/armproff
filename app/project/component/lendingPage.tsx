import React, { FC } from 'react'
import classes from '../style/lendingPage.module.scss'

const LendingPage: FC = (): JSX.Element => {
    return (
        <div className={classes['container']}>
            <div className={classes['title-div']}>
                <h1 className={classes['title']}>
                    Լենդինգներ կայքեր
                </h1>
                <p className={classes['titleP']}>
                    Միջին գինը՝ 250.000 400.000֏
                </p>
            </div>
            <div className={classes['container_div']}>

                <div className={classes['img_div']}>
                    <img
                        src="/project/img2.avif"
                        alt="img"
                        className={classes['img']}
                    />
                </div>
                <div className={classes['text_div']}>
                    <ol className={classes['text-ol']}>
                        <li>
                            Դիզայն(1 տարբերակ)
                        </li>
                        <li>
                            Ծրագրավորում զրոյից(մաքուր կոդ)` JavaScript, TypeScript , React Js Next JS տեխնոլոգիաներով
                        </li>
                        <li>
                            Ադապտիվ տարբերակ,հասանելի ցանկացած չափսի էկրաններից և հեռախոսներից
                        </li>
                        <li>
                            Վաճառող» տեքստերի կազմում
                        </li>
                        <li>
                            Գնման գործողության խթանման հնարավորություն բիզնեսի առաջխաղացում։
                        </li>
                        <li>
                            Անվճար սպասարկում 1 տարի
                        </li>
                    </ol>
                    <p className={classes['text-ol']}>Պատրաստում ենք վաճառող լենդինգ էջեր ապրանքների և ծառայությունների սահմանափակ քանակությամբ: Կայքի այս տեսակները նախատեսված են 1-5 ապրանքի կամ ծառայության ակտիվ գովազդի միջոցով վաճառելու, ակցիաներ գովազդելու, ինֆորմացիա տեղադրելու համար: Լենդինգները բաղկացած են մեկ էջից, որտեղ տրվում են գնորդների հիմնական հարցերի պատասխանները, նշվում են ապրանքի առավելությունները: </p>
                </div>
            </div>
        </div>
    )
}

export default LendingPage