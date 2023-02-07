/* eslint-disable @next/next/no-img-element */

import React, { FunctionComponent } from 'react'
import styles from './Details-Section.module.scss'

type ImageComponentProps = {
  image: string
}

const ImageComponent: FunctionComponent<ImageComponentProps> = ({ image }) => {
  return (
    <div className={styles.details__row}>
      <figure className={styles.details__figure}>
        <img src={image} alt='details graph' width={100} height={100} />
      </figure>
    </div>
  )
}

export default ImageComponent
