import React, { FunctionComponent } from 'react'
import styles from './Image-Card.module.scss'
import classnames from 'classnames'
import { Card } from '@customTypes/Section'

interface ImageCardProps {
  style?: React.CSSProperties
  className?: string
  card: Card
}

const ImageCard: FunctionComponent<ImageCardProps> = ({
  style,
  className,
  card,
}) => {
  const cardClass = classnames(styles.card, className)
  const imageStyle = {
    backgroundImage: `url(${card.image})`,
    ...style,
  }
  return (
    <div className={cardClass} style={imageStyle}>
      <a href={card.link || ''} className={styles.card__wrapper}>
        <div className={styles.card__content}>
          <h2>{card.title}</h2>
          <p>{card.content}</p>
        </div>
      </a>
    </div>
  )
}

export default ImageCard
