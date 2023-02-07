import React, { FunctionComponent } from 'react'
import Image from 'next/legacy/image'
import styles from './Social-Media.module.scss'
import { Social, SocialPlatform } from '@customTypes/Layout'

interface SocialProps {
  social: Social
}

const SocialMedia: FunctionComponent<SocialProps> = ({ social }) => {
  return (
    <div className={styles.social}>
      <div className={styles.social__wrapper}>
        <h2 className={styles.social__title}>Follow us</h2>
        <ul className={styles.social__list}>
          {social?.platforms.map((item: SocialPlatform) => (
            <li key={item.id} className={styles.social__item}>
              <a href={item.link} className={styles.social__link}>
                <Image
                  width={25}
                  height={25}
                  src={item.icon}
                  alt={item.name}
                  layout='fixed'
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default SocialMedia
