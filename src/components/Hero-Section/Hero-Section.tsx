import React, { FunctionComponent, useEffect, useState } from 'react'
import styles from './Hero-Section.module.scss'
import { Share } from '../icons'
import classnames from 'classnames'
import CopyBox from '../Copy-Box/Copy-Box'
import { HeroSection } from '@customTypes/Hero-Section'

type HeroSectionProps = {
  data: HeroSection
  className?: string
  floating?: boolean
}

const HeroSection: FunctionComponent<HeroSectionProps> = ({
  data,
  className,
  floating,
}) => {
  const [show, setShow] = useState<boolean>(false)
  const [background, setBackground] = useState<string>('var(--primary-color)')

  const heroClasses = classnames(styles.hero, {
    [className as string]: className,
  })

  const heroContentClasses = classnames(styles.hero__content, {
    [styles.hero__content_floating]: floating,
  })

  useEffect(() => {
    data.image && setBackground(`url(${data.image}) no-repeat`)
  }, [data.image])
  return (
    <section
      className={heroClasses}
      style={{
        background,
      }}
    >
      <div className={heroContentClasses}>
        <h1 className={styles.hero__title}>{data.title}</h1>
        {data['subtitle'] && (
          <h2 className={styles.hero__subtitle}>{data['subtitle']}</h2>
        )}
        {data.content && <p className={styles.hero__text}>{data.content}</p>}
        {data['shorturl'] && (
          <div className={styles.hero__link}>
            <button onClick={() => setShow(true)}>
              <span>
                <Share />
              </span>
              <div className={styles.hero__link_copy}>
                <CopyBox
                  link={data['shorturl']}
                  show={show}
                  setShow={setShow}
                />
              </div>
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default HeroSection
