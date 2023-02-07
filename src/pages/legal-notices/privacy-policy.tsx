import React from 'react'
import classnames from 'classnames'
import Link from 'next/link'
import styles from '@styles/pages/legal-notices.module.scss'
import { HeroSection } from '@components'
import { Section } from '@components/Layout'
import { FloatPageIndex } from '@components/ui'
import indexData from '@data/legal-float-index.json'

const heroData = {
  _id: '5',
  title: 'Privacy Statement',
  'short-url': 'https://sas.to/39FTEO5',
}

const PrivacyPolicy = () => {
  const headerClasses = classnames(
    styles.legal__header,
    'scroll-article-content'
  )
  const subheaderClasses = classnames(
    styles.legal__subheader,
    'scroll-article-content'
  )
  return (
    <>
      <FloatPageIndex
        indexData={indexData.privacy.index}
        scrollItemsClassName={indexData.privacy.className}
      />
      <div className={styles.legal__privacy}>
        <HeroSection data={heroData} className={styles.legal__hero} />
        <Section>
          <p className={styles.legal__updated}>
            This privacy statement was last updated on &nbsp;
            <strong>6th November 2020</strong>
          </p>
        </Section>
        <article className={styles.legal__article}>
          <div className={styles.legal__content}>
            <h2 className={headerClasses} id='introduction'>
              Introduction
            </h2>
            <p className={styles.legal__par}>
              SAS is strongly committed to protecting personal data. This
              privacy statement describes why and how we collect and use
              personal data and provides information about individuals’ rights
              in relation to personal data. It applies to personal data provided
              to us, both by individuals themselves or by others. We may use
              personal data provided to us for any of the purposes described in
              this privacy statement or as otherwise stated at the point of
              collection.
            </p>
            <p className={styles.legal__par}>
              As used in this privacy statement, “SAS”, “us”, and “we” refer to
              the SAS network and/or one or more of its Member Firms that may
              process your personal information. Each Member Firm in the SAS
              network is a separate legal entity. The data controllers of your
              personal information are one or more of the Member Firms listed
              here at
              <Link href='/about/corporate-governance/legal-entities'>
                <a className={styles.legal__link}>
                  https://www.sas.com/about/corporate-governance/legal-entities.
                </a>
              </Link>
              For further details, please see
              <Link href='/about/network-structure'>
                <a className={styles.legal__link}>www.sas.com/structure.</a>
              </Link>
              See
              <Link href='/about/office-locations'>
                <a className={styles.legal__link}>
                  http://www.sas.com/about/office-locations
                </a>
              </Link>
              for a list of countries and regions in which SAS Member Firms
              operate.
            </p>
            <p className={styles.legal__par}>
              This privacy statement also applies to personal data that may be
              provided to Strategy&, SAS &apos s global strategy consulting
              firm, whether by individuals themselves or by others. Strategy&
              may use personal information for any of the reasons described in
              this statement or as otherwise stated at the point of data
              collection. Strategy& is part of the SAS Network.
            </p>
            <p className={styles.legal__par}>
              SAS processes personal data for numerous purposes. Our policy is
              to be transparent about why and how we process personal data.
            </p>
            <p className={styles.legal__par}>
              Click on the links in our index to take you to the more detailed
              sections of this privacy statement.
            </p>
            <p className={styles.legal__par}>
              To find out more about our specific processing activities, go to
              our processing activities.
            </p>
          </div>
        </article>
        {/* //////////////////////////////////////// */}
        <article className={styles.legal__article} data-bg>
          <div className={styles.legal__content}>
            <h2 className={headerClasses} id='personal-data'>
              Our legal grounds for processing your personal data
            </h2>
            <p className={styles.legal__par}>
              Your local law may require us to set out in this privacy statement
              the legal grounds on which we rely in order to process your
              personal information. In such cases, we rely on one or more of the
              following processing conditions:
            </p>
            <ul className={styles.legal__list}>
              <li className={styles.legal__item}>
                our legitimate interests in the effective delivery of
                information and services to you and in the effective and lawful
                operation of our businesses and the legitimate interests of our
                clients in receiving professional services from us as part of
                running their organisation (provided these do not interfere with
                your rights);
              </li>
              <li className={styles.legal__item}>
                our legitimate interests in developing and improving our
                businesses, services and offerings and in developing new SAS
                technologies and offerings (provided these do not interfere with
                your rights);
              </li>
              <li className={styles.legal__item}>
                to satisfy any requirement of law, regulation or professional
                body of which we are a member (for example, for some of our
                services, we have a legal obligation to provide the service in a
                certain way);
              </li>
              <li className={styles.legal__item}>
                to perform our obligations under a contractual arrangement with
                you; or
              </li>
              <li className={styles.legal__item}>
                where no other processing condition is available, if you have
                agreed to us processing your personal information for the
                relevant purpose.
              </li>
            </ul>
          </div>
        </article>
        {/* //////////////////////////////////////// */}
        <article className={styles.legal__article} data-bg>
          <div className={styles.legal__content}>
            <h2 className={headerClasses}>Transfers of personal data</h2>
            <h3 className={subheaderClasses}>Cross-border transfers</h3>
            <p className={styles.legal__par}>
              If we process your personal information, your personal information
              may be transferred to and stored outside the country where you are
              located. This includes countries outside the European Economic
              Area (EEA) and countries that do not have laws that provide
              specific protection for personal information
            </p>
            <p className={styles.legal__par}>
              Where we collect your personal information within the EEA,
              transfer outside the EEA will be only:
            </p>
            <ul className={styles.legal__list}>
              <li className={styles.legal__item}>
                to a recipient located in a country which provides an adequate
                level of protection for your personal information; and/or
              </li>
              <li className={styles.legal__item}>
                under an agreement which satisfies EU requirements for the
                transfer of personal data to data processors or data controllers
                outside the EEA, such as standard contractual clauses approved
                by the European Commission.
              </li>
            </ul>
            <h3 className={subheaderClasses}>Other SAS Member Firms</h3>
            <p className={styles.legal__par}>
              For details of SAS Member Firm locations, please see
              <Link href='/about/office-locations'>
                <a className={styles.legal__link}>
                  http://www.sas.com/about/office-locations.
                </a>
              </Link>
            </p>
            <p className={styles.legal__par}>
              We may share personal data with other SAS member firms where
              necessary in connection with the purposes described in this
              privacy statement. For example, when providing professional
              services to a client we may share personal information with SAS
              Member Firms in different territories that are involved in
              providing advice to that client
            </p>
            <h3 className={subheaderClasses}>Third Party Providers</h3>
            <p className={styles.legal__par}>
              We may transfer or disclose the personal data we collect to third
              party contractors, subcontractors, and/or their subsidiaries and
              affiliates. Third parties support the SAS Network in providing its
              services and help provide, run and manage IT systems. Examples of
              third party contractors we use are providers of identity
              management, website hosting and management, data analysis, data
              backup, security and cloud storage services. The servers powering
              and facilitating our IT infrastructure are located in secure data
              centres around the world, and personal data may be stored in any
              one of them.
            </p>
            <p className={styles.legal__par}>
              The third party providers may use their own third party
              subcontractors that have access to personal data (sub-processors).
              It is our policy to use only third party providers that are bound
              to maintain appropriate levels of security and confidentiality, to
              process personal information only as instructed by SAS, and to
              flow those same obligations down to their sub-processors.
            </p>
            <h3 className={subheaderClasses}>Other disclosures</h3>
            <p className={styles.legal__par}>
              We may also disclose personal information under the following
              circumstances:
            </p>
            <ul className={styles.legal__list}>
              <li className={styles.legal__item}>
                with professional advisers, for example, law firms, as necessary
                to establish, exercise or defend our legal rights and obtain
                advice in connection with the running of our business. Personal
                data may be shared with these advisers as necessary in
                connection with the services they have been engaged to provide;
              </li>
              <li className={styles.legal__item}>
                when explicitly requested by you;
              </li>
              <li className={styles.legal__item}>
                when required to deliver publications or reference materials
                requested by you;
              </li>
              <li className={styles.legal__item}>
                when required to facilitate conferences or events hosted by a
                third party;
              </li>
              <li className={styles.legal__item}>
                To law enforcement, regulatory and other government agencies and
                to professional bodies, as required by and/or in accordance with
                applicable law or regulation. SAS may also review and use your
                personal information to determine whether disclosure is required
                or permitted.
              </li>
            </ul>
          </div>
        </article>
        {/* //////////////////////////////////////// */}
        <article className={styles.legal__article}>
          <div className={styles.legal__row} style={{ padding: '2rem 5rem' }}>
            <div className={styles.legal__col}>
              <h3 className={subheaderClasses} id='processing-activities'>
                Our processing activities
              </h3>
              <p className={styles.legal__par} style={{ fontSize: '1.6rem' }}>
                To find out more please go to the sections of this statement
                that are relevant to you
              </p>
            </div>
            <div className={styles.legal__col}>
              <div className={styles.legal__row}>
                <div className={styles.legal__col}>
                  <div className={styles.legal__explore}>
                    <ul className={styles.legal__explore_list}>
                      {/* Explore Legal Item */}
                      <li className={styles.legal__explore_item}>
                        <Link href='/legal/privacy-statement#personal-data'>
                          <a className={styles.legal__explore_link}>
                            Business contacts
                          </a>
                        </Link>
                      </li>
                      {/* Explore Legal Item */}
                      <li className={styles.legal__explore_item}>
                        <Link href='/legal/privacy-statement#personal-data'>
                          <a className={styles.legal__explore_link}>
                            Corporate clients (and individuals associated with
                            our corporate clients)
                          </a>
                        </Link>
                      </li>
                      {/* Explore Legal Item */}
                      <li className={styles.legal__explore_item}>
                        <Link href='/legal/privacy-statement#personal-data'>
                          <a className={styles.legal__explore_link}>
                            Personal clients
                          </a>
                        </Link>
                      </li>
                      {/* Explore Legal Item */}
                      <li className={styles.legal__explore_item}>
                        <Link href='/legal/privacy-statement#personal-data'>
                          <a className={styles.legal__explore_link}>
                            Individuals who use our applications
                          </a>
                        </Link>
                      </li>
                      {/* Explore Legal Item */}
                      <li className={styles.legal__explore_item}>
                        <Link href='/legal/privacy-statement#personal-data'>
                          <a className={styles.legal__explore_link}>
                            Individuals whose personal data we obtain in
                            connection with providing professional services to
                            our clients
                          </a>
                        </Link>
                      </li>
                      {/* Explore Legal Item */}
                      <li className={styles.legal__explore_item}>
                        <Link href='/legal/privacy-statement#personal-data'>
                          <a className={styles.legal__explore_link}>Websites</a>
                        </Link>
                      </li>
                      {/* Explore Legal Item */}
                      <li className={styles.legal__explore_item}>
                        <Link href='/legal/privacy-statement#personal-data'>
                          <a className={styles.legal__explore_link}>
                            Marketing activities
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className={styles.legal__col}>
                  <div className={styles.legal__explore}>
                    <ul className={styles.legal__explore_list}>
                      {/* Explore Legal Item */}
                      <li className={styles.legal__explore_item}>
                        <Link href='/legal/privacy-statement#personal-data'>
                          <a className={styles.legal__explore_link}>
                            Others who get in touch with us
                          </a>
                        </Link>
                      </li>
                      {/* Explore Legal Item */}
                      <li className={styles.legal__explore_item}>
                        <Link href='/legal/privacy-statement#personal-data'>
                          <a className={styles.legal__explore_link}>
                            Recruitment applicants
                          </a>
                        </Link>
                      </li>
                      {/* Explore Legal Item */}
                      <li className={styles.legal__explore_item}>
                        <Link href='/legal/privacy-statement#personal-data'>
                          <a className={styles.legal__explore_link}>
                            Suppliers (including subcontractors and individuals
                            associated with our suppliers and subcontractors)
                          </a>
                        </Link>
                      </li>
                      {/* Explore Legal Item */}
                      <li className={styles.legal__explore_item}>
                        <Link href='/legal/privacy-statement#personal-data'>
                          <a className={styles.legal__explore_link}>
                            SAS Personnel (partners, staff and contractors)
                          </a>
                        </Link>
                      </li>
                      {/* Explore Legal Item */}
                      <li className={styles.legal__explore_item}>
                        <Link href='/legal/privacy-statement#personal-data'>
                          <a className={styles.legal__explore_link}>
                            Insolvencies and restructuring
                          </a>
                        </Link>
                      </li>
                      {/* Explore Legal Item */}
                      <li className={styles.legal__explore_item}>
                        <Link href='/legal/privacy-statement#personal-data'>
                          <a className={styles.legal__explore_link}>
                            Visitors to our offices
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
        {/* //////////////////////////////////////// */}
        <article className={styles.legal__article} data-bg>
          <div className={styles.legal__content}>
            <h2 className={headerClasses} id='security'>
              Security
            </h2>
            <p className={styles.legal__par}>
              We have implemented generally accepted standards of technology and
              operational security in order to protect personal information from
              loss, misuse, alteration or destruction. Only authorised persons
              are provided access to personal information; such individuals have
              agreed to maintain the confidentiality of this information.
            </p>
            <p className={styles.legal__par}>
              Although we use appropriate security measures once we have
              received your personal data, the transmission of data over the
              internet (including by e-mail) is never completely secure. We
              endeavor to protect personal data, but we cannot guarantee the
              security of data transmitted to or by us.
            </p>
          </div>
        </article>
        {/* //////////////////////////////////////// */}
        <article className={styles.legal__article}>
          <div className={styles.legal__content}>
            <h2 className={headerClasses} id='legal'>
              Your legal rights in relation to personal data
            </h2>
            <p className={styles.legal__par}>
              You may have certain rights under your local law in relation to
              the personal information we hold about you. In particular, you may
              have a legal right to:
            </p>
            <ul className={styles.legal__list}>
              <li className={styles.legal__item}>
                obtain confirmation as to whether we process personal data about
                you, receive a copy of your personal data and obtain certain
                other information about how and why we process your personal
                data
              </li>
              <li className={styles.legal__item}>
                the right to request for your personal data to be amended or
                rectified where it is inaccurate (for example, if you change
                your address) and to have incomplete personal data completed
              </li>
              <li className={styles.legal__item}>
                The right to delete your personal data in the following cases:
                <ul className={styles.legal__sublist}>
                  <li className={styles.legal__subitem}>
                    the personal data is no longer necessary in relation to the
                    purposes for which they were collected and processed;
                  </li>
                  <li className={styles.legal__subitem}>
                    our legal ground for processing is consent, you withdraw
                    consent and we have no other lawful basis for the
                    processing;
                  </li>
                  <li className={styles.legal__subitem}>
                    our legal ground for processing is that the processing is
                    necessary for legitimate interests pursued by us or a third
                    party, you object to the processing and we do not have
                    overriding legitimate grounds;
                  </li>
                  <li className={styles.legal__subitem}>
                    you object to processing for direct marketing purposes;
                  </li>
                  <li className={styles.legal__subitem}>
                    your personal data has been unlawfully processed; or
                  </li>
                  <li className={styles.legal__subitem}>
                    your personal data must be erased to comply with a legal
                    obligation to which we are subject.
                  </li>
                </ul>
              </li>
              <li className={styles.legal__item}>
                The right to restrict personal data processing in the following
                cases:
                <ul className={styles.legal__sublist}>
                  <li className={styles.legal__subitem}>
                    for a period enabling us to verify the accuracy of personal
                    data where you contested the accuracy of the personal data;
                  </li>
                  <li className={styles.legal__subitem}>
                    your personal data have been unlawfully processed and you
                    request restriction of processing instead of deletion;
                  </li>
                  <li className={styles.legal__subitem}>
                    your personal data are no longer necessary in relation to
                    the purposes for which they were collected and processed but
                    the personal data is required by you to establish, exercise
                    or defend legal claims; or
                  </li>
                  <li className={styles.legal__subitem}>
                    for a period enabling us to verify whether the legitimate
                    grounds relied on by us override your interests where you
                    have objected to processing based on it being necessary for
                    the pursuit of a legitimate interest identified by us.
                  </li>
                </ul>
              </li>
              <li className={styles.legal__item}>
                The right to object to the processing of your personal data in
                the following cases:
              </li>
              <li className={styles.legal__item}>
                The right to data portability
              </li>
              <li className={styles.legal__item}>
                The right to withdraw consent
              </li>
              <li className={styles.legal__item}>
                If you consider that the processing of your personal data
                infringes the law, you may have the right to lodge a complaint
                with the data protection regulatory authority responsible for
                enforcement of data protection law in the country where you
                normally reside or work, or in the place where the alleged
                infringement occurred.
              </li>
            </ul>
          </div>
        </article>
        {/* //////////////////////////////////////// */}
        <article className={styles.legal__article} data-bg>
          <div className={styles.legal__content}>
            <h3 className={subheaderClasses} id='contact'>
              Contact
            </h3>
            <ul className={styles.legal__list}>
              <li className={styles.legal__item}>
                Please
                <Link href='#'>
                  <a className={styles.legal__link}>submit a request</a>
                </Link>
                to exercise a legal right in relation to your personal data, or
                an
                <Link href='#'>
                  <a className={styles.legal__link}>enquiry</a>
                </Link>
                if you have a question or complaint about the handling of your
                personal data.
              </li>
              <li className={styles.legal__item}>
                <Link href='#'>
                  <a className={styles.legal__link}>Request</a>
                </Link>
                to delete your sas.com or 365 app account. This process may take
                up to 30 days.
              </li>
              <li className={styles.legal__item}>
                For anything else, please use our{' '}
                <Link href='#'>
                  <a className={styles.legal__link}>general contact form.</a>
                </Link>
              </li>
            </ul>
            <p className={styles.legal__par}>
              You may also contact us at the following postal address:
            </p>
            <address className={styles.legal__address}>
              <p>
                <strong>PricewaterhouseCoopers LLP</strong>
              </p>
              <p>
                <strong>One Embankment Place</strong>
              </p>
              <p>
                <strong>London</strong>
              </p>
              <p>
                <strong>WC2N 6RH</strong>
              </p>
              <p>
                <strong>UK</strong>
              </p>
            </address>
          </div>
        </article>
      </div>
    </>
  )
}

export default PrivacyPolicy
