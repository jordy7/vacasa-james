import React, { useState } from 'react'
import Logo from './assets/altafino.svg'
import './app.styles.scss'
import RepositoriesPage from './pages/RepositoriesPage'
import SettingPage from './pages/SettingPage'
import Nav from './components/Nav'

const REPOS_PAGE = 'repositories'
const SETTING_PAGE = 'settings'

const NAV_ITEMS = [{ name: REPOS_PAGE }, { name: SETTING_PAGE }]

export default function App() {
  const [page, setPage] = useState(REPOS_PAGE)
  
  return (
    <>
      <header>
        <Nav navItems={NAV_ITEMS} setPage={setPage} />
        <h1 className='container px-6 py-3 mx-auto text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white'>{page}</h1>
      </header>
      <main>
        {page === REPOS_PAGE && <RepositoriesPage />}
        {page === SETTING_PAGE && <SettingPage />}
      </main>
    </>
  )
}
