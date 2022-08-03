import React from 'react'
import MenuList from './menuList/MenuList'
import Button from '../button/Button'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div className='flex w-full h-[90px] fixed bg-white mx-auto'>
      <div className='flex justify-around w-full items-center mx-auto'>
        <Link to="/">
          <img src='https://uploads-ssl.webflow.com/602a49b4c90708f6641a192e/6120bd865c8d971592d7d18f_cat-logo.svg'/>
        </Link>
        <div className=''>
          <MenuList/>
        </div>
      </div>
    </div>
  )
}

export default Menu