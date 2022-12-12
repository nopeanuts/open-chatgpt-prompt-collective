import type { ComponentMeta } from '@storybook/react'

import QueryPage from './QueryPage'

export const generated = () => {
  return <QueryPage />
}

export default {
  title: 'Pages/QueryPage',
  component: QueryPage,
} as ComponentMeta<typeof QueryPage>
