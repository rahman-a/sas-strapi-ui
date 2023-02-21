import { Button } from '@components/ui'
import React from 'react'
import styles from './Career-Hero-Section.module.scss'

interface CareerHeroSectionProps {
  data: {
    title: string
    subtitle: string
    content: string
    subtitleBold: string
    link: string
    label: string
    backgroundImage: string
  }
}

const CareerHeroSection = ({ data }: CareerHeroSectionProps) => {
  return (
    <section
      className={styles.hero}
      style={{
        backgroundImage: data.backgroundImage
          ? `url(data.backgroundImage)`
          : '',
      }}
    >
      <div className={styles.hero__row}>
        <div className={styles.hero__float}>
          <span className={styles['hero__float-1']}></span>
          <span className={styles['hero__float-2']}></span>
          <span className={styles['hero__float-3']}></span>
          <span className={styles['hero__float-4']}></span>
          <span className={styles['hero__float-5']}></span>
          <span className={styles['hero__float-6']}></span>
          <span className={styles['hero__float-7']}></span>
        </div>
        <div className={styles.hero__col}>
          <div className={styles.hero__overlay}></div>
          <div className={styles.hero__content}>
            <span className={styles.hero__category}>{data.subtitle}</span>
            <h1 className={styles.hero__title}>{data.title}</h1>
            <p className={styles.hero__description}>{data.content}</p>
            <strong className={styles.hero__subtitle}>
              {data.subtitleBold}
            </strong>
            <Button
              as='a'
              icon='thick-arrow'
              href={data.link || '/careers/job-search'}
              variant='text'
              className={styles.hero__cta}
            >
              {data.label}
            </Button>
          </div>
        </div>
        <div className={styles.hero__col}></div>
      </div>
    </section>
  )
}

export default CareerHeroSection
