import React, { FunctionComponent } from 'react'
import styles from './Staff-Card.module.scss'
import { Staff } from '@customTypes/Staff'
import Image from 'next/legacy/image'

interface StaffCardProps {
  staff: Staff
}

const StaffCard: FunctionComponent<StaffCardProps> = ({ staff }) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__wrapper}>
        <figure className={styles.card__photo}>
          <Image
            src={staff.photo || ''}
            width={100}
            height={100}
            alt='staff'
            layout='fixed'
          />
        </figure>
        <div className={styles.card__content}>
          <h3 className={styles.card__name}>
            <a href='#'>{staff.name}</a>
          </h3>
          <p className={styles.card__role}>{staff.role}</p>
          {staff.tel && (
            <p className={styles.card__tel}>
              <span>Tel:&nbsp;</span>
              <a href={`tel:${staff.tel}`}>{staff.tel}</a>
            </p>
          )}
          <div className={styles.card__contact}>
            {staff.email && (
              <a
                href={`mailto:${staff.email}`}
                className={styles.card__social_email}
                target='_blank'
                rel='noreferrer'
              >
                Email
              </a>
            )}
            {staff.social && staff.social.length > 0 && (
              <div className={styles.card__social}>
                {staff.social.map((social) => {
                  return (
                    <a
                      key={social.id}
                      href='#'
                      className={styles.card__social_link}
                      target='_blank'
                      rel='noreferrer'
                    >
                      <Image
                        src={`/images/staff/${social.media?.toLocaleLowerCase()}.gif`}
                        width={20}
                        height={20}
                        alt='social'
                      />
                    </a>
                  )
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default StaffCard
