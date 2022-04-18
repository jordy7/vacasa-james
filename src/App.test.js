import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from './App'

describe('App', () => {
  test('render 1 header and 1 main', () => {
    const { container } = render(<App />)
    expect(container.querySelectorAll('header').length).toBe(1);
    expect(container.querySelectorAll('main').length).toBe(1);
  })
})
