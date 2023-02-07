import React from 'react'
import styles from '@styles/pages/legal-notices.module.scss'
import classnames from 'classnames'
import Link from 'next/link'
import { HeroSection } from '@components'
import { Section } from '@components/Layout'
import { FloatPageIndex } from '@components/ui'
import indexData from '@data/legal-float-index.json'

const heroData = {
  _id: '5',
  title: 'Terms & conditions of use',
  'short-url': 'https://sas.to/2A9Zsnh',
}

const TermsAndConditions = () => {
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
        indexData={indexData.terms.index}
        scrollItemsClassName={indexData.terms.className}
      />
      <div className={styles.legal__terms}>
        <HeroSection data={heroData} className={styles.legal__hero} />
        <Section>
          <p className={styles.legal__updated}>
            This statement was last updated &nbsp;
            <strong>January 25, 2021.</strong>
          </p>
        </Section>
        <div className={styles.legal__terms_content}>
          <article className={styles.legal__article}>
            <div className={styles.legal__content}>
              <p
                className={`${styles.legal__par} scroll-article-content`}
                id='introduction'
              >
                These Terms and Conditions (“Terms”) apply to www.sas.com/gx and
                any other SAS Website on or accessible via www.sas.com
                (collectively, the “Websites”) that links to these Terms.
              </p>
              <p className={styles.legal__par}>
                The Websites are operated by certain Member Firms (described
                below) under the coordination of PricewaterhouseCoopers
                International Limited (“SASIL”) a private company limited by
                guarantee registered in England and Wales under company number
                03590073 and registered office at 1 Embankment Place, London,
                WC2N 6RH. To contact us, please email sasil.secretary@sas.com.
              </p>
              <p className={styles.legal__par}>
                Some Websites and certain content may be subject to different or
                additional terms. By accessing any other Websites or content,
                you agree to be bound by any additional terms that govern use of
                each such Website or such content.
              </p>
              <p className={styles.legal__par}>
                Please read these Terms carefully as they contain important
                information regarding your legal rights, remedies and
                obligations with respect to your use of the Websites, including
                but not limited to various limitations, exclusions, and
                indemnities.
              </p>
              <p className={styles.legal__par}>
                <strong>
                  <i>
                    By accessing or using the Websites, and the content and
                    services available via the Websites, you signify that you
                    have read, understand and agree to be bound by these Terms
                    in all respects with respect to the Websites; such agreement
                    will be deemed for all legal purposes to be in writing and
                    legally enforceable as a signed written agreement. If you
                    are not willing to be bound by each and every term or
                    condition, or if any representation made herein by you is
                    not true, you may not use, and must cease using, the
                    Websites.
                  </i>
                </strong>
              </p>
              <p className={styles.legal__par}>
                As used in these Terms and the Websites, SAS, us, and we refer
                to the SAS network and/or one or more of its Member Firms. Each
                Member Firm in the SAS network is a separate legal entity. For
                further details, please see
                <Link href='/about/network-structure'>
                  <a className={styles.legal__link}>www.sas.com/structure.</a>
                </Link>
                See
                <Link href='/about/office-locations'>
                  <a className={styles.legal__link}>
                    http://www.sas.com/about/office-locations
                  </a>
                </Link>
                for a list of countries in which SAS Member Firms operate.
              </p>
            </div>
          </article>
          <article className={styles.legal__article} data-bg>
            <div className={styles.legal__content} style={{ width: '85%' }}>
              <h2 className={headerClasses} id='definitions'>
                Definitions and interpretation
              </h2>
              <details className={styles.legal__details}>
                <summary className={styles.legal__summary}>Content</summary>
                <p className={styles.legal__par}>
                  means all materials and content, including designs, editorial,
                  text, graphics, audiovisual materials, multimedia elements,
                  photographs, videos, music, sound recordings, reports,
                  documents, software, information, formulae, patterns, data and
                  any other work.
                </p>
              </details>
              {/* ////////// DEtails //////// */}
              <details className={styles.legal__details}>
                <summary className={styles.legal__summary}>Member Firm</summary>
                <p className={styles.legal__par}>
                  means a local partnership, firm or other entity that is a
                  member of the SAS network of firms, each of which is a
                  separate legal entity, as well as any affiliate or subsidiary
                  of any Member Firm.
                </p>
              </details>
              {/* ////////// DEtails //////// */}
              <details className={styles.legal__details}>
                <summary className={styles.legal__summary}>
                  “Partner” and “Principal”
                </summary>
                <p className={styles.legal__par}>
                  mean an individual who is a partner, principal, member,
                  shareholder or equivalent of a Member Firm, in accordance with
                  terminology commonly used in professional services
                  organisations. Likewise “office” refers to any office of one
                  or more Member Firms in the relevant jurisdiction.
                </p>
              </details>
              {/* ////////// DEtails //////// */}
              <details className={styles.legal__details}>
                <summary className={styles.legal__summary}>
                  “SAS”, “we” or “us”
                </summary>
                <p className={styles.legal__par}>
                  refer to the SAS network and/or its individual Member Firms.
                  “SAS”, “we” or “us”, as used in individual articles and
                  thought leadership pieces available on the Websites may,
                  depending on context, refer to the SAS network as a collective
                  or to individual Member Firms.
                </p>
              </details>
              {/* ////////// DEtails //////// */}
              <details className={styles.legal__details}>
                <summary className={styles.legal__summary}>
                  “SAS Parties”
                </summary>
                <p className={styles.legal__par}>
                  refers collectively and inclusively to the individual Member
                  Firms of the SAS network, including their respective officers,
                  directors, partners, principals or equivalent; personnel;
                  affiliates; business associates; licensors; and contractors
                  and subcontractors.
                </p>
              </details>
              {/* ////////// DEtails //////// */}
              <details className={styles.legal__details}>
                <summary className={styles.legal__summary}>
                  “Registered User”
                </summary>
                <p className={styles.legal__par}>
                  means a User who has registered and created an Account with
                  SAS to access enhanced features of a Website.
                </p>
              </details>
              {/* ////////// DEtails //////// */}
              <details className={styles.legal__details}>
                <summary className={styles.legal__summary}>“User”</summary>
                <p className={styles.legal__par}>
                  means all users of a Website.
                </p>
              </details>
              {/* ////////// DEtails //////// */}
              <details className={styles.legal__details}>
                <summary className={styles.legal__summary}>“You”</summary>
                <p className={styles.legal__par}>
                  means you as an individual user of a Website.
                </p>
              </details>
              <p className={styles.legal__par}>In these Terms:</p>
              <ul className={styles.legal__list}>
                <li className={styles.legal__item}>
                  the captions and headings are for convenience only and do not
                  constitute substantive matter and are not to be construed as
                  interpreting the contents of these Terms, and
                </li>
                <li className={styles.legal__item}>
                  the word &quot;including&quot;, the word &quot;includes&quot;
                  and the phrase &quot;such as&quot;, when following a general
                  statement or term (whether or not non-limiting language such
                  as &quot;without limitation&quot; or &quot;but not limited
                  to&quot; or other words of similar import are used with
                  reference thereto), is not to be construed as limiting, and
                  the word &quot;or&quot; between two or more listed matters
                  does not imply an exclusive relationship between the matters
                  being connected.
                </li>
              </ul>
            </div>
          </article>
          <article className={styles.legal__article}>
            <div className={styles.legal__content}>
              <h2 className={headerClasses} id='about'>
                About the Websites
              </h2>
              <p className={styles.legal__par}>
                The Websites provide information about SAS, including thought
                leadership and the services and products we provide. References
                to “the Website,” “the Websites”, and “www.sas.com” include all
                software, content and features provided within the relevant
                Website(s). In addition, in these Terms, all references to
                Websites addresses or URLs will also include any successor or
                replacement Websites containing substantially similar
                information as the referenced Website(s).
              </p>
              <p className={styles.legal__par}>
                The Websites offer a range of interactive features, such as
                access to premium and personalised content, user profiles,
                reading lists, commenting and other publicly accessible
                collaborative features. We may add other features from time to
                time. Certain features are available only to Registered Users.
                For more information about registration, please see the
                Registration section of these Terms.
              </p>
            </div>
          </article>
          <article className={styles.legal__article} data-bg>
            <div className={styles.legal__content}>
              <h2 className={headerClasses} id='informational-purpose'>
                Informational purposes only
              </h2>
              <p className={styles.legal__par}>
                The Websites and content available within them is for
                informational purposes only. Neither the Websites nor the
                content available within them constitutes professional advice,
                and neither should be relied upon by you or any third party,
                including for example to operate or promote your business,
                secure financing or capital in any form, obtain any regulatory
                or governmental approvals, or otherwise to procure services or
                other benefits from any entity. Before making any decision or
                taking any action, you should consult with professional
                advisers.
              </p>
            </div>
          </article>
          <article className={styles.legal__article}>
            <div className={styles.legal__content}>
              <h2 className={headerClasses} id='availability'>
                Changes to and availability of the Websites
              </h2>
              <p className={styles.legal__par}>
                The Websites are made available on an “as is” basis with no
                representation or warranty with respect to their functionality
                or availability and with no guarantee that they are complete,
                accurate, or timely nor any guarantee regarding any results you
                or others may obtain from their use. Access to all or parts of
                any of the Websites may be suspended at any time without notice.
              </p>
            </div>
          </article>
          <article className={styles.legal__article} data-bg>
            <div className={styles.legal__content}>
              <h2 className={headerClasses} id='responsibilities'>
                Your responsibilities
              </h2>
              <h3 className={styles.legal__subheader}>Acceptable conduct</h3>
              <p className={styles.legal__par}>
                You will use the Websites only for lawful purposes. If at any
                time you become aware of any violation, by any person or entity,
                of any part of these Terms, you will immediately notify us
                <Link href='#'>
                  <a className={styles.legal__link}>via this contact form</a>
                </Link>
                and provide us with assistance, as requested, to stop or remedy
                such violation.
              </p>
              <h3 className={subheaderClasses}>Prohibited conduct</h3>
              <p className={styles.legal__par}>
                In using the Websites, you must not do any of the following:
              </p>
              <ul className={styles.legal__list}>
                <li className={styles.legal__item}>
                  Post, transmit or otherwise make available through the
                  Websites any materials that are or may be: (a) threatening,
                  harassing, degrading, hateful or intimidating, or otherwise
                  fail to respect the rights and dignity of others; (b)
                  defamatory, libellous, fraudulent or otherwise tortious; (c)
                  obscene, indecent, pornographic or otherwise objectionable; or
                  (d) potentially harmful or invasive or intended to damage or
                  hijack the operation of, or to monitor the use of, any
                  hardware, software or equipment, such as a virus, worm, Trojan
                  horse, Easter Egg, time bomb, spyware or other computer code,
                  file or program (each, a “Virus”).
                </li>
                <li className={styles.legal__item}>
                  Post, transmit, or otherwise make available through the
                  Websites any material protected by copyright, trademark, trade
                  secret, right of publicity or privacy or any other proprietary
                  right, without the express prior written consent of the
                  applicable owner.
                </li>
                <li className={styles.legal__item}>
                  Use the Websites for any commercial purpose or otherwise use
                  the Websites for processing data or other information on
                  behalf of any third party.
                </li>
                <li className={styles.legal__item}>
                  Use the Websites for any purpose that is fraudulent or
                  otherwise tortious or unlawful.
                </li>
                <li className={styles.legal__item}>
                  Interfere with or disrupt the operation of the Websites or the
                  servers or networks used to make the Websites available,
                  including by hacking or defacing any portion of any of the
                  Websites; or violate any requirement, procedure or policy of
                  such servers or networks.
                </li>
                <li className={styles.legal__item}>
                  Restrict or inhibit any other person from using the Websites.
                </li>
                <li className={styles.legal__item}>
                  Create or share content without first obtaining any necessary
                  permissions from third parties or otherwise use the Websites
                  to post or transmit any information that you do not have the
                  right to provide; that would violate any applicable law or
                  regulation; or that would violate, infringe or misappropriate
                  any third party right or interest.
                </li>
                <li className={styles.legal__item}>
                  Reproduce, modify, adapt, translate, create derivative works
                  of, sell, rent, lease, loan, timeshare, distribute or
                  otherwise exploit any portion of (or any use of) the Websites
                  except as expressly authorised herein, without SAS’s express
                  prior written consent.
                </li>
                <li className={styles.legal__item}>
                  Reverse engineer, decompile or disassemble any portion of any
                  of the Websites, except where such restriction is expressly
                  permitted by applicable law.
                </li>
                <li className={styles.legal__item}>
                  Remove or alter any copyright, trademark or other proprietary
                  rights notice on the Websites or content you access via the
                  Websites.
                </li>
                <li className={styles.legal__item}>
                  Frame or mirror any portion of the Websites, or otherwise
                  incorporate any portion of the Websites into any product or
                  service, without SAS’s express prior written consent.
                </li>
                <li className={styles.legal__item}>
                  Systematically download and store Websites’ content. For the
                  avoidance of doubt, caching of the Websites is permitted by a
                  service provider acting in the normal course of its business
                  where permitted under applicable law, such as under the UK
                  Electronic Commerce (EC Directive) Regulations 2002.
                </li>
                <li className={styles.legal__item}>
                  Use any robot, spider, Websites search/retrieval application
                  or other manual or automatic device to (a) retrieve, index,
                  “scrape,” “data mine” or otherwise gather content from the
                  Websites, (b) reproduce or circumvent the navigational
                  structure or presentation of the Websites, or (c) harvest or
                  collect information about users of the Websites without SAS’s
                  express prior written consent.
                </li>
              </ul>
              <p className={styles.legal__par}>
                If you do not comply with these Terms (or if we have reasonable
                grounds to suspect or are investigating suspected
                non-compliance), we may suspend your access to the Websites or
                take any other steps we consider appropriate.
              </p>
            </div>
          </article>
          <article className={styles.legal__article}>
            <div className={styles.legal__content}>
              <h2 className={headerClasses} id='requirements'>
                Requirements to Use the Websites
              </h2>
              <p className={styles.legal__par}>
                If you are an individual, you represent and warrant that you
                have reached the age of majority in the jurisdiction in which
                you reside, and that you are in any event at least 18 years old.
              </p>
              <p className={styles.legal__par}>
                If you are using the Websites on behalf of a corporation or
                other organisation, you represent and warrant that you have the
                ability to agree to these Terms on behalf of such organisation
                and all references to &quot;you&quot; throughout these Terms
                will include such organisation, jointly and severally with you
                personally.
              </p>
              <p className={styles.legal__par}>
                You represent and warrant that you and/or the organization you
                are acting on behalf of: (i) are not located, organized, or
                resident in a country that is subject to an embargo imposed by a
                government, union, or an intergovernmental organisation,
                including without limitation the United States, the United
                Kingdom, the European Union or any EU member state, or the
                United Nations, or that has been designated by such parties as a
                “terrorist supporting” country; (ii) are not listed on any
                government, union, or intergovernmental organisation list of
                prohibited or restricted parties; and (iii) are not owned or
                controlled, directly or indirectly by any party described in
                clauses (i) and (ii) of this provision. If any applicable law,
                rule or regulation prohibits you to access the Websites, you may
                not access them. If you nevertheless access or use the Websites,
                you will still be bound to these Terms and shall have all the
                obligations, responsibilities and liabilities as if you were
                eligible to do so.
              </p>
            </div>
          </article>
          <article className={styles.legal__article} data-bg>
            <div className={styles.legal__content}>
              <h2 className={headerClasses} id='registration'>
                Registration
              </h2>
              <h3 className={styles.legal__subheader}>Features </h3>
              <p className={styles.legal__par}>
                Certain features of the Websites are available only to
                Registered Users. Current examples include access to premium
                content, reading lists, and any on-site commenting or
                collaboration activities. Additional features may be made
                available to Registered Users over time.
              </p>
              <h3 className={subheaderClasses}>How to register</h3>
              <p className={styles.legal__par}>
                To register, you will need to provide certain information about
                yourself and create a username and password. This combination of
                information (“Account”) will be your Account as a Registered
                User.
              </p>
              <p className={styles.legal__par}>
                Registrations may be accepted, rejected or cancelled by us at
                any time and for any reason. If your registration is cancelled,
                you will continue to have access to the Websites; however, you
                will no longer have access to features available only to
                Registered Users.
              </p>
              <h3 className={subheaderClasses}>
                Responsibilities of Registered Users
              </h3>
              <p className={styles.legal__par}>
                If you choose to register with us and become a Registered User,
                you agree you are solely responsible for your Account and any
                and all activities that occur under your Account, including all
                activities of any persons who gain access to your Account with
                or without your permission. In becoming a Registered User, you
                also agree to:
              </p>
              <ul className={styles.legal__list}>
                <li className={styles.legal__item}>
                  provide true, current, accurate and complete information about
                  yourself as requested by us from time to time and notify us
                  promptly of any changes to your information so that your
                  Account information is current, complete and accurate;
                </li>
                <li className={styles.legal__item}>
                  maintain the confidentiality and security of your Account,
                  including your username and password;
                </li>
                <li className={styles.legal__item}>
                  notify us immediately of any unauthorised use of your Account,
                  Account password, or service provided through your Account, as
                  well as any breach of security with respect to your Account,
                  Account password, or service provided through it; and
                </li>
                <li className={styles.legal__item}>
                  assist us, if and as we request, to stop or remedy any breach
                  of security related to your Account.
                </li>
              </ul>
              <h3 className={subheaderClasses}>Privacy of Registered Users</h3>
              <p className={styles.legal__par}>
                Our
                <Link href='/legal-notices/privacy-policy'>
                  <a className={styles.legal__link}>Privacy statement</a>
                </Link>
                explains how we protect and use your personal information; the
                Registered User section of the Privacy statement explains
                additional information we collect and additional uses of
                information about Registered Users.
              </p>
              <h3 className={subheaderClasses}>Termination </h3>
              <p className={styles.legal__par}>
                We may, in our sole discretion, suspend, restrict or terminate
                your use of the Websites (including your Account, if you are a
                Registered User), effective at any time, without notice to you,
                for any reason, including because the operation or efficiency of
                the Websites or our or any third party&apos;s equipment or
                network is impaired by your use of the Websites; we have
                received a third party complaint which relates to your use or
                misuse of the Websites; or you have been or are in breach of any
                term or condition of these Terms. We will have no responsibility
                to notify any third party, including any third party providers
                of services, merchandise or information, of any suspension,
                restriction or termination of your access to the Websites.
              </p>
            </div>
          </article>
          <article className={styles.legal__article}>
            <div className={styles.legal__content}>
              <h2 className={headerClasses} id='intellectual-property'>
                Intellectual property
              </h2>
              <h3 className={styles.legal__subheader}>Our Content</h3>
              <p className={styles.legal__par}>
                Except where expressly stated otherwise, all right, title, and
                interest in and to the Websites and all Content, source code,
                processes, designs, technologies, URLs, domain names, marks, and
                logos forming any part of the Websites (collectively, &quot;Our
                Content&quot;) are (a) fully vested in us, our licensors, or our
                suppliers and (b) protected by applicable copyrights,
                trademarks, patents, trade secrets, database rights, or other
                proprietary rights and laws.
              </p>
              <p className={styles.legal__par}>
                You agree that access and use of Our Content is subject to these
                Terms, including the disclaimers and limitations of liability
                herein. Nothing in your use of the Websites or these Terms
                grants you any right, title or interest in or to Our Content
                except the limited right to use the Websites as set out in these
                Terms.
              </p>
              <p className={styles.legal__par}>
                Unless otherwise expressly authorised by us in writing, you
                agree not to
              </p>
              <ul className={styles.legal__list}>
                <li className={styles.legal__item}>
                  copy, modify, deep link, rent, lease, loan, sell, assign,
                  sublicense, grant a security interest in or otherwise transfer
                  any right or interest in Our Content;
                </li>
                <li className={styles.legal__item}>
                  remove any proprietary notices or labels on or in Our Content;
                  or
                </li>
                <li className={styles.legal__item}>
                  allow any other person or entity to engage in any of the
                  foregoing.
                </li>
              </ul>
              <h3 className={subheaderClasses}>Your Content</h3>
              <p className={styles.legal__par}>
                The Websites may contain functionality that permits you to
                comment on articles; share materials; provide ideas, proposals,
                suggestions (“Feedback”); or otherwise make available certain
                materials through or in connection with your use of the Websites
                (collectively, “Submissions”).
              </p>
              <p className={styles.legal__par}>
                If you choose to make publicly available any of your personal
                information or other information through the Websites (for
                example through posting a comment or other form of Submission),
                you do so at your own risk. You will also comply with all
                relevant requirements set out in these Terms when making a
                Submission.
              </p>
              <p className={styles.legal__par}>
                You acknowledge and agree that your Submissions are not
                confidential; that your provision of Submissions is gratuitous,
                unsolicited and without restriction; and that the provision of
                any Submission does not place SAS under any fiduciary or other
                obligation
              </p>
              <p className={styles.legal__par}>
                We may (but have no obligation to) monitor, evaluate, alter or
                remove Submissions before or after they appear on the site;
                however, we have no control over and are not responsible for any
                use or misuse (including any distribution) by any third party of
                Submissions. If and when we do monitor your use of one or more
                of the Websites, we will do so in accordance with applicable
                law.
              </p>
              <p className={styles.legal__par}>
                You represent and warrant that you have all rights necessary to
                grant the licenses referred to in these Terms. You further
                represent and warrant that your Submissions are (a) complete and
                accurate and (b) are not fraudulent, tortious, or otherwise in
                violation of any applicable law or any right of any third party.
                You irrevocably waive any “moral rights” or other rights with
                respect to attribution of authorship or integrity of materials
                regarding each Submission that you may have under any applicable
                law under any legal theory.
              </p>
              <h3 className={subheaderClasses}>Ownership</h3>
              <p className={styles.legal__par}>
                We do not claim ownership of your Submissions; however, you
                agree that by posting, uploading, inputting, providing,
                submitting, entering, or otherwise transmitting your Submissions
                to us or any third party using the Websites:
              </p>
              <ul className={styles.legal__list}>
                <li className={styles.legal__item}>
                  You have thereby granted us a royalty-free, non-exclusive,
                  worldwide, fully paid-up, perpetual, irrevocable, transferable
                  and fully sublicensable (through multiple tiers) license,
                  without additional consideration to you or any third party, to
                  reproduce, distribute, perform, and display (publicly or
                  otherwise), create derivative works of, adapt, modify and
                  otherwise use, analyse, exploit and practice any comment or
                  Submission, in any format or media now known or hereafter
                  developed, and for any purpose (including promotional
                  purposes, such as testimonials);
                </li>
                <li className={styles.legal__item}>
                  You confirm, represent and warrant to us that you have all
                  rights, titles and interests, as well as the power and
                  authority necessary, to grant the license to your Submissions
                  set out above;
                </li>
                <li className={styles.legal__item}>
                  You acknowledge and agree that the technical processing and
                  transmission of the Websites, including your Submissions, may
                  involve transmissions over various networks and changes to
                  conform and adapt to technical requirements of connecting
                  networks or devices, and that your Submissions may be subject
                  to &quot;caching&quot; or other technical processing or
                  transmission policies and procedures by us or at intermediate
                  locations on the Internet.
                </li>
              </ul>
              <h3 className={subheaderClasses}>Deletion</h3>
              <p className={styles.legal__par}>
                If you request to have your Account deleted to which your
                Submissions are connected, you acknowledge and agree that we may
                retain a copy or copies of same for legal, compliance and
                regulatory purposes, subject always to your license to us, set
                out above, and to our Privacy statement.
              </p>
              <h3 className={subheaderClasses}>Compliance and Complaints</h3>
              <p className={styles.legal__par}>
                You agree that we may, without notice or liability, if we choose
                to do so (which we may decide at any time to do without assuming
                any obligation to do so), disclose to third parties any of your
                information or your Submissions; monitor use of the Websites;
                and monitor, review, and retain your Submissions if we believe
                in good faith that such activity is reasonably necessary to
                provide the Websites to customers, monitor adherence to or
                enforce these Terms, comply with any laws or regulations,
                respond to any allegation of illegal conduct or claimed
                violation of third party rights, or protect us or others.{' '}
              </p>
              <p className={styles.legal__par}>
                If we receive a complaint relating to your use of the Websites,
                you acknowledge and agree that we may, in our sole and absolute
                discretion and without notice or liability, investigate the
                complaint, restrict, suspend or terminate any service involved,
                and/or remove your Submissions from our servers.
              </p>
              <h3 className={subheaderClasses}>Third-Party Content</h3>
              <p className={styles.legal__par}>
                The Websites may contain links to websites and other materials
                made available by third parties (collectively, &quot;Third Party
                Content&quot;). If you use such functionality, you are directing
                us to access, route and transmit to you the applicable Third
                Party Content.
              </p>
              <p className={styles.legal__par}>
                Third Party Content may be protected by applicable copyrights,
                database rights, trademarks, patents, trade secrets or other
                proprietary rights and laws. Nothing in your use of the Websites
                or these Terms grants you any right, title or interest in or to
                this Third Party Content except for the limited right to use the
                Websites as set out in these Terms.{' '}
              </p>
              <p className={styles.legal__par}>
                We neither control nor endorse, nor are responsible for, any
                Third Party Content and we make no representations or warranties
                with respect to them. The availability of any Third Party
                Content through the Websites does not imply the endorsement of,
                or affiliation with, any provider of such Websites or materials.
                Your use of any Third Party Content is at your own risk and is
                subject to any terms, conditions and policies applicable to them
                (such as terms of service or privacy policies of the providers
                of the Third Party Content).
              </p>
              <h3 className={subheaderClasses}>Trade and Service Marks </h3>
              <p className={styles.legal__par}>
                You may not use the “PricewaterhouseCoopers” or “SAS” trade
                names, trademarks, service marks, logos or designs, or any other
                mark held by SAS, in connection with any product or service that
                is not of any SAS Member Firm nor in any manner that is likely
                to cause confusion, take unfair advantage or cause detriment.
                Nothing contained on the Websites should be construed as
                granting any right to use any trade names, trademarks, service
                marks, logos or designs without the express prior written
                consent of the owner.
              </p>
              <h3 className={subheaderClasses}>Open Source </h3>
              <p className={styles.legal__par}>
                The Websites may include open source components, which are
                licensed for use and distribution by us under applicable open
                source licenses. Use of these open source components is governed
                by and subject to the terms and conditions of the applicable
                open source license.
              </p>
              <h3 className={subheaderClasses}>
                Intellectual property infringement and other unlawful content{' '}
              </h3>
              <p className={styles.legal__par}>
                If you believe in good faith that materials made available on
                the Websites infringe your intellectual property rights or are
                otherwise unlawful, you (or your agent) may send to SAS a
                written notice by mail or e-mail, requesting that SAS remove
                such material or block access to it. If you believe in good
                faith that someone has wrongly filed a notice against you, you
                can send a counter-notice to SAS. Notices and counter-notices
                must be sent in writing to SAS’s agent by e-mail to
                sasil.secretary@sas.com or by phone to SAS’s DMCA agent’s phone
                number +1 415-498-7542. We suggest that you consult your legal
                advisor before filing a notice or counter-notice.
              </p>
            </div>
          </article>
          <article className={styles.legal__article} data-bg>
            <div className={styles.legal__content}>
              <h2 className={headerClasses} id='liability-and-warranties'>
                Liability and Warranties
              </h2>
              <h3 className={styles.legal__subheader}>
                Limitation of Liability
              </h3>
              <p className={styles.legal__par}>
                The Websites are provided for information purposes only and, to
                the maximum extent permitted by applicable law, SAS and the SAS
                Parties exclude all liability for any loss or damage of whatever
                kind and however arising in connection with your use of, or
                inability to use, the Websites and any materials you obtain via
                the Websites save that we do not exclude or limit in any way our
                liability to you where it would be unlawful for us to do so
                (including liability for death or personal injury caused by our
                negligence or the negligence of our employees, agents or
                subcontractors, and for fraud or fraudulent misrepresentation).
              </p>
              <p className={styles.legal__par}>
                You acknowledge and accept that use of the Websites is subject
                to the risks inherent in any connection and transmission on the
                internet, in particular in relation to security risks and
                vulnerabilities, technical performance and risk of interruption.
                Accordingly, neither SAS nor any SAS Parties are liable to you
                in any circumstances for any losses or damages caused by
                disruption or failure of internet networks or for any
                interruptions to or restrictions on the accessibility of the
                Websites arising for any reason, including, but not limited to,
                by reason of a virus, security related vulnerability, or
                technical or operational failure of any nature.
              </p>
              <p className={styles.legal__par}>
                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE SAS
                PARTIES DISCLAIM ALL LIABILITY AND SHALL NOT BE LIABLE FOR ANY
                DIRECT, INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL OR PUNITIVE
                LOSSES OR DAMAGES, INCLUDING WITHOUT LIMITATION DAMAGES FOR LOST
                PROFITS OR REVENUES, GOODWILL, WORK STOPPAGE, SECURITY BREACHES,
                VIRUSES, COMPUTER FAILURE OR MALFUNCTION, USE, DATA OR OTHER
                INTANGIBLE LOSSES OR COMMERCIAL DAMAGES, EVEN IF ANY OF SUCH
                PARTIES ARE ADVISED OF THE POSSIBILITY OF SUCH LOSSES, ARISING
                UNDER OR IN CONNECTION WITH THESE TERMS, THE SITE, THE USE OF OR
                INABILITY TO USE THE SAME, OR ANY OTHER SUBJECT MATTER HEREOF.
              </p>
              <p className={styles.legal__par}>
                THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE SAS PARTIES
                SHALL NOT BE RESPONSIBLE OR LIABLE TO YOU OR ANY OTHER PERSON
                FOR ANY ERRORS OR OMISSIONS IN THE WEBSITES; ANY INFORMATION
                MADE AVAILABLE THROUGH THEM; ANY DECISION MADE OR ACTION TAKEN
                IN RELIANCE ON THE WEBSITES OR THE INFORMATION MADE AVAILABLE
                THROUGH THEM; OR FOR ANY LOSS OR DAMAGES - INCLUDING DIRECT,
                INDIRECT, CONSEQUENTIAL, SPECIAL OR SIMILAR LOSSES OR DAMAGES -
                THAT ARISE OUT OF OR IN CONNECTION WITH YOUR USE OF THE WEBSITES
                OR ANY INFORMATION OR MATERIALS OBTAINED BY YOU VIA OR IN
                CONNECTION WITH THE WEBSITES.
              </p>
              <h3 className={subheaderClasses}>Indemnification</h3>
              <p className={styles.legal__par}>
                To the maximum extent permitted by applicable law, you agree to
                defend (at the indemnified party’s option), indemnify, and hold
                the SAS Parties and their insurers harmless from and against any
                action, proceedings, claims, causes of action, demand, debts,
                losses, damages, charges, expenses and costs, including
                reasonable legal costs and/or any amount paid to settle any
                action or to satisfy a judgement and expenses of any kind and
                character whatsoever incurred by us relating to or arising from
                any content or information posted or transmitted by you using
                the Websites or otherwise arising out of your use of the
                Websites or use of the Websites by any third party who is given
                or gains access to the Websites due to your action or inaction.
                Your indemnification obligation to the SAS Parties includes but
                is not limited to any instance where one or more of your
                Submissions (a) infringes any Third Party Content or other
                third-party intellectual property rights, or (b) is
                inappropriate, profane, defamatory, infringing, obscene,
                indecent or unlawful
              </p>
              <p className={styles.legal__par}>
                The SAS Parties have the right at any time to forego the
                indemnification and assume the defence of any claim.
                Notwithstanding the foregoing, it is not the intent of the SAS
                Parties to affect the rights of the SAS Parties or their
                insurers to assume the defence or settlement of any claim
                against any SAS Party for which insurance coverage is sought
                under any applicable insurance policy.
              </p>
              <h3 className={subheaderClasses}>
                Disclaimers and Assumptions of Risk
              </h3>
              <p className={styles.legal__par}>
                SAS makes no representations or warranties about the Websites.
                The Websites and all information provided to you via the
                Websites is provided “as is” and “as available”. To the maximum
                extent permitted by applicable law, the SAS Parties disclaim all
                express, implied, and statutory warranties with respect to the
                same, including without limitation any implied warranties of
                merchantability, satisfactory quality, fitness for a particular
                purpose, accuracy, completeness, non-infringement,
                non-interference, error-free service, and uninterrupted service.
                SAS neither represents nor warrants that the Websites, services
                and content provided through the Websites, or software or
                information downloaded from the Websites will be accurate,
                current, uninterrupted, error-free, omission-free, or free from
                viruses or other harmful components.
              </p>
              <p className={styles.legal__par}>
                BY MAKING AVAILABLE THE WEBSITES, SAS IS NOT MAKING AN OFFER OF
                ANY FINANCIAL, TAX, ACCOUNTING, LEGAL OR OTHER PROFESSIONAL
                SERVICES OR GOODS, AND NONE OF THE INFORMATION PRESENTED ON THE
                WEBSITES SHOULD BE CONSTRUED AS LEGAL, TAX, ACCOUNTING OR ANY
                OTHER PROFESSIONAL ADVICE OR SERVICE.{' '}
              </p>
              <p className={styles.legal__par}>
                Some jurisdictions prohibit the disclaimer of certain warranties
                or conditions or the limitation of certain types of liability.
                In such circumstances, to the extent that such prohibitions
                prohibit any exclusions and limitations in these Terms, such
                exclusions and limitations will not apply to you strictly to the
                extent necessary to make these Terms consistent with such
                prohibitions.
              </p>
            </div>
          </article>
          <article className={styles.legal__article}>
            <div className={styles.legal__content}>
              <h2 className={headerClasses} id='legal-provisions'>
                Other legal provisions
              </h2>
              <h3 className={styles.legal__subheader}>Amendments</h3>
              <p className={styles.legal__par}>
                We reserve the right to amend these Terms at any time without
                notice to you, but we will use reasonable efforts to publish
                each amendment before such amendment becomes effective. We will
                only amend these Terms if the provisions in the Terms are no
                longer appropriate or if they are incomplete, and only if the
                changes are reasonable. The latest, fully-amended version of
                these Terms will be published on the Websites. You are
                responsible for regularly reviewing the Websites to obtain
                timely notice of such amendments. If you continue to use the
                Websites after the effective date of any amendment, you will be
                conclusively deemed to have accepted such amended version of
                these Terms.
              </p>
              <h3 className={subheaderClasses}>Privacy</h3>
              <p className={styles.legal__par}>
                Each of the Websites has a Privacy statement. You acknowledge
                that you have read the Privacy statement located on each of the
                Websites, as it may be updated from time to time (the
                &quot;Privacy statement&quot;). You further acknowledge that, to
                the extent required under applicable law, by using each such
                Website you consent to the collection, use, and disclosure by us
                of your personal information (whether previously collected or to
                be collected) for the purposes identified therein.
              </p>
              <h3 className={subheaderClasses}>Our Remedies</h3>
              <p className={styles.legal__par}>
                Without limiting any of our rights, we may suspend, restrict or
                terminate your use of the Websites (including your Account, if
                you are a Registered User), effective at any time, without
                notice to you if the operation or efficiency of the Websites or
                our or any third party&apos;s equipment or network is impaired
                by your use of the Websites; we have received a third party
                complaint which relates to your use or misuse of the Websites;
                you have been or are in breach of any term or condition of these
                Terms; we are required to do so for legal reasons; or if we have
                other valid reason to do so . We will have no responsibility to
                notify any third party, including any third party providers of
                services, merchandise or information, of any suspension,
                restriction or termination of your access to the Websites.
              </p>
              <h3 className={subheaderClasses}>Enforceability</h3>
              <p className={styles.legal__par}>
                Your use of the Websites, and the content and features accessed
                through them, constitutes your agreement to these Terms; such
                agreement will be deemed for all legal purposes to be in writing
                and legally enforceable as a signed written agreement.
              </p>
              <h3 className={subheaderClasses}>No implied waiver</h3>
              <p className={styles.legal__par}>
                If you do not comply with these Terms, and we do not take action
                immediately, this does not mean we or any of the SAS Parties are
                giving up any rights that we/they may have (such as taking
                action in the future).{' '}
              </p>
              <h3 className={subheaderClasses}>Limitation Period</h3>
              <p className={styles.legal__par}>
                Any cause of action you may have with respect to these Terms or
                the Websites must be commenced within one year after the claim
                or cause of action arose, or it will be barred.
              </p>
              <h3 className={subheaderClasses}>Notices</h3>
              <p className={styles.legal__par}>
                Any notice, consent, waiver, approval, authorisation or other
                communication to be delivered in connection with these Terms:
              </p>
              <ul className={styles.legal__list}>
                <li className={styles.legal__item}>
                  by us to you will be deemed to have been effectively and
                  validly given if delivered or sent to any of the contact
                  particulars then listed in your Account; and
                </li>
                <li className={styles.legal__item}>
                  by you to us will be deemed to have been effectively and
                  validly given only if in writing and delivered or submitted
                  <Link href='/legal-notices/contact-form'>
                    <a className={styles.legal__link}>via this contact form</a>
                  </Link>
                </li>
              </ul>
              <h3 className={subheaderClasses}>Assignment</h3>
              <p className={styles.legal__par}>
                We may at any time assign our rights and obligations under these
                Terms, in whole or in part, without notice to you. You may not
                assign these Terms without our prior, written consent. These
                Terms will inure to the benefit of and bind you and us and our
                respective personal and legal representatives, successors and
                permitted assigns.
              </p>
              <h3 className={subheaderClasses}>Relationship</h3>
              <p className={styles.legal__par}>
                You agree that no joint venture, partnership, fiduciary,
                employment or agency relationship exists between us and you as a
                result of these Terms or use of the Websites.
              </p>
              <h3 className={subheaderClasses}>Entire Agreement</h3>
              <p className={styles.legal__par}>
                These Terms, as amended from time to time, including any and all
                documents, Websites, rules, Terms and policies referenced
                herein, including but not limited to the Privacy statement,
                constitutes the entire agreement between us and you with respect
                to your use of the Websites.
              </p>
              <h3 className={subheaderClasses}>English Language</h3>
              <p className={styles.legal__par}>
                The parties have requested and agree that these Terms and all
                documents relating thereto be drawn up in English.
              </p>
              <h3 className={subheaderClasses}>Severability</h3>
              <p className={styles.legal__par}>
                If a particular term is found to be unenforceable, this will not
                affect any other terms.
              </p>
              <h3 className={subheaderClasses}>Applicable Law</h3>
              <p className={styles.legal__par}>
                The Terms and any dispute or claim (including non-contractual
                disputes or claims) arising out of or in connection with them
                are governed by English law. The courts of England and Wales
                shall have exclusive jurisdiction over all disputes and claims
                arising out of or in connection with these Terms.
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
                Our cookie policy gives information about the cookies that we
                use, as well as options for managing your cookie preferences.
              </p>
            </article>
            <article className={styles.legal__card}>
              <h2 className={styles.legal__card_title}>
                <Link href='/legal-notices/legal-disclaimer'>
                  <a>Legal disclaimer</a>
                </Link>
              </h2>
              <p className={styles.legal__card_par}>
                Our legal disclaimer explains the limitations and appropriate
                use of the information contained in our websites and marketing
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
    </>
  )
}

export default TermsAndConditions
