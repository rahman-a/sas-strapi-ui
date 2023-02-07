/* eslint-disable @next/next/no-img-element */
import React, { FunctionComponent, useState } from 'react'
import styles from './Carousel.module.scss'
import { ThickLongRightArrow } from '../icons'
// import data from '@data/carousel.json'
import { Carousel } from '@customTypes/Layout'
import classNames from 'classnames'

interface CarouselProps {
  carousel: Carousel
}

const Carousel: FunctionComponent<CarouselProps> = ({ carousel }) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0)
  const [initialTouchPosition, setInitialTouchPosition] = useState<number>(0)

  const slidesWrapperClasses = classNames(
    styles.carousel__wrapper,
    styles[`carousel__pane_active-${currentSlide}`]
  )

  const handleTouchMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const touchPosition = e.clientX
    const difference = initialTouchPosition - touchPosition
    if (difference > 5) {
      currentSlide < 2 && setCurrentSlide(currentSlide + 1)
    }
    if (difference < -5) {
      currentSlide > 0 && setCurrentSlide(currentSlide - 1)
    }
  }
  return (
    <div className={styles.carousel}>
      <div
        className={styles.carousel__slides}
        onPointerMove={handleTouchMove}
        onPointerDown={(e) => setInitialTouchPosition(e.clientX)}
      >
        <div className={slidesWrapperClasses}>
          {carousel.items.map((slide, index) => (
            <a
              key={slide.id}
              href={slide.link}
              className={`${styles.carousel__pane} ${
                index === currentSlide ? styles.carousel__pane_active : ''
              }`}
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className={styles.carousel__data}>
                <div className={styles.carousel__data_wrapper}>
                  <h2 className={styles.carousel__title}>
                    <span>{slide.title}</span>
                  </h2>
                  <p className={styles.carousel__description}>
                    <span>{slide.description}</span>
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
      <div className={styles.carousel__tabs}>
        {carousel.items.map((slide, index) => (
          <div
            key={slide.title}
            className={`${styles.carousel__tab} ${
              index === currentSlide ? styles.carousel__tab_active : ''
            }`}
            onMouseEnter={() => setCurrentSlide(index)}
          >
            <h2>{slide.title}</h2>
            <a href={slide.link}>
              <span>Read more</span>
              <ThickLongRightArrow />
            </a>
          </div>
        ))}
      </div>
      <div className={styles.carousel__nav}>
        <div className={styles.carousel__nav_wrapper}>
          {[...Array(carousel.items.length)].map((_, index) => (
            <button
              className={
                index === currentSlide ? styles.carousel__nav_active : ''
              }
              key={index}
              onClick={() => setCurrentSlide(index)}
            ></button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Carousel
