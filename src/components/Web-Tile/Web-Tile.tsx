import React, { FunctionComponent } from 'react'
import styles from './Web-Tile.module.scss'
import classnames from 'classnames'
import { RightArrow } from '../icons'
import Image from 'next/legacy/image'
import { WebTile } from '@customTypes/Layout'

interface WebTileProps {
  tile: WebTile
  style?: React.CSSProperties
  className?: string
}

const WebTile: FunctionComponent<WebTileProps> = ({
  tile,
  style,
  className,
}) => {
  const tileClasses = classnames(styles.tile, {
    [className as string]: className,
  })
  return (
    <div className={tileClasses} style={style}>
      <a href={tile.link} className={styles.tile__wrapper}>
        <div className={styles.tile__icon}>
          <Image
            src={tile.icon}
            alt='icon'
            width={50}
            height={50}
            layout='fixed'
          />
        </div>
        <div className={styles.tile__content}>
          <p className={styles.tile__title}>{tile.title}</p>
          <h2 className={styles.tile__description}>
            {tile.subtitle}
            <span>
              <RightArrow />
            </span>
          </h2>
        </div>
      </a>
    </div>
  )
}

export default WebTile
