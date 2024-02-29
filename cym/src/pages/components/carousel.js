import { useEffect, useRef } from 'react';
import './carousel.css'; 

const Carousel = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;

    let scrollInterval;

    const handleMouseEnter = () => {
      clearInterval(scrollInterval);
    };

    const handleMouseLeave = () => {
      startAutoScroll();
    };

    const startAutoScroll = () => {
      scrollInterval = setInterval(() => {
        // Move by the width of one image
        const scrollWidth = slider.clientWidth / 3;
        slider.scrollLeft += scrollWidth;

        // If reached the end, reset to the beginning
        if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
          slider.scrollLeft = 0;
        }
      }, 10000); // Change the interval as needed
    };

    slider.addEventListener('mouseenter', handleMouseEnter);
    slider.addEventListener('mouseleave', handleMouseLeave);

    startAutoScroll();

    return () => {
      clearInterval(scrollInterval);
      slider.removeEventListener('mouseenter', handleMouseEnter);
      slider.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="carousel-container">
      <ul className="gallery" ref={sliderRef}>
      <ul className="gallery " ref={sliderRef}>
        {[1, 2, 3, 4, 5, 6,7,8,9,10,11,12,13,14,15,16].map((index) => (
          <li key={index}><img className='imgCss p-2' src={`/Carousel/File${index}.png`} alt={`Image ${index}`} /></li>
        ))}
      </ul>
      </ul>
    </div>
  );
};

export default Carousel;
