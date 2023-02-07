import { Button } from '@components/ui'
import React from 'react'
import styles from './Career-Hero-Section.module.scss'

const CareerHeroSection = () => {
  return (
    <section className={styles.hero}>
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
            <span className={styles.hero__category}>Career with SAS</span>
            <h1 className={styles.hero__title}>
              Join our community of solvers
            </h1>
            <p className={styles.hero__description}>
              You’re an analyst. An economist. A technologist. An accountant. An
              innovator. A storyteller. At SAS, you’ll join an unexpected mix of
              people coming together to build trust in society and solve
              important problems.
            </p>
            <strong className={styles.hero__subtitle}>
              Be a part of our team
            </strong>
            <Button
              as='a'
              icon='thick-arrow'
              variant='text'
              className={styles.hero__cta}
            >
              Find your career with SAS
            </Button>
          </div>
        </div>
        <div className={styles.hero__col}></div>
      </div>
    </section>
  )
}

export default CareerHeroSection
