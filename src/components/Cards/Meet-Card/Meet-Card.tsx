import { Button } from '@components/ui'
import Image from 'next/legacy/image'
import React, { FunctionComponent, useEffect, useState } from 'react'
import styles from './Meet-Card.module.scss'
import { Member } from '@customTypes/Teams'
interface MeetCardProps {
  member: Member
}

const MeetCard: FunctionComponent<MeetCardProps> = ({ member }) => {
  const [description, setDescription] = useState<string>('')
  const renderDescription = (text: string): string => {
    if (window.matchMedia('(max-width: 991.98px)').matches) {
      return text.slice(0, 100) + '...'
    }
    return text
  }

  useEffect(() => {
    if (member.quote) {
      setDescription(renderDescription(member.quote))
    }
  }, [member.quote])
  return (
    <div className={styles.card}>
      <a href={member.link} className={styles.card__wrapper}>
        <figure className={styles.card__image}>
          <Image
            src={member.photo || ''}
            alt='staff'
            width={100}
            height={100}
            layout='responsive'
          />
        </figure>
        <div className={styles.card__content}>
          <div className={styles.card__content_container}>
            <h3 className={styles.card__name}>{member.name}</h3>
            <p className={styles.card__role}>{member.role}</p>
            <p className={styles.card__description}>{description}</p>
            <p className={styles.card__cta}>
              <Button
                variant='white'
                rounded
                as='a'
                href={member.link || ''}
                style={{ display: 'inline-block', padding: '0.5rem 1.2rem' }}
              >
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
