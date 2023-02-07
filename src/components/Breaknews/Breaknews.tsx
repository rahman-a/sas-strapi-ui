import React, { FunctionComponent } from 'react'
import styles from './Breaknews.module.scss'
import { Announcement } from '@customTypes/Layout'
import { Button } from '../ui'

interface BreakNewsProps {
  announcement: Announcement
}

const BreakNews: FunctionComponent<BreakNewsProps> = ({ announcement }) => {
  return (
    <div className={styles.breaknews}>
      <a href={announcement.href || '#'} className={styles.breaknews__wrapper}>
        <div className={styles.breaknews__data}>
          <h2>{announcement.title}</h2>
          <Button
            variant='primary-outlined'
            icon
            className={styles.breaknews__wrapper_btn}
          >
            {announcement.button}
          </Button>
        </div>
        <div className={styles.breaknews__decorator}>
          <span></span>
          <span className={styles.breaknews__decorator_sqh}></span>
          <span className={styles.breaknews__decorator_sqh}></span>
          <span></span>
          <span className={styles.breaknews__decorator_sqs}></span>
          <span className={styles.breaknews__decorator_sqs}></span>
          <span></span>
        </div>
      </a>
    </div>
  )
}

export default BreakNews
