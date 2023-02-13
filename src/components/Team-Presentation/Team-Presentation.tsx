import { MeetCard } from '@components/Cards'
import DetailsSection from '@components/Details-Section/Details-Section'
import React from 'react'
import styles from './Team-Presentation.module.scss'
import { Team } from '@customTypes/Teams'

interface TeamPresentationProps {
  team: Team
}

const TeamPresentation = ({ team }: TeamPresentationProps) => {
  return (
    <section className={styles.presentation}>
      <div className={styles.presentation__row}>
        <div className={styles.presentation__col}>
          <div className={styles.careers__float}>
            <span className={styles['careers__float--1']}></span>
            <span className={styles['careers__float--2']}></span>
            <span className={styles['careers__float--3']}></span>
            <span className={styles['careers__float--4']}></span>
          </div>
          <DetailsSection
            data={{
              id: team.id,
              title: team.title,
              content: team.content,
            }}
            className={styles.presentation__description}
          />
        </div>
        {team.members.map((member) => (
          <div key={member.id} className={styles.presentation__col}>
            <MeetCard member={member} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default TeamPresentation
