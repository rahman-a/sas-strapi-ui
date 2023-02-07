import classnames from 'classnames'
import React, { FunctionComponent } from 'react'
import styles from './Section.module.scss'

interface SectionProps {
  style?: React.CSSProperties
  className?: string
  wrapperClassName?: string
  title?: string
  children: React.ReactNode
}

const Section: FunctionComponent<SectionProps> = ({
  children,
  style,
  className,
  wrapperClassName,
  title,
}) => {
  const sectionClasses = classnames(styles.section, {
    [className as string]: className,
  })

  const wrapperClasses = classnames(styles.section__wrapper, {
    [wrapperClassName as string]: wrapperClassName,
  })

  return (
    <section className={sectionClasses} style={style}>
      {title && <h2 className={styles.section__title}>{title}</h2>}
      <div className='container'>
        <div className={wrapperClasses}>{children}</div>
      </div>
    </section>
  )
}

export default Section
