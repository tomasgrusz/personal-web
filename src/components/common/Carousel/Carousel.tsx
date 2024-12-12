'use client';
import Slider from 'react-slick';
import styles from './Carousel.module.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

type CarouselProps = {
  children: React.ReactNode[];
};

const Carousel: React.FC<CarouselProps> = ({ children }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1800,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Slider className={styles.Carousel} {...settings}>
      {children.map((child, index) => (
        <div className={styles.item} key={index}>
          {child}
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
