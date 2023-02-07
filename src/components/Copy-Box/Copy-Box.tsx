import React, { FunctionComponent, useEffect, useRef, useState } from 'react'
import styles from './Copy-Box.module.scss'
import classnames from 'classnames'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { Close, RightArrow, Check } from '../icons'

interface CopyBoxProps {
  link: string
  show: boolean
  setShow: React.Dispatch<React.SetStateAction<boolean>>
}

const CopyBox: FunctionComponent<CopyBoxProps> = ({ link, show, setShow }) => {
  const [isCopied, setIsCopied] = useState(false)
  const linkRef = useRef<HTMLInputElement>(null)

  const copyContent = (
    <CopyToClipboard text={link} onCopy={() => setIsCopied(true)}>
      <a className={styles.box__link}>
        <span>Copy Link</span>
        <RightArrow />
      </a>
    </CopyToClipboard>
  )

  const copiedNotice = (
    <p className={styles.box__copied}>
      <Check />
      Link copied to clipboard
    </p>
  )

  const boxClasses = classnames(styles.box, {
    [styles['box--visible']]: show,
  })

  const closeBoxHandler = (e: React.SyntheticEvent) => {
    e.stopPropagation()
    setShow(false)
    setIsCopied(false)
  }

  useEffect(() => {
    if (isCopied) {
      linkRef.current?.select()
      setTimeout(() => setIsCopied(false), 3000)
    }
  }, [isCopied])
  return (
    <div className={boxClasses}>
      <span onClick={closeBoxHandler}>
        <Close />
      </span>
      <input type='text' defaultValue={link} ref={linkRef} />
      {isCopied ? copiedNotice : copyContent}
    </div>
  )
}

export default CopyBox
