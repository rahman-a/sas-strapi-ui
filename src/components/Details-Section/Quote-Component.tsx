import React, { FunctionComponent } from 'react'
import styles from './Details-Section.module.scss'
import { Quote } from '@customTypes/Details-Section'

type QuoteComponentProps = {
  quote: Quote
}

const QuoteComponent: FunctionComponent<QuoteComponentProps> = ({ quote }) => {
  return (
    <div className={styles.details__quote}>
      <div className={styles.details__quote_wrapper}>
        <blockquote>{`"${quote.quote}"`}</blockquote>
        {(quote.name || quote.role) && (
          <div className={styles.details__quote_meta}>
            {quote.name && <p>{quote.name},</p>}
            {quote.role && <p>{quote.role}</p>}
          </div>
        )}
      </div>
    </div>
  )
}

export default QuoteComponent
