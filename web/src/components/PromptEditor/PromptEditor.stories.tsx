// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof PromptEditor> = (args) => {
//   return <PromptEditor {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import PromptEditor from './PromptEditor'

export const generated = () => {
  return <PromptEditor />
}

export default {
  title: 'Components/PromptEditor',
  component: PromptEditor,
} as ComponentMeta<typeof PromptEditor>
