import React, { FunctionComponent, useState } from 'react'
import { Button } from '@components/ui'
import Image from 'next/image'
import styles from './Map.module.scss'
import { Modal } from '../ui'
import { StaffCard } from '../Cards'
import { Office } from '@customTypes/Offices'
import classnames from 'classnames'

interface OfficeDetailsProps {
  office: Office
  listType: string
}

const OfficeDetails: FunctionComponent<OfficeDetailsProps> = ({
  office,
  listType,
}) => {
  const [isStaffModalOpen, setIsStaffModalOpen] = useState(false)

  const detailsClasses = classnames(styles.offices__details, {
    [styles.offices__details_show]: listType === 'details',
  })
  const showInGoogleMap = () => {
    window.open(
      'https://maps.google.com?q=' +
        office.attributes.lat +
        ',' +
        office.attributes.lng,
      '_blank'
    )
  }

  return (
    <>
      <Modal
        isOpen={isStaffModalOpen}
        onClose={() => setIsStaffModalOpen(false)}
      >
        {office.attributes?.staff.data &&
          office.attributes.staff.data.length > 0 && (
            <div className={styles.offices__staff}>
              {office.attributes.staff.data.map((staff) => (
                <StaffCard key={staff.id} staff={staff.attributes!} />
              ))}
            </div>
          )}
      </Modal>
      <div className={detailsClasses}>
        {office.attributes?.image && (
          <figure className={styles.offices__details__image}>
            <Image
              src={office.attributes.image}
              alt='office'
              layout='fill'
              objectFit='cover'
            />
          </figure>
        )}
        <div className={styles.offices__details__content}>
          <p className={styles.offices__details__address}>
            {office.attributes?.address}
          </p>
          {office.attributes?.tel && (
            <p className={styles.offices__details__phone}>
              <span>Tel: </span> {office.attributes.tel}
            </p>
          )}
          {office.attributes?.fax && (
            <p className={styles.offices__details__fax}>
              <span>Fax: </span> {office.attributes.fax}
            </p>
          )}
          {office.attributes?.staff.data &&
            office.attributes.staff.data.length > 0 && (
              <Button
                variant='primary-outlined'
                className={styles.offices__details__map}
                onClick={() => setIsStaffModalOpen(true)}
              >
                Show office staff
              </Button>
            )}
          <Button
            variant='dark-primary'
            className={styles.offices__details__map}
            onClick={showInGoogleMap}
          >
            Open in maps
          </Button>
        </div>
      </div>
    </>
  )
}

export default OfficeDetails
