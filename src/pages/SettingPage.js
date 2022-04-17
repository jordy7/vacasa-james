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
            <img className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300" src="https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" alt="" />

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
