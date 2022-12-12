import { render } from '@redwoodjs/testing/web'

import PromptEditor from './PromptEditor'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('PromptEditor', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PromptEditor />)
    }).not.toThrow()
  })
})
