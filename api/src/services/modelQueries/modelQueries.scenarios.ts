import type { Prisma, ModelQuery } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.ModelQueryCreateArgs>({
  modelQuery: {
    one: {
      data: {
        input: 'String',
        output_options: 'String',
        output_ranking: 2975736,
        template: {
          create: { category: 'String', input: 'String', output: 'String' },
        },
      },
    },
    two: {
      data: {
        input: 'String',
        output_options: 'String',
        output_ranking: 7343279,
        template: {
          create: { category: 'String', input: 'String', output: 'String' },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<ModelQuery, 'modelQuery'>
