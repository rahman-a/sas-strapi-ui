import Image from 'next/image'
import React, { FunctionComponent } from 'react'
import styles from './Advantage-Card.module.scss'

type Card = {
  _id: string
  title: string
  text: string
  image?: string
  url: string
}

interface AdvantageCardProps {
  card: Card
  className?: string
}

const AdvantageCard: FunctionComponent<AdvantageCardProps> = ({
  card,
  className,
}) => {
  return (
    <article className={`${styles.card} ${className ? className : ''}`}>
      <a href={card.url} className={styles.card__wrapper}>
        {card.image && (
          <figure className={styles.card__image}>
            <Image src={card.image} alt='Advantage card' fill />
          </figure>
        )}
        <div className={styles.card__content}>
          <h3 className={styles.card__title}>{card.title}</h3>
          <p className={styles.card__text}>{card.text}</p>
        </div>
      </a>
    </article>
  )
}

export default AdvantageCard
