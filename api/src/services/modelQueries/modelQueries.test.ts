import type { ModelQuery } from '@prisma/client'

import {
  modelQueries,
  modelQuery,
  createModelQuery,
  updateModelQuery,
  deleteModelQuery,
} from './modelQueries'
import type { StandardScenario } from './modelQueries.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('modelQueries', () => {
  scenario('returns all modelQueries', async (scenario: StandardScenario) => {
    const result = await modelQueries()

    expect(result.length).toEqual(Object.keys(scenario.modelQuery).length)
  })

  scenario(
    'returns a single modelQuery',
    async (scenario: StandardScenario) => {
      const result = await modelQuery({ id: scenario.modelQuery.one.id })

      expect(result).toEqual(scenario.modelQuery.one)
    }
  )

  scenario('creates a modelQuery', async (scenario: StandardScenario) => {
    const result = await createModelQuery({
      input: {
        input: 'String',
        output_options: 'String',
        output_ranking: 7671742,
        templateId: scenario.modelQuery.two.templateId,
      },
    })

    expect(result.input).toEqual('String')
    expect(result.output_options).toEqual('String')
    expect(result.output_ranking).toEqual(7671742)
    expect(result.templateId).toEqual(scenario.modelQuery.two.templateId)
  })

  scenario('updates a modelQuery', async (scenario: StandardScenario) => {
    const original = (await modelQuery({
      id: scenario.modelQuery.one.id,
    })) as ModelQuery
    const result = await updateModelQuery({
      id: original.id,
      input: { input: 'String2' },
    })

    expect(result.input).toEqual('String2')
  })

  scenario('deletes a modelQuery', async (scenario: StandardScenario) => {
    const original = (await deleteModelQuery({
      id: scenario.modelQuery.one.id,
    })) as ModelQuery
    const result = await modelQuery({ id: original.id })

    expect(result).toEqual(null)
  })
})
