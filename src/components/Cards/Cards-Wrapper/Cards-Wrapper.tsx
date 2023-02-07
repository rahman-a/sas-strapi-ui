import classnames from 'classnames'
import React, { FunctionComponent } from 'react'
import styles from './Cards-Wrapper.module.scss'

interface CardsWrapperProps {
  children: JSX.Element | JSX.Element[]
  title?: string
  style?: React.CSSProperties
  className?: string
}

const CardsWrapper: FunctionComponent<CardsWrapperProps> = ({
  children,
  title,
  style,
  className,
}) => {
  const stylesValues = {
    ...style,
  }

  const wrapperClasses = classnames(styles.cards__wrapper, {
    [className as string]: className,
  })
  return (
    <div className={styles.cards} style={stylesValues}>
      {title && <h3>{title}</h3>}
      <div className={styles.cards__container}>
        <div className={wrapperClasses}>{children}</div>
      </div>
    </div>
  )
}

export default CardsWrapper
