import React, { FunctionComponent } from 'react'
import Image from 'next/legacy/image'
import styles from './Popular-Card.module.scss'
import { Card } from '@customTypes/Section'

interface PopularCardProps {
  card: Card
  className?: string
}

const PopularCard: FunctionComponent<PopularCardProps> = ({
  card,
  className,
}) => {
  return (
    <article className={`${styles.card} ${className ? className : ''}`}>
      <a href={card.link} className={styles.card__wrapper}>
        <figure className={styles.card__figure}>
          <Image
            src={`${card.image}`}
            alt='Dam'
            width={300}
            height={200}
            layout='responsive'
          />
        </figure>
        <div className={styles.card__details}>
          <h4 title={card.title} className={styles.card__title}>
            {card.title.length > 80
              ? `${card.title.substring(0, 80)}...`
              : card.title}
          </h4>
          <p className={styles.card__description}>
            {card.content.length > 180
              ? `${card.content.substring(0, 180)}...`
              : card.content}
          </p>
        </div>
      </a>
    </article>
  )
}

export default PopularCard
