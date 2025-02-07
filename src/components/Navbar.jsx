import { navItems, navOther } from "../constants"

// eslint-disable-next-line react/prop-types
const Navbar = ({ setFilter }) => {
  return (
    <div className='hidden lg:block mt-16'>
      <div className="container px-16">
        <div className='flex w-fit gap-10 mx-auto font-medium text-lg py-4 text-black items-center' >
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => setFilter(item.label)}
              className='hover:text-primary hover:underline uppercase'
            >
              {item.label}
            </button>
          ))}
          {navOther.map((other) => (
            <button
              key={other.label}
              onClick={() => setFilter(other.label)}
              className='uppercase px-4 p-2 bg-primary text-white hover:bg-secondary hover:text-gray-200'
            >
              {other.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Navbar
