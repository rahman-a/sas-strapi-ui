import React, {
  FunctionComponent,
  useEffect,
  useState,
  useCallback,
} from 'react'
import styles from './Accordion.module.scss'
import AccordionItem from './Accordion-Item/Accordion-Item'
import { Links } from '@customTypes/Menu'

interface AccordionProps {
  menu: Links
}

const Accordion: FunctionComponent<AccordionProps> = ({ menu }) => {
  const [firstItemsArray, setFirstItemsArray] = useState<Links>([])
  const [secondItemsArray, setSecondItemsArray] = useState<Links>([])

  const splitItems = useCallback(() => {
    const data = [...menu]
    data.splice(0, 1)
    const firstITemsArray = data.splice(0, Math.floor(data.length / 2) + 1)
    setFirstItemsArray(firstITemsArray)
    setSecondItemsArray(data)
  }, [menu])

  useEffect(() => {
    console.log('accordion menu: ', menu)
    splitItems()
  }, [])
  return (
    <div className={styles.accordion}>
      <div className={styles.accordion__wrapper}>
        <div className={styles.accordion__col}>
          {firstItemsArray.map((item) => (
            <AccordionItem key={item.id} item={item} />
          ))}
        </div>
        <div className={styles.accordion__col}>
          {secondItemsArray.map((item) => (
            <AccordionItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Accordion
