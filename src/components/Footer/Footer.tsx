import React from 'react'
import Image from 'next/image'
import styles from './Footer.module.scss'
import Link from 'next/link'
import { Footer as FooterType } from '@customTypes/Footer'

interface FooterProps {
  footer: FooterType
}

const Footer = ({ footer }: FooterProps) => {
  return (
    <footer className={styles.footer}>
      <div className='container'>
        <div className={styles.footer__wrapper}>
          <div className={styles.footer__header}>
            {footer?.mainLinks.map((link) => (
              <Link key={link.id} href={link.href}>
                {link.label}
              </Link>
            ))}
            {/* <Link href='/about/office-locations'>SAS office locations</Link>
            <Link href='/site-map'>Site map</Link>
            <Link href='/contact-us'>Contact us</Link> */}
          </div>
          <span className={styles.footer__separator}></span>
          <div className={styles.footer__content}>
            <Image src={footer?.icon || ''} alt='logo' width={50} height={50} />
            <p className={styles.footer__text}>
              © 2022 SAS. All rights reserved.
            </p>
          </div>
          <div className={styles.footer__legal}>
            {footer?.legalLinks.map((link) => (
              <Link key={link.id} href={link.href}>
                {link.label}
              </Link>
            ))}
            {/* <Link href='/legal-notices'>Legal notices</Link>
            <Link href='/legal-notices/privacy-policy'>Privacy</Link>
            <Link href='/legal-notices/cookie-policy'>Cookie policy</Link>
            <Link href='/legal-notices/legal-disclaimer'>Legal disclaimer</Link>
            <Link href='/legal-notices/terms-and-conditions'>
              Terms and conditions
            </Link> */}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
