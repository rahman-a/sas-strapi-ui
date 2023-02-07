import { SyntheticEvent, useContext, FunctionComponent, useRef } from 'react'
import classnames from 'classnames'
import styles from './Locations.module.scss'
import { DownArrow, LocationSymbol } from '../../icons'
import { DropdownMenu } from '@components/ui'
import { HeaderContext } from '@context/Header-Context'
import { Territories } from '@customTypes/Territories-Menu'

interface LocationsProps {
  list: Territories
  isMobile?: boolean
}

const Locations: FunctionComponent<LocationsProps> = ({ list, isMobile }) => {
  const { isOpen, isDropdownOpen, setIsDropdownOpen } =
    useContext(HeaderContext)
  const locationRef = useRef<HTMLDivElement>(null)
  const toggleDropdownMenuHandler = (e: SyntheticEvent): void => {
    e.stopPropagation()
    setIsDropdownOpen(!isDropdownOpen)
  }
  const locationClasses = classnames(styles.locations, {
    [styles.locations__white]: isOpen,
    [styles['locations__dropdown']]: isDropdownOpen,
    [styles['locations__is-mobile']]: isMobile,
  })
  const territoriesClasses = classnames(styles.locations__territories, {
    'is-visible': isDropdownOpen,
  })

  const closeDropdownHandler = () => {
    if (
      locationRef.current &&
      locationRef.current.classList.contains(styles['locations__dropdown'])
    ) {
      setIsDropdownOpen(false)
    }
  }

  return (
    <div
      className={locationClasses}
      onClick={toggleDropdownMenuHandler}
      ref={locationRef}
    >
      <span>
        <LocationSymbol />
      </span>
      <span>Global</span>
      <span>
        <DownArrow />
      </span>
      <div className={territoriesClasses} onClick={(e) => e.stopPropagation()}>
        <DropdownMenu list={list} closeDropdownHandler={closeDropdownHandler} />
      </div>
    </div>
  )
}

export default Locations
