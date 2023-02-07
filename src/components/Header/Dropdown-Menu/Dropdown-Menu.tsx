import React, { useContext } from 'react'
import { HeaderContext } from '@context/Header-Context'
import NavOverlay from '../Nav-Overlay/Nav-Overlay'
import Search from '../Search/Search'
import SubMenu from '../Sub-Menu/Sub-Menu'

const DropdownMenu: React.FC = () => {
  const { subNavType, isOpen } = useContext(HeaderContext)
  let dropdownContent = null
  if (isOpen) {
    dropdownContent = subNavType === 'search' ? <Search /> : <SubMenu />
  }
  return <NavOverlay>{dropdownContent}</NavOverlay>
}

export default DropdownMenu
