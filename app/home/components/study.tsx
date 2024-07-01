"use client";
import React, { FC, useState } from "react";
import classes from "../style/study.module.scss";
import { items } from "./data";
const Study: FC = (): JSX.Element => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleClick = (index: any) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className={classes["language"]}>
            <h1 className={classes["title"]}>ինչ ենք սովորելու միասին</h1>
            <div className={classes["sections"]}>
                <div className={classes["menu"]}>
                    {<div className={classes["drop-menu"]}>
                        {items.map((item, index) => (
                            <div key={item.id} className={classes["Menue"]}>
                                <p
                                    onClick={() => handleClick(index)}
                                    className={classes["button"]}
                                >
                                    {item.text}
                                </p>
                                <div
                                    className={`${classes["content"]} ${openIndex === index ? classes["contentOpen"] : ""}`}
                                >
                                    <p>{item.content}</p>
                                </div>
                            </div>
                        ))}
                    </div>}
                </div>
                <div className={classes["imgdivs"]}>
                    <img src="/img/img1.png" alt="" className={classes["img"]} />
                </div>
            </div>
        </div>
    );
};

export default Study;
