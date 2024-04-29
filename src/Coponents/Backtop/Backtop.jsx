import React, { useEffect, useState } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import './Backtop.scss';
import up from './img/up.png';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 40) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 500,
      smooth: 'easeInOutQuad'
    });
  };

  return (
    <div className="content">
      {isVisible && (
        <button onClick={scrollToTop} id="backToTopBtn">
          <img style={{ width: '32px', objectFit: 'cover' }} src={up} alt="Back-top" />
        </button>
      )}
    </div>
  );
};

export default BackToTopButton;
