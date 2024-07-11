import React, { FC } from 'react'
import classes from '../style/corporate.module.scss'

const Corporate: FC = (): JSX.Element => {
    return (
        <div className={classes['container']}>
            <div className={classes['title-div']}>
                <h1 className={classes['title']}>
                    Կորպորատիվ կայքերի պատրաստում
                </h1>
                <p className={classes['titleP']}>
                    Միջին գինը՝ 500․000 -2000․000֏ Գինը ներառում է՝
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
                        <li>
                            Դիզայն(3 տարբերակ),դուք ինքներդ կընտրեք որ տարբերակը
                        </li>
                        <li>
                            Ծրագրավորում զրոյից(մաքուր կոդ)՝ JavaScript, TypeScript , React JS, Next JS Express JS, Nest JS տեխնոլոգիաներով
                        </li>
                        <li>
                            Ադապտիվ տարբերակ,հասանելի ցանկացած չափսի էկրաններից և հեռախոսներից
                        </li>
                        <li>
                            Վաճառող» տեքստերի կազմում
                        </li>
                        <li>
                            Ձեր բիզնեսի անալիտիկա, կառավարում, վաճառքներ, վճարային համակարգեր, կայքի ղեկավարման համակարգ ձեր առանձին մուտքանուն գաղտնաբառով (admin panel)
                        </li>
                        <li>
                            Երաշխիքային սպասարկում 1 տարի
                        </li>
                    </ol>
                    <p className={classes['text-ol']}>
                        Եթե ձեր ընկերությունը չունի սեփական վեբ կայքը, ապա դուք կորցնում եք պոտենցյալ հաճախորդների մի մեծ բանակ։ Մենք կօգնենք պատշաճ ներկայացնել ձեր բիզնեսը օնլայն և անկախ։ Պատրաստում ենք կայքեր զրոյից, գեղեցիկ դիզայնով, ամբողջական ձևավորմամբ և անվճար երաշխիքային սպասարկմամբ։ Մեզ հետ դուք կստանաք համալիր սպասարկում մեկ պայմանագրով:
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Corporate