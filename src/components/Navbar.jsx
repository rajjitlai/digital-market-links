import React from 'react'
import { navItems, navOther } from '../constants'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='hidden lg:block'>
      <div className="container px-16">
        <div className='flex w-fit gap-10 mx-auto font-medium text-lg py-4 text-black items-center' >
          {
            navItems.map((items) => {
              return <Link to={items.path} key={items.label} className='hover:text-primary hover:underline uppercase'>{items.label}</Link>
            })
          }
          {
            navOther.map((other) => {
              return <Link to={other.path} key={other.label} className='uppercase px-4 p-2 bg-primary text-white hover:bg-secondary hover:text-gray-200'>{other.label}</Link>
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Navbar