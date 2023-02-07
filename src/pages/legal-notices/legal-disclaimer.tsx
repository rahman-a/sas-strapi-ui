import React from 'react'
import styles from '@styles/pages/legal-notices.module.scss'
import { HeroSection } from '@components'
import { Section } from '@components/Layout'
import classnames from 'classnames'
import Link from 'next/link'

const heroData = {
  _id: '10',
  title: 'Legal disclaimer',
  'short-url': 'https://sas.to/2Vg9Z7d',
}

const LegalDisclaimer = () => {
  return (
    <div className={styles.legal__disclaimer}>
      <HeroSection data={heroData} className={styles.legal__hero} />
      <Section>
        <p className={styles.legal__updated}>
          This statement was last updated &nbsp;
          <strong>June 14, 2018.</strong>
        </p>
      </Section>
      <div className={styles.legal__disclaimer_content}>
        <article className={styles.legal__article}>
          <div className={styles.legal__content}>
            <p className={styles.legal__par}>
              The information contained in this site is for general guidance on
              matters of interest only. The application and impact of laws can
              vary widely based on the specific facts involved. Given the
              changing nature of laws, rules and regulations, and the inherent
              hazards of electronic communication, there may be delays,
              omissions or inaccuracies in information contained in this site.
              Accordingly, the information on this site is provided with the
              understanding that the authors and publishers are not herein
              engaged in rendering legal, accounting, tax, or other professional
              advice and services. As such, it should not be used as a
              substitute for consultation with professional accounting, tax,
              legal or other competent advisers. Before making any decision or
              taking any action, you should consult a SAS professional.
            </p>
            <p className={styles.legal__par}>
              While we have made every attempt to ensure that the information
              contained in this site has been obtained from reliable sources,
              SAS is not responsible for any errors or omissions, or for the
              results obtained from the use of this information. All information
              in this site is provided &quot;as is&quot;, with no guarantee of
              completeness, accuracy, timeliness or of the results obtained from
              the use of this information, and without warranty of any kind,
              express or implied, including, but not limited to warranties of
              performance, merchantability and fitness for a particular purpose.
              In no event will SAS, its related partnerships or corporations, or
              the partners, agents or employees thereof be liable to you or
              anyone else for any decision made or action taken in reliance on
              the information in this Site or for any consequential, special or
              similar damages, even if advised of the possibility of such
              damages.
            </p>
            <p className={styles.legal__par}>
              Certain links in this site connect to other websites maintained by
              third parties over whom SAS has no control. SAS makes no
              representations as to the accuracy or any other aspect of
              information contained in other websites.
            </p>
          </div>
        </article>
      </div>
      {/* Related Article */}
      <Section
        title='Related Content'
        className={styles.legal__related_section}
      >
        <div className={styles.legal__related}>
          <article className={styles.legal__card}>
            <h2 className={styles.legal__card_title}>
              <Link href='/legal-notices/cookie-policy'>
                <a>Cookie policy</a>
              </Link>
            </h2>
            <p className={styles.legal__card_par}>
              Our cookie policy gives information about the cookies that we use,
              as well as options for managing your cookie preferences.
            </p>
          </article>
          <article className={styles.legal__card}>
            <h2 className={styles.legal__card_title}>
              <Link href='/legal-notices/legal-disclaimer'>
                <a>Legal disclaimer</a>
              </Link>
            </h2>
            <p className={styles.legal__card_par}>
              Our legal disclaimer explains the limitations and appropriate use
              of the information contained in our websites and marketing
              communications.
            </p>
          </article>
          <article className={styles.legal__card}>
            <h2 className={styles.legal__card_title}>
              <Link href='/legal-notices/privacy-policy'>
                <a>Our privacy commitment</a>
              </Link>
            </h2>
            <p className={styles.legal__card_par}>
              These policies explain how we collect, use and protect your
              personal information collected online.
            </p>
          </article>
        </div>
      </Section>
    </div>
  )
}

export default LegalDisclaimer
