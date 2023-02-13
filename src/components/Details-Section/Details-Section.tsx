import React, { FunctionComponent } from 'react'
import styles from './Details-Section.module.scss'
import classnames from 'classnames'
import parse from 'html-react-parser'
import { Data } from '@customTypes/Details-Section'
import { ButtonType } from '@customTypes/Button'
import { Button } from '../ui'
import AsComponent from './AsComponents'
import ImageComponent from './Image-Component'
import VideoComponent from './Video-Component'
import QuoteComponent from './Quote-Component'

interface DetailsSectionProps {
  style?: React.CSSProperties
  data?: Data
  className?: string
  as?: 'div' | 'a'
  btnProps?: ButtonType
  reverse?: boolean
  children?: React.ReactNode
  id?: string
}

const DetailsSection: FunctionComponent<DetailsSectionProps> = ({
  style,
  data,
  className,
  btnProps,
  as,
  reverse,
  children,
  id,
}) => {
  const detailsClasses = classnames(styles.details, {
    [className as string]: className,
  })

  const detailsWrapperClasses = classnames(styles.details__wrapper, {
    [styles.details__wrapper_reverse]: reverse,
  })

  return (
    <section className={detailsClasses} style={style}>
      <AsComponent href={data?.link} className={detailsWrapperClasses} as={as}>
        {data?.image && <ImageComponent image={data.image} />}
        {data?.video && <VideoComponent video={data.video} />}
        {data?.quote && <QuoteComponent quote={data.quote} />}
        {children && children}
        <div className={styles.details__row}>
          <div className={styles.details__content}>
            {data?.title && (
              <h2 className={styles.details__title} id={id}>
                {data.title}
              </h2>
            )}
            <div className={styles.details__text}>
              {parse(data?.content as string)}
            </div>
            {data?.link && (
              <Button
                as='a'
                href={data.link || ''}
                style={{ marginTop: '1rem', display: 'inline-block' }}
                {...btnProps}
              >
                {data.label}
              </Button>
            )}
          </div>
        </div>
      </AsComponent>
    </section>
  )
}

export default DetailsSection
