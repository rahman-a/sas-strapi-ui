import React, { useState, useRef, useEffect, FunctionComponent } from 'react'
import classnames from 'classnames'
import { Close, UpArrow, UpArrowCircle } from '../icons'
import { useInView } from 'react-intersection-observer'
import styles from './Float-Container.module.scss'
import staffData from '@data/staff.json'
import { StaffCard } from '../Cards'
import { Overlay } from '../ui'

interface FloatContainerProps {
  children: React.ReactNode
}

const FloatContainer: FunctionComponent<FloatContainerProps> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isShrink, setIsShrink] = useState(false)
  const [elementHeight, setElementHeight] = useState(0)
  const staffRef = useRef<HTMLDivElement>(null)
  const { ref: detectRef, inView: isInputVisible, entry } = useInView()
  const floatClasses = classnames(styles.float__container, {
    [styles.float__visible]: isInputVisible || elementHeight < 0,
    [styles.float__open]: isOpen,
    [styles.float__shrink]: isShrink && !isOpen,
  })
  const toggleClasses = classnames(styles.float__header_toggle, {
    [styles['float__header_toggle-open']]: isOpen,
  })

  const toggleContainerHandler = () => {
    if (isInputVisible) return
    isShrink && setIsShrink(false)
    setIsOpen(!isOpen)
  }

  const hideContainerHandler = () => {
    if (isInputVisible) return

    if (isOpen) {
      setIsOpen(false)
      return
    }
    setIsShrink(!isShrink)
  }

  useEffect(() => {
    if (isOpen || isShrink) {
      staffRef.current!.style.transition = 'transform 0.5s ease-in-out'
    }
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, isShrink])

  useEffect(() => {
    if (isInputVisible) {
      setElementHeight(entry?.boundingClientRect.top!)
      setIsOpen(false)
      setIsShrink(false)
    } else {
      staffRef.current!.style.transition = 'none'
      setElementHeight(entry?.boundingClientRect.top!)
    }
  }, [isInputVisible, entry])
  return (
    <>
      <Overlay show={isOpen} />
      <section className={styles.float}>
        <div
          ref={detectRef}
          id='hidden'
          style={{ height: '100%', position: 'absolute' }}
        />
        <div className={floatClasses} ref={staffRef}>
          <div className={styles.float__header}>
            <h3>Get in touch</h3>
            <span
              className={styles.float__header_close}
              onClick={hideContainerHandler}
            >
              <Close />
              hide
            </span>
            <span
              className={styles['float__header_toggle-mobile']}
              onClick={toggleContainerHandler}
            >
              <UpArrowCircle />
            </span>
            <span className={toggleClasses} onClick={toggleContainerHandler}>
              <UpArrow />
            </span>
          </div>
          <div className={styles.float__wrapper}>{children}</div>
        </div>
      </section>
    </>
  )
}

export default FloatContainer
