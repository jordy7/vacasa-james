import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { searchRepos } from '../services/githubService'

const getRepos = async () => {
  const params = {
    q: 'org:vacasaoss',
    sort: 'stars',
    order: 'desc',
  }

  const { data } = await searchRepos(params)

  return data
}

const RepositoriesPage = () => {
  const [repositories, setRepositories] = useState([])

  useEffect(() => {
    getRepos()
      .then((data) => {
        setRepositories(data?.items)
      })
      .catch(() => {
        console.log('Error')
      })
  }, [])

  return (
    <div className='container px-6 py-3 mx-auto grid md:grid-cols-2 md:grid-rows-1 md:gap-x-5'>
      {repositories.map((item, index) => {
        const { name = '', full_name: fullName = '', description = '' } = item
        return (
          <>
            <div className='w-full px-4 py-3 mx-auto mb-5 bg-white rounded-md shadow-md dark:bg-gray-800'>
              <div>
                <h1 className='mt-2 text-lg font-semibold text-gray-800 dark:text-white'>
                  {name}
                </h1>
                <div className='flex items-center mt-2 text-gray-700 dark:text-gray-200'>
                  <span>{fullName}</span>
                </div>
              </div>

              <div>
                <p className='mt-2 text-sm text-gray-600 dark:text-gray-300'>
                  {description}
                </p>
              </div>
            </div>
          </>
        )
      })}
    </div>
  )
}

export default RepositoriesPage
