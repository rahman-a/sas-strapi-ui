import React, {
  useEffect,
  useRef,
  useState,
  TouchEvent,
  DragEvent,
} from 'react'
import styles from './Image-Cube.module.scss'
import classnames from 'classnames'
import { Cube } from '../../icons'

type EventType = DragEvent<HTMLDivElement> | TouchEvent<HTMLDivElement>

interface imageCubeProps {
  images: {
    id: number
    firstImage: string
    secondImage: string
    thirdImage: string
    fourthImage: string
  }
}

const ImageCube = ({ images }: imageCubeProps) => {
  const cubeRef = useRef<HTMLDivElement>(null)
  const [transformX, setTransformX] = useState(0)
  const [transformY, setTransformY] = useState(0)
  const dragElement = useRef<HTMLDivElement>(null)
  const cubeIconRef = useRef<HTMLSpanElement>(null)
  const cubeFaceClasses = (num: number) => {
    return classnames(styles.cube__face, styles[`cube__face--${num}`])
  }
  const rotateCube = (e: EventType, type: string) => {
    e.currentTarget.style.cursor = 'grabbing'
    const { current } = cubeRef
    let clientX, clientY
    if (current) {
      const { offsetWidth, offsetHeight } = current
      if (type === 'touch') {
        clientX = (e as TouchEvent<HTMLDivElement>).touches[0].clientX
        clientY = (e as TouchEvent<HTMLDivElement>).touches[0].clientY
      } else {
        clientX = (e as DragEvent<HTMLDivElement>).clientX
        clientY = (e as DragEvent<HTMLDivElement>).clientY
      }
      const x = (clientX / offsetWidth) * 360
      const y = (clientY / offsetHeight) * 360
      y > 0 && setTransformY(y)
      x > 0 && setTransformX(x)
      e.currentTarget.style.transform = `translate(-50%, -50%) translate3d(${y}px, ${x}px, 0px)`
    }
  }
  const convertMouseToGrabbing = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.cursor = 'grabbing'
    cubeIconRef.current && (cubeIconRef.current.style.visibility = 'hidden')
    cubeRef.current &&
      (cubeRef.current.style.transform = `translate3d(0,0,0) rotateX(${transformY}deg)`)
  }

  const preserveCubeState = (e: EventType, type: string) => {
    e.currentTarget.style.cursor = 'grab'
    cubeIconRef.current && (cubeIconRef.current.style.visibility = 'visible')
    cubeRef.current &&
      (cubeRef.current.style.transform = `rotateX(${transformY}deg)`)
    dragElement.current &&
      (dragElement.current.style.transform = `translate(-50%, -50%)`)
  }

  const rotateCubeOnDrag = (e: React.DragEvent<HTMLDivElement>) =>
    rotateCube(e, 'drag')
  const rotateCubeOnTouch = (e: React.TouchEvent<HTMLDivElement>) =>
    rotateCube(e, 'touch')
  const preserveCubeOnDrag = (e: React.DragEvent<HTMLDivElement>) =>
    preserveCubeState(e, 'drag')
  const preserveCubeOnTouch = (e: React.TouchEvent<HTMLDivElement>) =>
    preserveCubeState(e, 'touch')

  useEffect(() => {
    const { current } = cubeRef
    if (current) {
      current.style.transform = `rotateX(${transformY}deg)`
    }
  }, [transformY])
  return (
    <div className={styles.cube}>
      <div className={styles.cube__wrapper}>
        <div className={styles.cube__faces} ref={cubeRef}>
          {images.firstImage && (
            <div
              className={cubeFaceClasses(1)}
              style={{ backgroundImage: `url(${images.firstImage})` }}
            ></div>
          )}
          {images.secondImage && (
            <div
              className={cubeFaceClasses(2)}
              style={{ backgroundImage: `url(${images.secondImage})` }}
            ></div>
          )}
          {images.thirdImage && (
            <div
              className={cubeFaceClasses(3)}
              style={{ backgroundImage: `url(${images.thirdImage})` }}
            ></div>
          )}
          {images.fourthImage && (
            <div
              className={cubeFaceClasses(4)}
              style={{ backgroundImage: `url(${images.fourthImage})` }}
            ></div>
          )}
        </div>
      </div>
      <div
        className={styles.cube__dragger}
        ref={dragElement}
        draggable
        onMouseDown={convertMouseToGrabbing}
        onTouchMove={rotateCubeOnTouch}
        onTouchEnd={preserveCubeOnTouch}
        onDrag={rotateCubeOnDrag}
        onDragEnd={preserveCubeOnDrag}
      >
        <span className={styles.cube__icon} ref={cubeIconRef}>
          <Cube />
        </span>
      </div>
    </div>
  )
}

export default ImageCube
