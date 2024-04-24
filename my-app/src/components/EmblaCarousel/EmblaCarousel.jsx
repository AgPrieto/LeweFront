// eslint-disable-next-line no-unused-vars
import React from "react";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import styles from "./emblacarousel.module.css";
import { Link } from "react-router-dom";

const EmblaCarousel = (props) => {
  // eslint-disable-next-line react/prop-types
  const { items } = props;
  const options = { loop: true };
  const slides = items;
  // eslint-disable-next-line no-unused-vars
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);

  return (
    <section className={styles.embla}>
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__container}>
          {slides.map((item, index) => (
            <div className={styles.embla__slide} key={index}>
              <Link to={`/category/${item.id}`}>
                <img
                  src={item.image}
                  alt={item.name}
                  className={styles.embla__slide__img}
                />
                <h3 className={styles.embla__slide__name}>{item.name}</h3>
                <p className={styles.embla__slide__price}>${item.price}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
