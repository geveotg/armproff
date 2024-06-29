'use client'
import React, { FC, useState } from 'react'
import classes from '../style/study.module.scss'

const Study: FC = (): JSX.Element => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleClick = (index: any) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    const items = [
        {
            id: 1,
            text: 'html',
            content: 'html-ի մասին, html-ի մասին, html-ի մասին, html-ի մասին, html-ի մասին, html-ի մասին, html-ի մասին, html-ի մասին, html-ի մասին, html-ի մասին, html-ի մասին, html-ի մասին, html-ի մասին, html-ի մասին, html-ի մասին, html-ի մասին, html-ի մասին, html-ի մասին, html-ի մասին, html-ի մասին, html-ի մասին, html-ի մասին, html-ի մասին, html-ի մասին, html-ի մասին, html-ի մասին, html-ի մասին, html-ի մասին, html-ի մասին, html-ի մասին, html-ի մասին, html-ի մասին, html-ի մասին, html-ի մասին, html-ի մասին, html-ի մասին, html-ի մասին, html-ի մասին, html-ի մասին, html-ի մասին, html-ի մասին, html-ի մասին, html-ի մասին, html-ի մասին, html-ի մասին, html-ի մասին, html-ի մասին, '
        },
        {
            id: 2,
            text: 'css',
            content: 'css-ի մասին, css-ի մասին, css-ի մասին, css-ի մասին, css-ի մասին, css-ի մասին, css-ի մասին, css-ի մասին, css-ի մասին, css-ի մասին, css-ի մասին, css-ի մասին, css-ի մասին, css-ի մասին, '

        },
        {
            id: 3,
            text: 'js',
            content: 'js-ի մասին, js-ի մասին, js-ի մասին, js-ի մասին, js-ի մասին, js-ի մասին, js-ի մասին, js-ի մասին, js-ի մասին, js-ի մասին, js-ի մասին, js-ի մասին, js-ի մասին, js-ի մասին, js-ի մասին, js-ի մասին, js-ի մասին, js-ի մասին, js-ի մասին, js-ի մասին, js-ի մասին, js-ի մասին, js-ի մասին, js-ի մասին, js-ի մասին, js-ի մասին, js-ի մասին, js-ի մասին, js-ի մասին, js-ի մասին, js-ի մասին, js-ի մասին, js-ի մասին, js-ի մասին, js-ի մասին, js-ի մասին, js-ի մասին, js-ի մասին, js-ի մասին, js-ի մասին, js-ի մասին, js-ի մասին, js-ի մասին, js-ի մասին, js-ի մասին, js-ի մասին, js-ի մասին, js-ի մասին, '

        },
        {
            id: 4,
            text: 'react',
            content: 'react-ի մասին, react-ի մասին, react-ի մասին, react-ի մասին, react-ի մասին, react-ի մասին, react-ի մասին, react-ի մասին, react-ի մասին, react-ի մասին, react-ի մասին, react-ի մասին, react-ի մասին, react-ի մասին, react-ի մասին, react-ի մասին, react-ի մասին, react-ի մասին, react-ի մասին, react-ի մասին, react-ի մասին, react-ի մասին, react-ի մասին, react-ի մասին, react-ի մասին, react-ի մասին, react-ի մասին, react-ի մասին, react-ի մասին, react-ի մասին, react-ի մասին, react-ի մասին, react-ի մասին, react-ի մասին, react-ի մասին, react-ի մասին, react-ի մասին, react-ի մասին, react-ի մասին, react-ի մասին, '

        },
        {
            id: 5,
            text: 'next',
            content: 'next-ի մասին, next-ի մասին, next-ի մասին, next-ի մասին, next-ի մասին, next-ի մասին, next-ի մասին, next-ի մասին, next-ի մասին, next-ի մասին, next-ի մասին, next-ի մասին, next-ի մասին, next-ի մասին, next-ի մասին, next-ի մասին, next-ի մասին, next-ի մասին, next-ի մասին, next-ի մասին, next-ի մասին, next-ի մասին, next-ի մասին, next-ի մասին, next-ի մասին, next-ի մասին, next-ի մասին, next-ի մասին, next-ի մասին, next-ի մասին, next-ի մասին, next-ի մասին, next-ի մասին, next-ի մասին, next-ի մասին, next-ի մասին, next-ի մասին, next-ի մասին, next-ի մասին, '

        },
    ];
    return (

        <div className={classes['language']}>
            <h1 className={classes['title']}>
                ինչ ենք սովորելու միասին
            </h1>
            <div className={classes['sections']}>
                <div className={classes['menu']}>
                    {<div className={classes['drop-menu']} >
                        {items.map((item, index) => (
                            <div
                                key={item.id}
                                className={classes['Menue']}
                            >
                                <p
                                    onClick={() => handleClick(index)}
                                    className={classes['button']}
                                >
                                    {item.text}
                                </p>
                                <div
                                    className={`${classes['content']} ${openIndex === index ? classes['contentOpen'] : ''}`}
                                >
                                    <p>{item.content}</p>
                                </div>
                            </div>
                        ))}
                    </div>}
                </div>
                <div className={classes['imgdivs']}>
                    <img
                        src="/img/img1.png"
                        alt=""
                        className={classes['img']}
                    />
                </div>

            </div>
        </div>

    )
}

export default Study