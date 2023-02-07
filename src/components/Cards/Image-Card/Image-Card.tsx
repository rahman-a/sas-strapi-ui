import React, { FunctionComponent } from 'react'
import styles from './Image-Card.module.scss'
import classnames from 'classnames'

interface ImageCardProps {
  style?: React.CSSProperties
  className?: string
}

const ImageCard: FunctionComponent<ImageCardProps> = ({ style, className }) => {
  const cardClass = classnames(styles.card, className)
  return (
    <div className={cardClass} style={style}>
      <a href='#' className={styles.card__wrapper}>
        <div className={styles.card__content}>
          <h2>Global Automotive Cyber Security Management Study</h2>
          <p>How to navigate the way to automotive cybersecurity</p>
        </div>
      </a>
    </div>
  )
}

export default ImageCard
