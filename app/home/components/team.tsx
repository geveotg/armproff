"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FC } from "react";
import classes from "../style/team.module.scss";
import Slider from "react-slick";
import { teamMembers } from "./data";
import { settings } from "./data";

const Team: FC = (): JSX.Element => {
    const teamList = teamMembers.map(({ name, role, img }, i) => {
        return (
            <div key={i} className={classes["personal_card"]}>
                <div className={classes["card_info"]}>
                    <img
                        src={img}
                        alt="img"
                        className={classes["staff_img"]}
                    />
                    <p className={classes["staff_name"]}>{name}</p>
                    <p className={classes["staff_role"]}>{role}</p>
                </div>
            </div>
        );
    });

    return (
        <div className={classes["slider-container"]}>

            <h1 className={classes['title']}>
                Մեր թիմը
            </h1>

            <div className={classes['slider']}>
                <Slider {...settings}>{teamList}</Slider>
            </div>
        </div>
    );
};

export default Team;
