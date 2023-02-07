import { Button } from '@components/ui'
import Image from 'next/legacy/image'
import React, { FunctionComponent, useEffect, useState } from 'react'
import styles from './Meet-Card.module.scss'

const descriptionTest = `“Amazing things can happen when people from different cultures, time zones and backgrounds are brought together to serve a common purpose.” - Rena`

type Card = {
  image: string
  name: string
  role: string
  description: string
  link: string
}

interface MeetCardProps {
  card: Card
}

const MeetCard: FunctionComponent<MeetCardProps> = ({ card }) => {
  const [description, setDescription] = useState<string>('')
  const renderDescription = (text: string): string => {
    if (window.matchMedia('(max-width: 991.98px)').matches) {
      return text.slice(0, 100) + '...'
    }
    return text
  }

  useEffect(() => {
    if (card.description) {
      setDescription(renderDescription(card.description))
    }
  }, [card])
  return (
    <div className={styles.card}>
      <a href={card.link} className={styles.card__wrapper}>
        <figure className={styles.card__image}>
          <Image
            src={card.image}
            alt='staff'
            width={100}
            height={100}
            layout='responsive'
          />
        </figure>
        <div className={styles.card__content}>
          <div className={styles.card__content_container}>
            <h3 className={styles.card__name}>{card.name}</h3>
            <p className={styles.card__role}>{card.role}</p>
            <p className={styles.card__description}>{description}</p>
            <p className={styles.card__cta}>
              <Button variant='white' rounded>
                Learn more
              </Button>
            </p>
          </div>
        </div>
      </a>
    </div>
  )
}

export default MeetCard
