import React, { FunctionComponent } from 'react'
import styles from './Button.module.scss'
import {
  LongRightArrow,
  RightArrow,
  ThickLongRightArrow,
} from '@components/icons'

interface ButtonIconProps {
  icon: 'arrow' | 'thick-arrow' | boolean
}

const ButtonIcon: FunctionComponent<ButtonIconProps> = ({ icon }) => {
  return (
    <span className={styles.btn__icon}>
      {icon === 'arrow' ? (
        <LongRightArrow />
      ) : icon === 'thick-arrow' ? (
        <ThickLongRightArrow />
      ) : (
        <RightArrow />
      )}
    </span>
  )
}

export default ButtonIcon
