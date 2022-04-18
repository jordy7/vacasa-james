import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Nav from '../Nav'

describe('Nav', () => {
  it('renders with No nav items', () => {
    const { container } = render(
      <Nav navItems={[]} setPage={() => {}} />
    )
    expect(container.querySelectorAll('a.nav-item').length).toBe(0)
  })
  it('renders with 2 nav items', () => {
    const { container } = render(
      <Nav navItems={[{ name: 'foo' }, { name: 'bar' }]} setPage={() => {}} />
    )
    expect(container.querySelectorAll('a.nav-item').length).toBe(2)
  })

  it('Test onClick event', () => {
    let isClicked = false

    const { container } = render(
      <Nav
        navItems={[{ name: 'foo' }, { name: 'bar' }]}
        setPage={() => {
          isClicked = true
        }}
      />
    )
    fireEvent.click(container.querySelector('a.nav-item'))
    expect(isClicked).toBe(true)
  })
})
