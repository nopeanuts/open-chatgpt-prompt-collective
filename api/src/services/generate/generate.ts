import type { QueryResolvers, MutationResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

export const generate: MutationResolvers['generate'] = async (
  { templateId, input },
  { context }
) => {
  const userId = context.currentUser.id
  const output_options = [`gpt3(${input})-1`, `gpt3(${input})-2`]

  const { id } = await db.modelQuery.create({
    data: {
      input,
      output_options,
      template: {
        connect: {
          id: templateId,
        },
      },
      user: {
        connect: {
          id: userId,
        },
      },
    },
  })
  return {
    id,
    output: output_options,
  }
}
