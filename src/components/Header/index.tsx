import React from 'react'
import HeaderContextProvider from '@context/Header-Context'
import Header from './Header'
import { Menu } from '@customTypes/Menu'

interface MainHeaderProps {
  menu: Menu
}

const MainHeader: React.FC<MainHeaderProps> = ({ menu }) => (
  <HeaderContextProvider>
    <Header menu={menu} />
  </HeaderContextProvider>
)

export default MainHeader
