import React, { useState } from 'react'
import { BsSunFill } from 'react-icons/bs'
import { FaMoon } from 'react-icons/fa'
import { HiOutlineMenu } from 'react-icons/hi'
import { MdOutlineClose } from 'react-icons/md'
import useDarkMode from  '../../useDarkMode'
function Navbar(props) {
  const { isMobile } = props
  const [openMenu, setOpenMenu] = useState(false)
  const [isDarkMode , toggleDarkMode] = useDarkMode()
  const handleMenu = () => {
    setOpenMenu(!openMenu)
  }
  return (
    <nav className='flex items-center'>
      <div className='flex items-center'>
        <div className='text-20 font-bold mr-4'>CreditCard</div>
        {isDarkMode ? (
          <BsSunFill size={'24px'} color="e9c46a" className='cursor-pointer' onClick={()=>toggleDarkMode(!isDarkMode)} />
        ): (
          <FaMoon size={'24px'} color="e9c46a" className='cursor-pointer' onClick={()=>toggleDarkMode(!isDarkMode)} />
        )}
      </div>
      <ul className='md:flex md:gap-10 ml-auto text-16 font-semibold'>
        {openMenu && isMobile ?
          (<MdOutlineClose
            size={'24px'}
            className="cursor-pointer"
            onClick={handleMenu}
          />)
          : !openMenu && isMobile ?
            (<HiOutlineMenu
              size={'24px'}
              className='cursor-pointer'
              onClick={handleMenu}
            />)
            : (
              <>
                <li className='li-hover'>Features</li>
                <li className='li-hover'>Menu</li>
                <li className='li-hover'>Our Story</li>
                <li className='li-hover ml-28'>Contact</li>
              </>
            )
        }
        {openMenu &&
          <div className="absolute bg-white right-8 p-8 text-left z-10 text-14 text-black">
            <li className='cursor-pointer mt-2'>Features</li>
            <li className='cursor-pointer mt-2'>Menu</li>
            <li className='cursor-pointer mt-2'>Our Story</li>
            <li className='cursor-pointer mt-2'>Contact</li>
          </div>
        }
      </ul>
    </nav>
  )
}
export default Navbar
