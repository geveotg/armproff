'use client'
import React, { FC, useState } from 'react'
import classes from '../style/team.module.scss'


const teamMembers = [
    { name: 'Արման', role: 'մասնագիտություն', img: '/staff/Arman.jpeg' },
    { name: 'Նարինե', role: 'մասնագիտություն', img: '/staff/Narine.jpeg' },
    { name: 'Գևորգ', role: 'մասնագիտություն ', img: '/staff/Gevorg.jpg' },
    { name: 'Արման', role: 'մասնագիտություն', img: '/staff/Arman.jpeg' },
    { name: 'Նարինե', role: 'մասնագիտություն', img: '/staff/Narine.jpeg' },
    { name: 'Գեվորգ', role: 'մասնագիտություն ', img: '/staff/Gevorg.jpg' },
];

const Team: FC = (): JSX.Element => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsToShow = 3;

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? teamMembers.length - itemsToShow : prevIndex - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === teamMembers.length - itemsToShow ? 0 : prevIndex + 1));
    };

    return (
        <div className={classes['container']}>
            <h1 className={classes['title']}>մեր թիմը</h1>
            <div className={classes['merTim']}>
                <button className={classes.button} onClick={prevSlide}>
                    &#10094;
                </button>
                <div className={classes['img-div-container']}>
                    {teamMembers.slice(currentIndex, currentIndex + itemsToShow).map((member, index) => (
                        <div
                            key={index}
                            className={classes.slide}
                        >
                            <img
                                src={member.img}
                                alt={member.name}
                                className={classes.image}
                            />
                            <h3>{member.name}</h3>
                            <p>{member.role}</p>
                        </div>
                    ))}
                </div>
                <button className={classes.button} onClick={nextSlide}>
                    &#10095;
                </button>
            </div>
        </div>
    )
}

export default Team