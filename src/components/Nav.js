import React from 'react'
import PropTypes from 'prop-types'

const Nav = ({ navItems = [], setPage = () => {} }) => (
  <>
    <nav className='bg-white shadow dark:bg-gray-800'>
      <div className='container px-6 py-3 mx-auto md:flex'>
        <div className='flex items-center justify-between'>
          {/* <!-- Mobile menu button --> */}
          <div className='flex md:hidden'>
            <button
              type='button'
              className='text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400'
              aria-label='toggle menu'
            >
              <svg viewBox='0 0 24 24' className='w-6 h-6 fill-current'>
                <path
                  fillRule='evenodd'
                  d='M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z'
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
        <div className='w-full md:flex md:items-center md:justify-between'>
          <div className='flex flex-col pr-2 py-3 -mx-4 md:flex-row md:mx-0 md:py-0'>
            {navItems.map((item, index) => {
              const { name } = item
              return (
                <a
                  href='#'
                  key={index}
                  onClick={() => {
                    setPage(name)
                  }}
                  className='nav-item px-4 py-1 text-sm capitalize font-medium text-gray-700 transition-colors duration-200 transform rounded dark:text-gray-200 hover:bg-gray-900 hover:text-gray-100 md:mr-2'
                >
                  {name}
                </a>
              )
            })}
          </div>

          <div className='relative'>
            <span className='absolute inset-y-0 left-0 flex items-center pl-3'>
              <svg
                className='w-5 h-5 text-gray-400'
                viewBox='0 0 24 24'
                fill='none'
              >
                <path
                  d='M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                ></path>
              </svg>
            </span>

            <input
              type='text'
              className='w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300'
              placeholder='Search'
            />
          </div>
        </div>
      </div>
    </nav>
  </>
)

Nav.propTypes = {
  navItems: PropTypes.array,
  setPage: PropTypes.func,
}

export default Nav
