import React, {
  useRef,
  useState,
  useEffect,
  useCallback,
  FunctionComponent,
} from 'react'
import styles from '../Accordion.module.scss'
import classnames from 'classnames'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { RightArrow } from '@components/icons'
import { Link as LinkItem } from '@customTypes/Menu'

interface AccordionItemProps {
  item: LinkItem
}

const AccordionItem: FunctionComponent<AccordionItemProps> = ({ item }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const contentRef = useRef<HTMLDivElement>(null)
  const contentWrapperRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  const toggleAccordionHandler = useCallback(
    (e: React.SyntheticEvent) => {
      if (!item.submenu?.length) {
        router.push(item.href)
        return
      }
      if (!isOpen) {
        const wrapperHeight = contentWrapperRef.current?.clientHeight
        if (contentRef.current) {
          contentRef.current.style.height = `${wrapperHeight}px`
        }
        setIsOpen(true)
      } else {
        if (contentRef.current) {
          contentRef.current.style.height = '0px'
          setIsOpen(false)
        }
      }
    },
    [isOpen, item.href, item.submenu, router]
  )

  const contentHeader = classnames(
    styles.accordion__content_link,
    styles.accordion__content_header
  )
  const contentTitle = classnames(
    styles.accordion__title,
    styles.accordion__content_title
  )

  const iconClasses = classnames(styles.accordion__arrow, {
    [styles.accordion__arrow_open]: isOpen,
  })

  return (
    <div className={styles.accordion__item}>
      <div
        className={styles.accordion__header}
        onClick={toggleAccordionHandler}
      >
        <Link
          href={item.href || ''}
          className={styles.accordion__link}
          onClick={(e) => e.preventDefault()}
        >
          <h2 className={styles.accordion__title}>{item.label}</h2>
          {item.submenu && item.submenu?.length > 0 && (
            <span className={iconClasses}>
              <RightArrow />
            </span>
          )}
        </Link>
      </div>
      {item.submenu && item.submenu?.length > 0 && (
        <div className={styles.accordion__content} ref={contentRef}>
          <div
            className={styles.accordion__content_wrapper}
            ref={contentWrapperRef}
          >
            {item.submenu.map((subItem) => (
              <Link
                href={subItem.href || ''}
                key={subItem.id}
                className={contentHeader}
              >
                <h2 className={contentTitle}>{subItem.label}</h2>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default AccordionItem
