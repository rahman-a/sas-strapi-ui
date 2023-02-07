import React, { FunctionComponent } from 'react'
import styles from './More-Card.module.scss'
import { Button } from '@components/ui'
import { Card } from '@customTypes/Section'

interface MoreCardProps {
  card: Card
}

const MoreCard: FunctionComponent<MoreCardProps> = ({ card }) => {
  return (
    <div className={styles.card}>
      <h2>{card.title}</h2>
      <p>{card.content}</p>
      <Button as='a' href={card.link} variant='gray-outlined'>
        {card.label}
      </Button>
    </div>
  )
}

export default MoreCard
