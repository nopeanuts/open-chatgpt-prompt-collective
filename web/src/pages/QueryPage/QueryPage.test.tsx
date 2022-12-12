import { render } from '@redwoodjs/testing/web'

import QueryPage from './QueryPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('QueryPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<QueryPage />)
    }).not.toThrow()
  })
})
