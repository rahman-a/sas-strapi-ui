import React, { FunctionComponent, useEffect, useState } from 'react'
import styles from './Page-Loader.module.scss'

interface PageLoaderProps {
  handlerRouting?: () => void
  time?: number
}

const PageLoader: FunctionComponent<PageLoaderProps> = ({
  handlerRouting,
  time,
}) => {
  const [loaderWidth, setLoaderWidth] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  const progressLoaderWidthHandler = () => {
    let loaderTimeout = setTimeout(frameProgress, 10)
    function frameProgress() {
      if (loaderWidth >= 100) {
        clearTimeout(loaderTimeout)
        const endProgress = setTimeout(() => {
          setIsVisible(false)
          setLoaderWidth(0)
          clearTimeout(endProgress)
        }, 500)
        return
      }
      setLoaderWidth((prev) => prev + 0.1)
    }
  }

  useEffect(() => {
    loaderWidth && progressLoaderWidthHandler()
  }, [loaderWidth])

  useEffect(() => {
    progressLoaderWidthHandler()
  }, [])

  const stylesProps = {
    width: `${loaderWidth}%`,
    display: isVisible ? 'block' : 'none',
  }
  return (
    <div className={styles.loader} style={stylesProps}>
      <div className={styles.loader__inner}></div>
    </div>
  )
}

export default PageLoader
