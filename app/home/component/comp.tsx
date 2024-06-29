import { useState } from 'react';
import styles from './comp.module.scss';

const teamMembers = [
  { name: 'John Doe', role: 'Developer', img: '/img/img1.png' },
  { name: 'Jane Smith', role: 'Designer', img: '/img/img1.png' },
  { name: 'Mark Brown', role: 'Project Manager', img: '/img/img2.jpg' },
  { name: 'Emma Wilson', role: 'QA Engineer', img: '/img/img2.jpg' },
  { name: 'Michael Lee', role: 'DevOps Engineer', img: '/img/img1.png' },
];


const TeamSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0); 
  const itemsToShow = 3;

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? teamMembers.length - itemsToShow : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === teamMembers.length - itemsToShow ? 0 : prevIndex + 1));
  };

  return (
    <div className={styles.slider}>
      <button className={styles.button} onClick={prevSlide}>
        &#10094;
      </button>
      <div className={styles.slides}>
        {teamMembers.slice(currentIndex, currentIndex + itemsToShow).map((member, index) => (
          <div key={index} className={styles.slide}>
            <img src={member.img} alt={member.name} className={styles.image} />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
      <button className={styles.button} onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default TeamSlider;
