import React from 'react'

const SUPPORT_ITEMS = [
  { name: 'Privacy policy', url: '#' },
  { name: 'Terms of Service', url: '#' },
]
const SettingPage = () => (
  <>
    <section className='bg-white dark:bg-gray-900'>
      <div className='container px-6 py-10 mx-auto'>
        <div className='p-6 border rounded-xl border-r-gray-200 dark:border-gray-700'>
          <div className='md:flex md:items-start md:-mx-4'>
            <span className='inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 dark:text-white dark:bg-blue-500'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-6 h-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01'
                />
              </svg>
            </span>

            <div className='mt-4 md:mx-4 md:mt-0'>
              <h3 className='text-2xl font-medium text-gray-700 capitalize dark:text-white'>
                Vacasa Interview
              </h3>

              <p className='mt-3 text-gray-500 dark:text-gray-300'>
                vacasa.interview@interview.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div>
      <h2 className='container px-6 py-3 mx-auto text-1 xl font-semibold text-gray-800 capitalize lg:text-2xl dark:text-white'>
        Support
      </h2>
      {SUPPORT_ITEMS.map((item, index) => {
        const { name, url } = item
        return (
          <>
            <div key={index} className='container px-6 py-2 mx-auto'>
              <a href={url} className='p-6 block border rounded-xl border-r-gray-200 hover:text-blue-400 dark:border-gray-700'>
                {name}
              </a>
            </div>
          </>
        )
      })}
    </div>
  </>
)

export default SettingPage
