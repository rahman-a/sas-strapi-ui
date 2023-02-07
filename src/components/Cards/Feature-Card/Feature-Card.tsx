import React, { FunctionComponent } from 'react'
import styles from './Feature-Card.module.scss'
import { Card } from '@customTypes/Section'

interface FeatureCardProps {
  card: Card
}

const FeatureCard: FunctionComponent<FeatureCardProps> = ({ card }) => {
  return (
    <div className={styles.card}>
      <a href={card.link} className={styles.card__wrapper}>
        <h2 className={styles.card__title}>{card.title}</h2>
        <p className={styles.card__text}>
          {card.content.length > 75
            ? card.content.slice(0, 75) + '...'
            : card.content}
        </p>
      </a>
    </div>
  )
}

export default FeatureCard
