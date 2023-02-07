import React, { useContext } from 'react'
import Link from 'next/link'
import classnames from 'classnames'
import styles from './Logo.module.scss'
import Image from 'next/legacy/image'
import { HeaderContext } from '@context/Header-Context'

const Logo: React.FC = () => {
  const { isOpen, isDropdownOpen } = useContext(HeaderContext)

  const logoClasses = classnames(styles.logo, {
    [styles.logo__hidden]: isDropdownOpen,
  })

  return (
    <figure className={logoClasses}>
      <Link href='/'>
        <Image
          src={isOpen ? '/images/logo-white.png' : '/images/logo.png'}
          alt='logo'
          width={100}
          height={90}
        />
      </Link>
    </figure>
  )
}

export default Logo
